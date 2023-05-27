export type Jam = {
  title: string;
  from: Date;
  to: Date;
  description: string;
  theme: string;
  requirements: Array<string>;
  uri: string;
};

export type JamState = 'active' | 'upcoming' | 'closed';

export function getJam(state: JamState): Jam {
    switch (state) {
        case 'upcoming':
            return {
                title: "Out of this world",
                from: new Date("2023-06-10T10:00:00"),
                to: new Date("2023-06-17T17:00:00"),
                description:
                  "Explore new planets, cross vast distances in your shiny space ship, or float around petting space whales; the possibilities are endless!",
                theme: "Space and Extraterestrial",
                requirements: [
                  "Include elements of the theme",
                  "Teams of 1-4 are allowed",
                  "Playable through submission source"
                ],
                uri: "/",
            };
        case 'closed':
            return {
                title: "Rooted in Existance",
                from: new Date("2023-04-10T10:00:00"),
                to: new Date("2023-04-17T17:00:00"),
                description:
                  "Birds chirping, wind blowing, squirrels playing. Enjoy the fruits of nature in this game jam!",
                theme: "Nature and Animals",
                requirements: [
                  "Include elements of the theme",
                  "Teams of 1-2 are allowed",
                  "Must have at least one animal",
                  "Must contain at least one tree",
                  "Playable through submission source"
                ],
                uri: "/",
            };
        case 'active':
            return {
                title: "I Am Speed",
                from: new Date("2023-04-10T10:00:00"),
                to: new Date("2023-12-17T17:00:00"),
                description:
                  "Can you keep up? Join in on the fun and see who is the fastest!",
                theme: "Speed",
                requirements: [
                  "Include elements of the theme",
                  "Teams of 1-6 are allowed",
                  "Playable through submission source"
                ],
                uri: "/",
            };
    }
}

export function formatDate(date: Date) {
  return date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export function formatDateTimeAttr(date: Date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
}

export function getTag(from: Date, to: Date) {
  const now = new Date();
  if (now < from) {
    return "Upcoming";
  } else if (now > to) {
    return "Closed";
  } else {
    return "Active";
  }
}
