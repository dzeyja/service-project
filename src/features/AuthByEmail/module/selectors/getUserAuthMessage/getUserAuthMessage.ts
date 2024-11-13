import { StateSchema } from "app/providers/StoreProvider";

export const getUserAuthMessage = (state: StateSchema) => state?.loginForm?.message || ''