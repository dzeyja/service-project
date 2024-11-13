import { StateSchema } from "app/providers/StoreProvider";

export const getUserAuthPassword = (state: StateSchema) => state?.loginForm?.password || ''