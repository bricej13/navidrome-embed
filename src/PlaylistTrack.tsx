import {mergeProps, splitProps} from "solid-js";
import AlbumArt from "./AlbumArt";
import PlayButton from "./PlayButton";

export default function PlaylistTrack(props) {
    return (
        <div onClick={() => props.onClick} class="flex flex-row px-4 py-1 gap-4 bg-dark-700 hover:bg-dark-400 cursor-pointer items-center">
            <div class="text-gray-400 flex flex-column items-center">
                <ion-icon name='play' size="small"></ion-icon>
            </div>
            <div class="flex flex-col justify-center flex-1">
                <div class="text-gray-300 text-xs font-weight-600">{props.title}</div>
                <div class="text-gray-500 text-xs ">{props.artist}</div>
            </div>
            <div class="text-xs text-gray-500">
                {/*{props.duration}*/}
            </div>
        </div>
    )
}
