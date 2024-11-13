import { Reducer } from "@reduxjs/toolkit"
import { ReduxWithReducerManager, StateSchemaKey } from "app/providers/StoreProvider"
import { ReactNode, useEffect } from "react"
import React from "react"
import { useDispatch, useStore } from "react-redux"

interface DynamicModuleLoaderProps {
    children: ReactNode
    name: StateSchemaKey
    reducer: Reducer
}

export function DynamicModuleLoader(props: DynamicModuleLoaderProps) {
    const {
        children,
        name,
        reducer
    } = props
    const dispatch = useDispatch()

    const store = useStore() as ReduxWithReducerManager

    useEffect(() => {
        store.reducerManager.add(name, reducer)
        dispatch({type: `@INIT ${name} reducer`})
        
        return () => {
            dispatch(`@DESTROY ${name} reducer`)
            store.reducerManager.remove(name)
        }
    }, [])


    return (
        <>
            {children}
        </>
    )
}
