import { StateSchema } from "app/providers/StoreProvider";

export const getUserAuthIsLoadin = (state: StateSchema) => state?.loginForm?.isLoading || false