import { Url } from "next/dist/shared/lib/router/router";

type user = {
    id: number;
    username: string;
    title: string;
    description: string;
    url: Url;
};

type users = user[];

export const User_Data: users = [
    {
        id: 1,
        username: "田中タロウ",
        title: "APEX募集",
        description: "APEXやりませんか",
        url: "/"
    },
    {
        id: 2,
        username: "山田リョウ",
        title: "金欠",
        description: "お金貸して",
        url: "/"
    },
    {
        id: 3,
        username: "鈴木ハルオ",
        title: "VALORANT募集",
        description: "女の子歓迎！",
        url: "/"
    },
    {
        id: 4,
        username: "アカネ",
        title: "イケボ男子とAPEX",
        description: "イケボです。よろしくお願いします。",
        url: "/"
    },
    {
        id: 5,
        username: "ハルトマン",
        title: "Pogo",
        description: "pogopogopogopogopogopogopogopogopogopogopogopogopogopogopogopogo",
        url: "/"
    }
];

function PickTop(array: Array<any>) {
    const pick: Array<any> = [];
    const selectedIndices: Set<number> = new Set();

    while (pick.length < 3) {
        const num = Math.floor(Math.random() * array.length);

        if (!selectedIndices.has(num)) {
            selectedIndices.add(num);
            pick.push(array[num]);
        }
    }

    return pick;
};

export const Top_Users = PickTop(User_Data);