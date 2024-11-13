import { StateSchema } from "app/providers/StoreProvider";

export const getUserAuthEmail = (state: StateSchema) => state?.loginForm?.email || ''