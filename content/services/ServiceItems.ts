import type { ServiceIt } from "~/types/services/ServiceItem";

import { i18n } from "~/plugins/i18n";
const { t } = i18n.global;

export const ServiceItems : Array<ServiceIt> = [
    {
        title: t("projects.web.title"),
        description: t("projects.web.subtitle"),
        price: 30000,
        imgSource: "./services/photo1.png"
    } as ServiceIt,
    {
        title: t("projects.desktop.title"),
        description: t("projects.desktop.subtitle"),
        price: 40000,
        imgSource: "./services/photo2.png"
    } as ServiceIt,
    {
        title: t("projects.design.title"),
        description: t("projects.design.subtitle"),
        price: 5000,
        imgSource: "./services/photo3.png"
    } as ServiceIt,
    {
        title: t("projects.backend.title"),
        description: t("projects.backend.subtitle"),
        price: 20000,
        imgSource: "./services/photo4.png"
    } as ServiceIt
];