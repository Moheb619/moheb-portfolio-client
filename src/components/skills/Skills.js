import React from "react";

const SkillItem = ({ title, percent }) => (
  <li className="mb-3">
    <strong className="o-font-sm font-weight-normal">{title}</strong>
    <div className="progress">
      <div className="progress-bar o-bg-purple" role="progressbar" style={{ width: `${percent}%` }} aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </li>
);

class Skills extends React.Component {
  state = {
    skills: [
      { id: 1, title: "C", percent: "70" },
      { id: 2, title: "C++", percent: "80" },
      { id: 3, title: "Python", percent: "50" },
      { id: 4, title: "Java", percent: "60" },
      { id: 5, title: "JavaScript", percent: "70" },
      { id: 6, title: "React JS", percent: "80" },
      { id: 7, title: "OOP", percent: "80" },
      { id: 8, title: "Express", percent: "70" },
      { id: 9, title: "MongoDB", percent: "80" },
      { id: 10, title: "Laravel", percent: "40" },
      { id: 11, title: "Laravel", percent: "40" },
      { id: 12, title: "Github", percent: "80" },
      { id: 13, title: "MS Word", percent: "90" },
      { id: 14, title: "MS PowerPoint", percent: "90" },
      { id: 15, title: "MS Excel", percent: "85" },
      { id: 16, title: "Wordpress", percent: "90" },
      { id: 17, title: "Adobe Premiere Pro", percent: "60" },
    ],
  };

  render() {
    return (
      <>
        <ul className="list-unstyled mb-5 o-grid">
          {this.state.skills.map((item) => (
            <SkillItem key={item.id} {...item} />
          ))}
        </ul>
      </>
    );
  }
}

export default Skills;
