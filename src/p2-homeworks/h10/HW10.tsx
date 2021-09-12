import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import {Loader} from "./loader/Loader";

function HW10() {

    const loading = useSelector<AppStoreType, boolean>((state) => state.loading.loading)
    const dispatch = useDispatch()

    const [time, setTime] = useState(0)


    const setLoading = () => {
        clearTimeout(time)
        dispatch(loadingAC(true))
        const timeId: number = window.setTimeout(() => {
            dispatch(loadingAC(false))
        }, 3000)
        setTime(timeId)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {loading ? <Loader/> : <div><SuperButton onClick={setLoading}>set loading...</SuperButton></div>}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
