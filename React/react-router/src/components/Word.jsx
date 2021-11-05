import React from 'react'
import { useParams } from 'react-router-dom'

const Word = (props) => {
    const { varWN } = useParams();

    if (isNaN(varWN)) {
        return (
            <h1> The word is {varWN}</h1>
        )
    }
    return (
        <h1>The number is: {varWN}</h1>
    )

}
export default Word
