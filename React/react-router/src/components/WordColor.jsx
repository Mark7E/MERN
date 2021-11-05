import React from 'react'
import { useParams } from 'react-router'

const Number = (props) => {
    const {word, fColor, sColor } = useParams()
        return (
            <div>
                <h1 style={{ color: fColor, backgroundColor: sColor }}> The word isss {word}</h1>
            </div>
        )

}

export default Number
