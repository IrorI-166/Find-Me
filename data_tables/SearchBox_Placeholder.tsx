type game = (string);

type games = game[];

const Game_Title: games = [
    "APEX",
    "VALORANT",
    "FINAL FANTASY XIV Online",
    "崩壊：スターレイル",
    "原神"
]

function Pick(array: Array<any>) {
    let pick: string;
    const num = Math.floor(Math.random() * array.length);
    pick = array[num];
    return pick;
};

export const SearchBox_Placeholder = Pick(Game_Title);