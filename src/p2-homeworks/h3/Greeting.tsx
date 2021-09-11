import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=> void
    addUser: ()=> void
    error: string
    totalUsers: number
    onKeyPressHandler:(e:KeyboardEvent<HTMLInputElement>)=> void
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onKeyPressHandler}
) => {
    const inputClass = s.error

    return (
        <div className={s.wrapper}>
            <span className={s.counter}>{totalUsers}</span>
            <input
                value={name}
                onChange={setNameCallback}
                className={error ? inputClass : ''}
                onKeyPress={onKeyPressHandler}
            />
            <span>{error}</span>
            <button onClick={addUser}
                    className={s.button}
                    disabled={!!error}
            >add</button>
        </div>
    )
}

export default Greeting
