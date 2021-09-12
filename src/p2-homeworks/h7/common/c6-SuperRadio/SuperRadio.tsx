import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './radio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: Array<string | number>
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
         name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + '-' + i} className={s.label}>
            <input
                type={'radio'}
                onChange={onChangeCallback}
                name={name}
                value={o}
                checked={value === o}
                className={s.radio}
                {...restProps}
            />
            {o}
        </label>
    )) : []

    return (
        <div>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
