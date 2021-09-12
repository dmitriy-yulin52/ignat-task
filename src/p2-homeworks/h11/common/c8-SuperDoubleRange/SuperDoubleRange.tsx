import React from 'react'
import {TwoThumbInputRange} from "react-two-thumb-input-range";

type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    min?: number
    max?: number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min = 0, max = 100,
    }
) => {


    const thumbStyle: React.CSSProperties = {
        width: '15px',
        appearance: 'none',
        height: '15px',
        cursor: 'pointer',
        backgroundColor: '#005087',
        borderRadius: ' 4px',
    }

    const inputStyle: React.CSSProperties = {
        width: '150px',
        height: '15px',
        borderRadius: '4px',
        border: '1px solid #767676'
    }


    return (
        <TwoThumbInputRange
            onChange={onChangeRange}
            values={value}
            min={min}
            max={max}
            showLabels={false}
            railColor={'#ccc'}
            inputStyle={inputStyle}
            thumbStyle={thumbStyle}
            trackColor={'#008aff'}
        />
    );
}

export default SuperDoubleRange




