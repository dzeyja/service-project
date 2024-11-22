import { configureStore, ReducersMapObject } from "@reduxjs/toolkit"
import { StateSchema } from "./StateSchema"
import { userReducer } from "entities/User"
import { createReducerManager } from "./reducerManager"
import { bonusReducer } from "entities/Bonus"

export const createReduxStore = () => {
    const rootState: ReducersMapObject<StateSchema> = {
        user: userReducer,
        bonus: bonusReducer
    }

    const reducerManager = createReducerManager(rootState)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce
    })

    //@ts-ignore
    store.reducerManager = reducerManager

    return store
} 