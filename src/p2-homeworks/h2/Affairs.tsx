import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {

    const {
        data,
        setFilter,
        deleteAffairCallback,
    } = props
    const mappedAffairs = data.map((a) => (
        <Affair
            key={a._id}
            affair={a}
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



    const setClassName = (filter: FilterType) => {
        return `${s.button} ${props.filter === filter ? s.active : ''}`
    }

    return (
        <div className={s.wrapper}>
            {mappedAffairs}
            <div className={s.buttonsWrapper}>
                <button onClick={setAll} className={setClassName('all')}>All</button>
                <button onClick={setHigh} className={setClassName('high')}>High</button>
                <button onClick={setMiddle} className={setClassName('middle')}>Middle</button>
                <button onClick={setLow} className={setClassName('low')}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
