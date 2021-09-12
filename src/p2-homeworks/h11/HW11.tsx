import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)


    const onChangeHandler = (value:[number,number])=> {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div style={{margin:'20px'}}>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}
                />
                <span style={{paddingBottom:'25px'}}>{value1}</span>
            </div>

            <div style={{float:'left'}}>
                <SuperDoubleRange
                    onChangeRange={onChangeHandler}
                    value={[value1,value2]}
                />
                <span>{value2}</span>
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
