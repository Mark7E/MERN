import React from 'react'

export const BoxColor = (props) => {
    return (
        <>
            {

                props.color.map(col => {
                return ( 
                
                <div className="box" style={{ backgroundColor: col , margin: 2}}> </div>
                )
            })
        }


        </>
    )
    }

export default BoxColor;
