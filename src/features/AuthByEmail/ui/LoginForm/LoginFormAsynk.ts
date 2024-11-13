import { lazy } from "react";

export const LoginFormAsynk = lazy(() => new Promise((resolve) => {
    //@ts-ignore
    setTimeout(() => resolve(import('./LoginForm')), 1500)
}))