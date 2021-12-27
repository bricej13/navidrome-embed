import {mergeProps, splitProps} from "solid-js";

export default function Progress(props) {
    const merged = mergeProps({height: 2, progress: 0}, props);

    return <div class={`h-${merged.height}`}>
        <div class={`h-${merged.height} bg-green-600`}
             style={{
                 width: merged.progress() * 100 + '%',
                 "background-color": 'rgb(48, 99, 142)'
             }}>
        </div>
    </div>
}
