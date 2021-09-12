import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import dateFormat from "dateformat";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date)
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.toTimeString().slice(0, 8)// fix with date
    const stringDate = dateFormat(date, 'dd.mm.yy') // fix with date

    return (
        <div>
            <div style={{marginLeft: '15px'}}>
                <div style={{cursor:'pointer',width:'80px'}}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <span>
                        {stringTime}
                    </span>
                </div>

                {show && (
                    <div>
                        <span>
                            {stringDate}
                        </span>
                    </div>
                )}
            </div>

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
