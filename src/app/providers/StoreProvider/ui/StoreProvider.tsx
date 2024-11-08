import { classNames } from "shared/lib/classNames/classNames"
import cls from './StoreProvider.module.scss'
import { Provider } from "react-redux"
import { createReduxStore } from "../config/store"
import { ReactNode } from "react"

interface StoreProviderProps {
    children: ReactNode
}

export function StoreProvider({ children }: StoreProviderProps) {
    const store = createReduxStore()

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
