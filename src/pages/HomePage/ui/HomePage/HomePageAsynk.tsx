import { lazy } from "react";

export const HomePageAsynk = lazy(() => new Promise((resolve) => {
    //@ts-ignore
    setTimeout(() => resolve(import('./HomePage')))
}))