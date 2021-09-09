import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {


    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let trim = e.currentTarget.value.trim()
        if (trim) {
            setName(trim)
            setError('')
        }else {
            setName('')
            setError('Name is required')
        }
    }
    const addUser = () => {
        if(name === ''){
            setError('Name is required')

        }else{
            alert(`Hello ${name} !`)
            addUserCallback(name)
            setName('')
        }
    }

    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter'){
            addUser()
            setName('')
        }
    }
    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressHandler={onKeyPressHandler}
        />
    )
}

export default GreetingContainer
