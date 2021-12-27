import {Playlist} from "./Track";
import {SubsonicActionEnum} from "./SubsonicActionEnum"
import {EmbedTypeEnum} from "./EmbedTypeEnum";

export default class NavidromeService {
    baseUrl: string;
    u: string;
    t: string;
    s: string;
    trackId?: string;
    albumId?: string;
    playlistId?: string;
    errors: string[] = [];


    constructor(search) {
        const params = search.substring(1).split('&')
            .reduce((acc, cur) => {
                const [key, value] = cur.split('=')
                return {...acc, ...{[key]: decodeURI(value)}}
            }, {})

        if (params.baseUrl) {
            try {
                this.baseUrl = new URL(params.baseUrl).toString();
            } catch (_) {
                this.errors.push('<code>baseUrl</code> is not a valid url')
            }
        } else {
            this.errors.push('<code>baseUrl</code> is a required url query parameter')
        }

        ['u', 't', 's'].forEach(key => {
            if (params[key]) {
                this[key] = params[key]
            } else {
                this.errors.push(`<code>${key}</code> is a required url query parameter`)
            }
        })

        if (params.playlistId) {
            this.playlistId = params.playlistId
        } else if (params.albumId) {
            this.albumId = params.albumId
        } else if (params.trackId) {
            this.trackId = params.trackId
        } else {
            this.errors.push('<code>playlistId</code> is a required url query parameter')
        }
    }

    public get hasErrors(): boolean {
        return this.errors.length > 0;
    }

    public get embedType(): EmbedTypeEnum {
        if (this.playlistId) return EmbedTypeEnum.Playlist
        if (this.albumId) return EmbedTypeEnum.Album
        if (this.trackId) return EmbedTypeEnum.Track
        return null;
    }

    getApiUrl = (action: SubsonicActionEnum, id: string) : string => {
        return `${this.baseUrl.toString()}rest/${action}?u=${this.u}&t=${this.t}&s=${this.s}&f=json&v=1.8.0&c=NavidromeEmbed&id=${id}&_=${new Date().getTime()}`
    }

    getTracks = async (): Promise<Playlist> => {
        return new Promise<Playlist>((resolve, reject) =>
            fetch(this.getApiUrl(SubsonicActionEnum.GetPlaylist, this.playlistId))
                .then(r => r.json())
                .then(j => resolve(j['subsonic-response']['playlist'] as Playlist))
                .catch(err => reject(err))
        );
    }

    public imageUrl(mediaFileId: string): string {
        return this.getApiUrl(SubsonicActionEnum.AlbumArt, mediaFileId);
    }

    public streamUrl(mediaFileId: string): string {
        return this.getApiUrl(SubsonicActionEnum.Stream, mediaFileId);
    }
}
