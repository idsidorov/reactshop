import bf from '../../assets/images/bf.png'
import fc6 from '../../assets/images/fc6.png'
import fifa from '../../assets/images/fifa.png'
import formula from '../../assets/images/formula.png'
import ghoust from '../../assets/images/ghoust.png'
import guardians from '../../assets/images/guardians.png'
import guilty from '../../assets/images/guilty.png'
import hot from '../../assets/images/hot.png'
import house from '../../assets/images/house.png'
import ifr from '../../assets/images/ifr.png'
import kb from '../../assets/images/kb.png'


export interface IPageConstance {
    id: number
    title: string,
    price: number,
    description: string,
    img?: any,
}

const Page: IPageConstance [] = 
[
    {
        id: 1,
        title: 'Игра Стражи Галактики Marvel',
        price: 5700,
        description: 'Полная версия игры.',
        img: guardians
    },
    {
        id: 2,
        title: 'Игра Призрак Цусимы ',
        price: 4399,
        description: 'Режиссёрская версия для PS5',
        img: ghoust
    },
    {
        id: 3,
        title: 'Игра Kings Bounty II',
        price: 4690,
        description: 'Издание первого дня для PS4/PS5',
        img: kb
    },
    {
        id: 4,
        title: 'Игра Battlefield 2042',
        price: 7850,
        description: 'PS5 русская версия (предзаказ)',
        img: bf
    },
    {
        id: 5,
        title: 'Far Cry 6',
        price: 5500,
        description: 'Yara Edition для PS5 русская версия',
        img: fc6
    },
    {
        id: 6,
        title: 'Hot Wheels Unleashed',
        price: 3290,
        description: 'Day One Edition для PS5',
        img: hot
    },
    {
        id: 7,
        title: 'The Dark Pictures',
        price: 62000,
        description: 'House of Ashes для PS5',
        img: house
    },
    {
        id: 8,
        title: 'Immortals Fenyx Rising',
        price: 7200,
        description: 'для PS5, русская версия',
        img: ifr
    },
    {
        id: 9,
        title: 'FIFA 22',
        price: 3190,
        description: 'для PS5 русская версия',
        img: fifa
    },
    {
        id: 10,
        title: 'Guilty Gear Strive',
        price: 3999,
        description: 'для PS5 английская версия',
        img: guilty
    },
    {
        id: 11,
        title: 'F1 2021 для PS5',
        price: 2500,
        description: 'Новый сюжетный режим «Формула победы»',
        img: formula
    }
] 

export default Page