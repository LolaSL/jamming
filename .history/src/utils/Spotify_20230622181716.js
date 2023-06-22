const clientId = 'a18dfb23f21c4bf69aa0c5c6ac72acdc'; // Insert client ID here.
const redirectUri = 'http://localhost:3000/'; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.

class Spotify {
    constructor() {
        this.accessToken = 'BQA2bIb43vRUemDoHulOL_3CiyU7nbAYyQSrtc2ez_tcAnViWZVKoV8caotR6kCmkYbpLStA_ebdN8CsCrqQZ6MtnQwo1GAroQy9EC0wUhKULPkLmxNsJv4QdZHuYwqOf0tDGOr2d3RBSvEPD2VW9Q2YlH-JihKQZTdlSCCbOUipsgtZJYdGRbNrzCZ0air9orcE5tescBy4sqMI_YtbdZeRxRyoFcuLBg91BBWGlXUnzwIy2xaBoju2hpFBmu4uSwvvU4y_iwrJ415zoaVBHpYo';
    }

    getAccessToken() {
        if (this.accessToken) {
            return this.accessToken;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
            this.accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => (this.accessToken = ''), expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return this.accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    }

    async search(term) {
        const accessToken = this.getAccessToken();
        const response = await fetch(
            `https://api.spotify.com/v1/search?type=track&q=${term}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        const jsonResponse = await response.json();
        if (!jsonResponse.tracks) {
            return [];
        }
        return jsonResponse.tracks.items.map((track) => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            genre: track.album.genre,
            uri: track.uri,
        }));
    }

    async savePlaylist(name, trackUris) {
        if (!name || !trackUris.length) {
            return;
        }

        const accessToken = this.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}` };
        let userId;

        const userResponse = await fetch('https://api.spotify.com/v1/me', {
            headers: headers,
        });
        const userJsonResponse = await userResponse.json();
        userId = userJsonResponse.id;

        const createPlaylistResponse = await fetch(
            `https://api.spotify.com/v1/users/${userId}/playlists`,
            {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({ name: name }),
            }
        );
        const createPlaylistJsonResponse = await createPlaylistResponse.json();
        const playlistId = createPlaylistJsonResponse.id;

        await fetch(
            `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
            {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({ uris: trackUris }),
            }
        );
    }
}

export default Spotify;
