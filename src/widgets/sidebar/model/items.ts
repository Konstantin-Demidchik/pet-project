import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainPageIcon from 'shared/assets/icons/main-page.svg';
import AboutPageIcon from 'shared/assets/icons/about-page.svg';
import ProfilePageIcon from 'shared/assets/icons/profile-page.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const sidebarItemsList: SidebarItemType[]  = [
    {
        path: RoutePath.main,
        text: "Main",
        Icon: MainPageIcon
    },
    {
        path: RoutePath.about,
        text: "About",
        Icon: AboutPageIcon
    },
    {
        path: RoutePath.profile,
        text: "Profile",
        Icon: ProfilePageIcon,
        authOnly: true,
    }
]