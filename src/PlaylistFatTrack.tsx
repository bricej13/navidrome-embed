import {Show} from 'solid-js'
import AlbumArt from "./AlbumArt";
import Progress from "./Progress";

export default function PlaylistFatTrack(props) {
    return (
        <div onClick={() => props.onClick}
             class="flex flex-row gap-0 bg-dark-700 hover:bg-dark-400 cursor-pointer">
            <AlbumArt width={props.isActive ? 5 : 0 } {...props} />
            <div class="flex flex-col flex-1">
                <div class="flex flex-row items-center flex-1 transition">
                    <div class="flex flex-col justify-center flex-1 px-4 py-2">
                        <div class={props.isActive ? 'text-xl' : 'text-xs'}>
                            <span class="text-gray-300 font-weight-600">{props.title}</span>
                        </div>
                        <div class={props.isActive ? 'text-sm' : 'text-xs'}>
                            <span class="text-gray-500">{props.artist}</span>
                        </div>
                    </div>
                    <Show when={props.isActive}>
                        <div class="px-4 text-gray-400 flex flex-col items-center">
                            <ion-icon name={props.playing() && props.isActive ? 'pause' : 'play'}
                                      size={props.isActive ? 'large' : 'medium'}>
                            </ion-icon>
                        </div>
                    </Show>
                </div>
                <Progress height={props.isActive ? 2 : 0} progress={props.progress}/>
            </div>
        </div>
    )
}
