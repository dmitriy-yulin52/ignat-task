
export enum ACTION_TYPE {
    LOADING = 'loadingReducer/LOADING'
}

export type StateType = typeof initState

const initState = {
    loading:false
}


type ActionsType = ReturnType<typeof loadingAC>

export const loadingReducer = (state:StateType = initState, action: ActionsType): StateType => {
    switch (action.type) {
        case ACTION_TYPE.LOADING: {
            return {...state,loading: action.loading}
        }
        default: return state
    }
}

export const loadingAC = (loading:boolean) => {
    return {
        type:ACTION_TYPE.LOADING,
        loading
    }as const
}