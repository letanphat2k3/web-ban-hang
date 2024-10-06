import React, { useState } from 'react'
import { WrapperInputStyle } from './style'

const InputFormComponent = ( props ) => {
    const [valueInput] = useState('')
    const { placeholder = 'Nhập text', ...rests } = props
    return (
        <WrapperInputStyle placeholder={placeholder} valueInput={valueInput} {...rests} >
           
        </WrapperInputStyle>
    )
}

export default InputFormComponent

