import React, { useState } from "react";

const Box = (props) => {

const [backGroundColor, setBackGroundColor] = useState("");

const creatBox = (e) =>{
    e.preventDefault();
    props.changeColor(backGroundColor)
    setBackGroundColor("")
}
    return(
    <>
    <form onSubmit= {creatBox}>
        <input type="color"  onChange={(e) => setBackGroundColor(e.target.value)} value={backGroundColor} />
        <input type="submit" value="Submit" />
    </form>
    </>
    )
}
export default Box;