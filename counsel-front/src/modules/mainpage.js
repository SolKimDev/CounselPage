import { createAction, handleActions } from "redux-actions";

const SAMPLE_ACTION = 'main/SAMPLE_ACTION';

export const sampleAction = createAction(SAMPLE_ACTION);

const initialState = {};

const mainpage = handleActions(
    {
        [SAMPLE_ACTION]: (state, action) => state,
    },
    initialState,
);

export default mainpage;