import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data:AffairType[]
    setFilter: (filter:FilterType)=> void
    deleteAffairCallback: (id:number)=>void
    filter:FilterType
}

function Affairs(props: AffairsPropsType) {

    const {
        data,
        setFilter,
        deleteAffairCallback,
        filter,
    }=props
    const mappedAffairs = data.map((a) => (
        <Affair
            key={a._id}
            id={a._id}
            name={a.name}
            deleteAffairCallback={deleteAffairCallback}
        />
    ))

    const setAll = () => {
        setFilter('all')
    } // need to fix
    const setHigh = () => {
        setFilter('high')
    }
    const setMiddle = () => {
        setFilter('middle')
    }
    const setLow = () => {
        setFilter('low')
    }

    const styleAll = filter === 'all' ? s.someClass : ''
    const styleHigh = filter === 'high' ? s.someClass : ''
    const styleMiddle = filter === 'middle' ? s.someClass : ''
    const styleLow = filter === 'low' ? s.someClass : ''

    return (
        <div>
            {mappedAffairs}
            <button onClick={setAll} className={styleAll}>All</button>
            <button onClick={setHigh} className={styleHigh}>High</button>
            <button onClick={setMiddle} className={styleMiddle}>Middle</button>
            <button onClick={setLow} className={styleLow}>Low</button>
        </div>
    )
}

export default Affairs
