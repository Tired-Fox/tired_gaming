import Timer from "./Timer";
import { mergeProps } from "solid-js";

export const redirect = (uri: string | null | undefined) => {
    window.location.href = uri || '/';
}

export default function Redirect(props: {to?: string | null, in?: number}) {
    props = mergeProps({to: null, in: 0}, props);
    const to = props.to ? () => redirect(props.to) : () => history.back();
    return <Timer seconds={props.in || 0} callback={to} />
}