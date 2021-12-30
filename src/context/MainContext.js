import createMyContext from "./createMyContext";

const INITIAL_STATE = {
    data: []
}

const mainReducer = (state, action) => {
    switch (action.type) {
        
        default:
            return state;
    }
};

export const { Provider, Context } = createMyContext(
    mainReducer,
    {  },
    INITIAL_STATE
);