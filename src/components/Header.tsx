import "./Header.css";
import picture from "./benpicture.png"

export default function Header () {

    return (
      <h1>
        <img className="headerPic" src={picture} alt="" />
      </h1>
    )
  }