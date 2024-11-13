import { StateSchema } from "app/providers/StoreProvider";

export const getSingInPassword = (state: StateSchema) => state?.signInForm?.password || ''