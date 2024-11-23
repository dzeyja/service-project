import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { BonusSchema } from "entities/Bonus";
import { CommentSchema } from "entities/Comments";
import { MasterSchema } from "entities/Masters";
import { UserSchema } from "entities/User";
import { AddComSchema } from "features/AddComment";
import { LoginSchema } from "features/AuthByEmail";
import { SignInSchema } from "features/SignInByEmail";

export interface StateSchema {
    user: UserSchema
    loginForm?: LoginSchema
    signInForm?: SignInSchema
    bonus: BonusSchema
    comment: CommentSchema
    addCom: AddComSchema
    masters: MasterSchema
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