import React from 'react'

type AffairPropsType = {
    // key не нужно типизировать
    name:string
    deleteAffairCallback: (id:number)=>void
    id:number
}

function Affair(props: AffairPropsType) {

    const {
        deleteAffairCallback,
        id,
        name
    }= props

    const deleteCallback = () => {
        deleteAffairCallback(id)
    }

    return (
        <div>
            {name}
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
