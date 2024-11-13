import { StateSchema } from "app/providers/StoreProvider";

export const getSingInEmail = (state: StateSchema) => state?.signInForm?.email || ''