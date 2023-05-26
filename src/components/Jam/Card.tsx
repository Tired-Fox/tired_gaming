import { Jam } from '../../ts/jam.ts';
import Callout from '../callout/Callout.tsx';

export default function JamCard(props: {jam?: Jam | null, children: Array<any>}) {
    const jam = props.jam;

    if (jam) {
        return <h4>{jam.title}</h4>
    } else {
        return props.children;
    }
}