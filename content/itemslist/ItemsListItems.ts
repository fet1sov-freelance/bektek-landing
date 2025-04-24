import type { ItemList } from "~/types/itemlist/ItemList";

import { i18n } from "~/plugins/i18n";
const { t } = i18n.global;

export const ItemsListItems : Array<ItemList> = [
    {
        imgSource: "./projects/project1.png",
        name: "M-Starter",
        category: t("projects.categories.ecommerce")
    } as ItemList,
    {
        imgSource: "./projects/project2.png",
        name: "Парсинг",
        category: "Backend"
    } as ItemList,
    {
        imgSource: "./projects/project3.png",
        name: "EYYE",
        category: t("projects.categories.landing")
    } as ItemList,
    {
        imgSource: "./projects/project4.png",
        name: "Заглушка",
        category: "UI"
    } as ItemList,
];