type user = {
    id: number;
    username: string;
    title: string;
    description: string;
};

type users = user[];

export const User_Data: users = [
    {
        id: 1,
        username: "田中タロウ",
        title: "APEX募集",
        description: "APEXやりませんか"
    },
    {
        id: 2,
        username: "山田リョウ",
        title: "金欠",
        description: "お金貸して"
    },
    {
        id: 3,
        username: "鈴木ハルオ",
        title: "VALORANT募集",
        description: "女の子歓迎！"
    },
    {
        id: 4,
        username: "アカネ",
        title: "イケボ男子とAPEX",
        description: "イケボです。よろしくお願いします。"
    },
    {
        id: 5,
        username: "ハルトマン",
        title: "Pogo",
        description: "pogopogopogopogopogopogopogopogopogopogopogopogopogopogopogopogo"
    }
];