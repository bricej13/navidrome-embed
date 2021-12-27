export class Playlist {
    id: string;
    name: string;
    songCount: number;
    duration: number;
    public: boolean;
    owner: string;
    created: Date;
    changed: Date;
    entry: Track[]

}
export abstract class Track {
    id: string;
    parent: string;
    title: string;
    album: string;
    artist: string;
    track: number;
    year: number;
    coverArt: string;
    size: number;
    contentType: string;
    suffix: string;
    duration: number;
    bitRate: number;
    discNumber: number;
    created: Date;
    albumId: string;
    artistId: string;
    type: string;
}
