import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByEmail";
import { SignInSchema } from "features/SignInByEmail";

export interface StateSchema {
    user: UserSchema
    loginForm?: LoginSchema
    signInForm?: SignInSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxWithReducerManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}