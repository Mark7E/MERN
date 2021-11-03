import React from 'react'

const Tabs = ({tab, idx, selectTab}) => {
    return (
        <>
        <div>
            <button onClick={() => selectTab(idx)}> Tab {idx + 1}</button>
        </div>
            </>
    )
}

export default Tabs
