import "./GetRandom.scss";
import dice from "../../images/dice.svg";

export default function GetRandom({ handleGetRandom }) {
  return (
    <div className="dice-container" title="get random">
      <img
        src={dice}
        alt="dice"
        onClick={() => handleGetRandom()}
        width="50px"
        className="dice"
      ></img>
      {/* <i
        className="fas fa-dice"
        title="get random game"
        onClick={() => handleGetRandom()}
      ></i> */}
    </div>
  );
}
