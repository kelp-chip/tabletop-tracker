import "./GetRandom.scss";

export default function GetRandom({ handleGetRandom }) {
  return (
    <div className="dice-container">
      <i
        className="fas fa-dice"
        title="get random game"
        onClick={() => handleGetRandom()}
      ></i>
    </div>
  );
}
