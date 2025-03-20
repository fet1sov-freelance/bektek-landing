import type { SocialLink } from "~/types/sociallinks/SocialLink";

import TwitterIcon from "~/assets/socials/twitter.svg";
import TelegramIcon from "~/assets/socials/telegram.svg";
import GoogleIcon from "~/assets/socials/google.svg";

export const SocialLinkItems: Array<SocialLink> = [
    {
        icon: TwitterIcon,
        link: "https://x.com/bektek"
    } as SocialLink,
    {
        icon: GoogleIcon,
        link: "https://google.com/bektek"
    } as SocialLink,
    {
        icon: TelegramIcon,
        link: "https://t.me/bektek"
    } as SocialLink
]