import { StateSchema } from "app/providers/StoreProvider";

export const getSingInMessage = (state: StateSchema) => state?.signInForm?.message || ''