import {mergeProps, splitProps} from "solid-js";

export default function AlbumArt(props) {
    const merged = mergeProps({width: 6}, props);

    const albumPath = props.service.imageUrl(merged.id)
    return <img
        style={{
            height: merged.width + 'rem',
        }}
        src={albumPath}
        alt={`${props.title} - ${props.artist}`}
    />
}
