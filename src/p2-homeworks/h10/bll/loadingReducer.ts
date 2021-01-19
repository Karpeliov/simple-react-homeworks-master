type LoadingActionType = {
    type: "LOADING"
    loading: boolean
}
export type InitialStateType = typeof initState

const initState = {
    loading: false
};

export const loadingReducer = (state = initState, action: LoadingActionType): InitialStateType => {
    switch (action.type) {
        case "LOADING": {
            return {...state, loading: action.loading};
        }
        default:
            return state;
    }
};

export const loadingAC = (loading: boolean): LoadingActionType => {
    return {
        type: "LOADING",
        loading
    }
};