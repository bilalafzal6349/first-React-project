import "./App.css";

function App() {
  return (
    <div className="card">
      <Avater />
      <div className="data">
        <Intro />
        <Kist />
      </div>
    </div>
  );
}
function Avater() {
  return (
    <img
      className="avatar"
      src="../public//Untitled (717 × 368 px) (300 × 200 px).png"
    />
  );
}
function Intro() {
  return (
    <div>
      <h1>heloo</h1>
      <p>
        Learining full stack Web Development and also doing BS Artficial
        Intelligence from GCU Lahore . I am very Excited to train diffrent
        models and robots
      </p>
    </div>
  );
}
function Kist() {
  return (
    <div className="skill-list">
      <Skill name="React" emoji="💪💪 " color="orange" />
      <Skill name="HTML + CSS" emoji="💪💪" color="orangeRed" />
      <Skill name="JavaScript" emoji="💪💪" color="Yellow" />
      <Skill name="Web Design" emoji="💪💪" color="LightBlue" />
      <Skill name="vercel app" emoji="💪💪" color="green" />
      <Skill name="gib and github" emoji="💪💪" color="LightGreen" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ background: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
export default App;
