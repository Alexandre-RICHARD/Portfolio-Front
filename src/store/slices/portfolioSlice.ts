import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import type {RootState} from "@/IndexImporter";

interface PortfolioState {
    "loading": boolean;
    "headerVisibility": boolean;
}

const initialState: PortfolioState = {
    "loading": false,
    "headerVisibility": true,
};

const portfolioSlice = createSlice({
    "name": "portfolio",
    initialState,
    "reducers": {
        "changeLoadingState": (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        "changeHeaderVisibility": (state, action: PayloadAction<boolean>) => {
            state.headerVisibility = action.payload;
        },
    },
});

// Export all state in one object to have only to imports : Action and State.
export const portfolioState = {
    "Loading": (state: RootState) => state.portfolio.loading,
    "HeaderVisibility": (state: RootState) => state.portfolio.headerVisibility,
};
export const portfolioActions = portfolioSlice.actions;
export default portfolioSlice.reducer;
