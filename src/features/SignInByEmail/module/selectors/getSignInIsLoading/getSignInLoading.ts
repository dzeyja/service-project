import { StateSchema } from "app/providers/StoreProvider";

export const getSingInIsLoading = (state: StateSchema) => state?.signInForm?.isLoading || false