interface Nav {
    to: string,
    text: string,
    subNav?: Nav[],
}

interface Banner {
    img: string,
    title?: string,
    desc?: string,
    to?: string,
    text?: string
}

interface Display {
    icon: any,
    count: number | string,
    desc: string,
    more?: boolean;
}

interface More {
    text: string,
    path: string,
}

interface Tag {
    en_title: string,
    zh_title: string,
    iconPath?: string,
}

interface SimpleCard {
    title: string,
    text: string,
    pic?: string
}

interface News {
    id: number,
    pic?: string,
    date: string,
    title: string,
    desc: string,
}

interface Card{
    pic:string,
    title:string,
    sub_title:string[],
}