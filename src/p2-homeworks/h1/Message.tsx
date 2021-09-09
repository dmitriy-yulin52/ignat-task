import React from 'react'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}


export const Message = (props:MessageType)=> {
    const {
        avatar,
        name,
        message,
        time
    }= props

    return (
        <div>
            <div>{avatar}</div>
            <div>{name}</div>
            <div>{message}</div>
            <div>{time}</div>
        </div>
    )
}


