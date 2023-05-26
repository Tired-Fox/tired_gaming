import { For } from "solid-js";
import { Jam } from "../../ts/jam";

export default function JamList(props: {jams: Array<Jam>, children?: Array<any>}) {
    if (props.jams.length > 0) {
    return (<div>
        <For each={props.jams}>
            {(jam, i) => (
                <p>{i() + 1}: {jam.title}</p>
            )}
        </For>
    </div>);
    } else {
        return props.children || [];
    }
}