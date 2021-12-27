import {For} from "solid-js";

export default function ConfigError(props) {

    return <div class="text-white">
        <h1 class="text-2xl pt-4">Error embedding Navidrome playlist:</h1>
        <ul class="list-disc py-8">
            <For each={props.service.errors}>{(error: string, i) =>
                <li innerHTML={error}/>
            }
            </For>
        </ul>
    </div>
}
