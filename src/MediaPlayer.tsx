import {batch, createEffect, createMemo, createResource, Show} from "solid-js";
import {createSignal, onMount, For} from "solid-js";
import PlaylistFatTrack from "./PlaylistFatTrack";
import {Track} from "./models/Track";
import NavidromeService from "./models/NavidromeService";

export default function MediaPlayer(props) {
    const {service}: { service: NavidromeService } = props
    const [playlist] = createResource( service.getTracks)
    const [playlistIndex, setPlaylistIndex] = createSignal<number>(0)
    const [playing, setPlaying] = createSignal<boolean>(false)
    const [progress, setProgress] = createSignal<number>(0)
    const activeTrack = createMemo(() => playlist()?.entry[playlistIndex()])
    const streamUrl = createMemo(() => service.streamUrl(activeTrack()?.id))
    createEffect(() => {
        playing() ? audioPlayer.play() : audioPlayer.pause()
    })
    createEffect(() => {
        if (activeTrack()) {
            document.title = activeTrack().title + ' - ' + activeTrack().artist + ' | Navidrome Embed'
        }
    })
    const playTrack = (i) => {
        if (playlistIndex() === i) {
            setPlaying(!playing())
        } else {
            batch(() => {
                setPlaylistIndex(i)
                setProgress(0)
                setPlaying(true)
            });
        }
    }
    let audioPlayer
    onMount(async () => {
            audioPlayer.addEventListener('ended', () => {
                if (playlistIndex() + 1 <= playlist().songCount) {
                    batch(() => {
                        setPlaylistIndex(i => i + 1)
                        setProgress(0)

                    })
                } else {
                    setPlaying(false)
                    setPlaylistIndex(0)
                }
            })
            audioPlayer.addEventListener('timeupdate', (e) => {
                if (activeTrack()) {
                    setProgress(e.target.currentTime / activeTrack().duration)
                }
            })
        }
    )

    return (<>
            <audio ref={audioPlayer} src={streamUrl()} autoplay={playing()} style="width: 100%">
                Your browser does not support the<code>audio</code> element.
            </audio>

            <Show when={!playlist.loading}>
                <For each={playlist().entry}>{(t: Track, i) =>
                    <PlaylistFatTrack
                        {...t}
                        service={service}
                        onClick={playTrack(i())}
                        playing={playing}
                        progress={progress}
                        isActive={i() === playlistIndex()}
                    />
                    // </Show>
                }</For>

            </Show>
        </>
    );
};

