import React from "react";
import { FaBriefcase, FaUniversity } from "react-icons/fa";

const ExperienceItem = ({ time, field, location, description }) => (
  <div className="work__div border-bottom mb-4">
    <div className="o-time-title mb-2 position-relative o-font-sm">{time}</div>
    <div className="o-title-exp mb-2 d-flex flex-column">
      <strong className="font-weight-normal o-text-purple">{field}</strong>
      <small className="text-muted">{location}</small>
    </div>
    <p className="text-justify o-font-sm">{description}</p>
  </div>
);

class Experiences extends React.Component {
  state = {
    experiences: [
      {
        id: 1,
        type: "education",
        time: "2020 - 2024",
        field: "Bachelor of Information and Communication Engineering",
        location: "Bangladesh University of Professionals",
        description: "Studying",
      },
      {
        id: 2,
        type: "education",
        time: "2018 - 2019",
        field: "Higher Secondary School Certificate",
        location: "Adamjee Cantonment College",
        description: "GPA: 5.00 out of 5.00",
      },
      {
        id: 3,
        type: "education",
        time: "2016 - 2017",
        field: "Secondary School Certificate",
        location: "Adamjee Cantonment Public School",
        description: "GPA: 5.00 out of 5.00",
      },
    ],
  };

  render() {
    return (
      <div className="row">
        <div className="col-12 col-sm-6 col-md-12 col-lg-6 border-right">
          <div className="mb-4">
            <i className="o-font-lg align-bottom o-text-purple mr-2">
              <FaBriefcase />
            </i>
            <span className="font-weight-bold">Work Experience</span>
          </div>
          {this.state.experiences
            .filter((item) => item.type === "work")
            .map((item) => (
              <ExperienceItem key={item.id} {...item} />
            ))}
        </div>
        <div className="col-12 col-sm-6 col-md-12 col-lg-6">
          <div className="mb-4">
            <i className="o-font-lg align-bottom o-text-purple mr-2">
              <FaUniversity />
            </i>
            <span className="font-weight-bold">Education</span>
          </div>
          {this.state.experiences
            .filter((item) => item.type === "education")
            .map((item) => (
              <ExperienceItem key={item.id} {...item} />
            ))}
        </div>
      </div>
    );
  }
}

export default Experiences;
