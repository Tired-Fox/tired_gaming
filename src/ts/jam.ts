export type Jam = {
    title: string,
    dates: {
        from: Date,
        to: Date,
    },
    description: string,
    theme: string,
    requirements: Array<string>,
    uri: string
};

export function formatDate(date: Date) {
    return date.toLocaleDateString('en-us', { year:"2-digit", month:"short", day:"2-digit"});
}

export function formatDateTimeAttr(date: Date) {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
}

export function getTag(from: Date, to: Date) {
    const now = new Date();
    if (now < from) {
        return 'Upcoming';
    } else if (now > to) {
        return 'Closed';
    } else {
        return 'Active';
    }
}