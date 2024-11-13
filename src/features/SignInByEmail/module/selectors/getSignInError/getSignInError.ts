import { StateSchema } from "app/providers/StoreProvider";

export const getSingInError = (state: StateSchema) => state?.signInForm?.error || ''