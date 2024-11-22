import { createSlice } from "@reduxjs/toolkit";
import { BonusSchema } from "../types/BonusSchema";

const initialState: BonusSchema = {
    bonus: 0
}

const bonusSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        incrementBonus: (state) => {
            state.bonus += 1
        },
        decrementBonus: (state) => {
            if (state.bonus < 0) {
                state.bonus = 0
            }
            state.bonus -= 1
        }
    }
})

export const { actions: bonusActions } = bonusSlice
export const { reducer: bonusReducer } = bonusSlice