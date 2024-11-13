import { StateSchema } from "app/providers/StoreProvider";

export const getUserAuthError = (state: StateSchema) => state?.loginForm?.error