import {Component, Show} from "solid-js";
import Footer from "./Footer";
import MediaPlayer from "./MediaPlayer";
import ConfigError from "./ConfigError";
import NavidromeService from "./models/NavidromeService";

const App: Component = () => {
    const service = new NavidromeService(window.location.search)
    return (
        <div class="flex flex-row justify-center bg-dark-500 h-full">
            <div class="flex flex-col min-h-screen items-stretch min-w-80 max-w-96">
                <div class="flex flex-col basis-auto shrink-0 grow divide-y divide-dark-200">
                    <Show when={service.hasErrors}
                          fallback={<MediaPlayer service={service}/>}
                    >
                        <ConfigError service={service}/>
                    </Show>
                </div>
                <Footer class="shrink-0"/>
            </div>
        </div>
    );
};

export default App;
