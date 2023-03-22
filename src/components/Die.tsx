import React, { FunctionComponent, FunctionComponentElement } from "react"

type dieProps = {
    value: number,
    isHeld: boolean,
    holdDice: React.MouseEventHandler<HTMLDivElement>;

}


export default function Die(props:dieProps):FunctionComponentElement<FunctionComponent> {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}