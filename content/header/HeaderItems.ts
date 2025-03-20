import type { HeaderItem } from "~/types/header/HeaderItem";

import { i18n } from "~/plugins/i18n";
const { t } = i18n.global;

export const HeaderItems: Array<HeaderItem> = [
    {
        label: t("header.services"),
        route: "#"
    } as HeaderItem,

    {
        label: t("header.portfolio"),
        route: "#"
    } as HeaderItem,

    {
        label: t("header.aboutus"),
        route: "#"
    } as HeaderItem
];