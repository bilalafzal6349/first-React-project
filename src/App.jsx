import "./App.css";

const skills = [
  { skills: "HTML + CSS", level: "Advanced", color: "#2662EA" },
  { skills: "Javascript", level: "Advanced", color: "#EEE" },
  { skills: "Web Design", level: "Advanced", color: "#C3DCAF" },
  { skills: "Git and GitHub", level: "Intermediate", color: "#E84F33" },
  { skills: "React", level: "Advanced", color: "#60DAFB" },
  { skills: "Svelte", level: "Beginner", color: "#FF3B00" },
];
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
  return <img className="avatar" src="../public/pic.png" />;
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
      {skills.map(({ color, skills, level }) => (
        <div className="skill" key={skills} style={{ background: color }}>
          <span>{skills}</span>
          <span>
            {level === "Beginner" ? "👶" : ""}
            {level === "Intermediate" && "👍"}
            {level === "Advanced" && "💪"}
          </span>
        </div>
      ))}
    </div>
  );
}

export default App;
