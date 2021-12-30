import createMyContext from "./createMyContext";
const ACTION_TYPE = {
    SHOW_SHEET: "SHOW_SHEET",
    SHOW_DIALOG: "SHOW_DIALOG"
}
const INITIAL_STATE = {
    showSheetFlag: false,
    showDialogFlag: false
}

const mainReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPE.SHOW_SHEET:
            return { ...state, showSheetFlag: action.payload };
        case ACTION_TYPE.SHOW_DIALOG:
            return { ...state, showDialogFlag: action.payload };
        default:
            return state;
    }
};

const showSheet = (dispatch) => () => {
    dispatch({ type: ACTION_TYPE.SHOW_SHEET, payload: true })
}

const hideSheet = (dispatch) => () => {
    dispatch({ type: ACTION_TYPE.SHOW_SHEET, payload: false })
}

const showDialog = (dispatch) => () => {
    dispatch({ type: ACTION_TYPE.SHOW_DIALOG, payload: true })
}

const hideDialog = (dispatch) => () => {
    dispatch({ type: ACTION_TYPE.SHOW_DIALOG, payload: false })
}

export const { Provider, Context } = createMyContext(
    mainReducer,
    { hideSheet, showSheet, showDialog, hideDialog },
    INITIAL_STATE
);