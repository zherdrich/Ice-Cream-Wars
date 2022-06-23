import { useState } from "react";
import "./AdDesigner.css"
import picture from './cloud.png'

export default function AdDesigner() {
    const [flavor, setFlavor] = useState("Chocolate");
    const [theme, setTheme] = useState("light");
    const [fontSize, setFontSize] = useState(40);

    const styles = {
        fontSize: fontSize + "px"
    }

    return (
        <div className="AdDesigner">
           
<div className="support-block">
            <h3>Who Do You Support?</h3>
            <div className="buttons">
                <button disabled={flavor === "Chocolate"} onClick={() => { setFlavor("Chocolate") }}>Chocolate</button>
                <button disabled={flavor === "Vanilla"} onClick={() => { setFlavor("Vanilla") }}>Vanilla</button>
                <button disabled={flavor === "Strawberry"} onClick={() => { setFlavor("Strawberry") }}>Strawberry</button>
            </div>
</div>
<div className="color-block">

            <h3>Theme</h3>
            <div className="buttons">
            <button disabled ={theme === "light"} onClick={() => { setTheme("light")}}>Cloud</button>
            <button disabled ={theme === "dark"} onClick={() => { setTheme("dark")}}>Label</button>
            </div>
</div>

<div className="font-block">

            <h3>Font Size: {fontSize}</h3>
            <div className="buttons">
                <button onClick={() => {setFontSize(fontSize -1)}}>Smaller</button>
                <span className="fontSizeNum"></span>
                <button onClick={() => {setFontSize(fontSize +1)}}>Bigger </button>
            </div>

</div>

                <img className="picture" src={picture} alt="" />

            <div className={theme === "dark" ? "ad dark": "ad light"}>
                <h4 className="voteFor">Vote For</h4>
                <h3 className="votedFlavor" style={styles}>{flavor}</h3>
            </div>


        </div>


    )

}