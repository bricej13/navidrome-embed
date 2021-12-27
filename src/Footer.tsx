import Logo from "./Logo";

export default function Footer(props) {

    return <div class="flex flex-row justify-end p-2 items-center" style={{
        "background-color": 'rgb(48, 99, 142)'
    }}>
        <a
            href="https://www.navidrome.org/"
            class="flex flex-row items-center gap-2">
            <div class="text-xs text-right italic text-gray-300">
                Powered <br />
                By
            </div>
            <div class="w-6">
                <Logo/>
            </div>
            <div class="text-white font-sm font-weight-bold">Navidrome</div>

        </a>
    </div>
}
