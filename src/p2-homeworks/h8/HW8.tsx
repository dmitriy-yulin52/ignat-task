import React, {useState} from 'react'
import {checkAc, homeWorkReducer, sortAc} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

// export type UserType =

export type UserType = {
    _id: number,
    name: string,
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}>
            <span>{p.name}-</span>
            <span>{p.age}</span>
        </div>
    ))

    const sortUpHandler = () => setPeople(homeWorkReducer(initialPeople, sortAc('up')))
    const sortDownHandler = () => setPeople(homeWorkReducer(initialPeople, sortAc('down')))
    const sortAgeHandler = () => setPeople(homeWorkReducer(initialPeople, checkAc(18)))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}

            <div>
                <SuperButton onClick={sortUpHandler}>sort up</SuperButton>
                <SuperButton onClick={sortDownHandler}>down up</SuperButton>
                <SuperButton onClick={sortAgeHandler}>sort Age</SuperButton>
            </div>
            check 18

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
