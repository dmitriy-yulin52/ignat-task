import React from 'react'
import s from './Message.module.css'






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
        <div className={s.message}>
            <div className={s.messageBlock}>
                <img src={avatar} className={s.messageImg} alt={'hello'}/>
                <div className={s.messageWrapper}>
                    <div className={s.messageWrapper_name}>{name}</div>
                    <div className={s.messageWrapper_block}>
                        <div className={s.ms}>{message}</div>
                        <div className={s.time}>{time}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}


