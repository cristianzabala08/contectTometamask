import { JSX } from "solid-js";

export interface I18n {
    children: JSX.Element; 
    i18n: unknown;
}

export interface RouterGuard {
    children: JSX.Element;
    user?: boolean;
    path?: any;
}