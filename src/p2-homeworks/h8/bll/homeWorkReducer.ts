import {UserType} from "../HW8";

type sortType = 'up' | 'down'
type ActionsType = ReturnType<typeof sortAc> | ReturnType<typeof checkAc>

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return [...state].sort((a,b)=>{
                if(action.payload.sort === 'up'){
                    return a.name > b.name ? 1: -1
                }
                return a.name < b.name ? 1 : -1
            })
        }
        case 'check': {
            return state.filter(u=> u.age > action.payload.age)
        }
        default: return state
    }
}



export const sortAc = (sort:sortType)=> {
    return {
        type: 'sort',
        payload:{sort}
    }as const
}
export const checkAc = (age:number)=> {
    return {
        type:'check',
        payload: {age}
    }as const
}