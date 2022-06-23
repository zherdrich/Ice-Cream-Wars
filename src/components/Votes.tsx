import { useState } from "react"
import "./Votes.css"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import picture from './icecreamconepng.png'
import picture2 from './icecreamscoop3.png'


ChartJS.register(ArcElement, Tooltip, Legend);




export default function Votes() {



  const [cVotes, setCVotes] = useState(0);
  const [vVotes, setVVotes] = useState(0);
  const [sVotes, setSVotes] = useState(0);

  let cPerc = cVotes / (cVotes + vVotes + sVotes) * 360 || 0;
  let vPerc = vVotes / (cVotes + vVotes + sVotes) * 360 || 0;
  let sPerc = sVotes / (cVotes + vVotes + sVotes) * 360 || 0;

  let cPerc2 = cPerc / 360 * 100
  let vPerc2 = vPerc / 360 * 100
  let sPerc2 = sPerc / 360 * 100


  const data = {

    datasets: [
      {
        label: '# of Votes',
        data: [cPerc, vPerc, sPerc],
        backgroundColor: [
          'rgb(110, 80, 38)',
          'rgb(247, 247, 212)',
          'rgb(227, 157, 211)',
        ],
        borderColor: [
          'rgb(110, 80, 38)',
          'rgb(247, 247, 212)',
          'rgb(227, 157, 211)',
        ],
        borderWidth: 1,
      },
    ],
  };




  return (
    <div className="Votes">


<div className="Voter">

      <h2 className="vote-title">Vote Here</h2>
      <div className="buttons">

        <label htmlFor="chocolate-button"></label>
        <button id="chocolate-button" onClick={() => { setCVotes(cVotes + 1) }}>Chocolate</button>

        <label htmlFor="vanilla-button"></label>
        <button id="vanilla-button" onClick={() => { setVVotes(vVotes + 1) }}>Vanilla</button>

        <label htmlFor="strawberry-button"></label>
        <button id="strawberry-button" onClick={() => { setSVotes(sVotes + 1) }}>Strawberry</button>

      </div>


<div className="vote-count">

      <p className="chocolate-votes"><strong>Chocolate: </strong> {cVotes} Votes ({cPerc2.toFixed(2)}%)</p>
      <div className="barss" style={{ backgroundColor: "brown", width: cPerc + "%" }}></div>
      <p className="vanilla-votes" ><strong>Vanilla: </strong> {vVotes} Votes ({vPerc2.toFixed(2)}%)</p>
      <div className="barss" style={{ backgroundColor: "tan", width: vPerc + "%" }}></div>
      <p className="strawberry-votes"><strong>Strawberry: </strong> {sVotes} Votes({sPerc2.toFixed(2)}%)</p>
      <div className="barss" style={{ backgroundColor: "pink", width: sPerc + "%" }}></div>

</div>




</div>



<div className="ice-cream-cone">

<div className="scoopdiv">
  <img className="scoop" src={picture2} alt="" />
</div>

        <div className="PieChart">
          <Pie data={data} />
        </div>

<div className="cone-box">
  <img className="cone" src={picture} alt="" />
</div>

</div>


    </div>

  )


}



























