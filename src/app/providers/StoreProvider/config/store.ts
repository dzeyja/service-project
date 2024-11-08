import { configureStore, ReducersMapObject } from "@reduxjs/toolkit"
import { StateSchema } from "./StateSchema"
import { userReducer } from "entities/User"
import { loginReducer } from "features/AuthByEmail"

export const createReduxStore = () => {
    const rootState: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer
    }

    return configureStore<StateSchema>({
        reducer: rootState
    })
} 