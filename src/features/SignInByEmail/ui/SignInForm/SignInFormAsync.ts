import { lazy } from "react";

export const LoginFormAsynk = lazy(() => new Promise((resolve) => {
    //@ts-ignore
    setTimeout(() => resolve(import('./SignInFrom')), 1500)
}))