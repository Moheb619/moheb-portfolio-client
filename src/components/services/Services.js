import React from "react";
import Title from "../title/Title";
import { FcVoicePresentation } from "react-icons/fc";
import { RiKakaoTalkLine, RiFocus2Fill } from "react-icons/ri";
import { GiThink } from "react-icons/gi";
import { AiOutlineTeam } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

import "./Services.scss";

const ServiceBox = ({ Icon, title, subTitle, description }) => (
  <div className="services__div text-light m-2 d-flex flex-column align-items-center justify-content-center p-2 overflow-hidden">
    <div className="fas fa-magic o-font-lg mb-3 mt-3">
      <Icon />
    </div>
    <strong>{title}</strong>
    <small className="mb-3 services__small position-relative">{subTitle}</small>
    <p className="text-center o-font-sm">{description}</p>
  </div>
);

class Services extends React.Component {
  state = {
    services: [
      {
        Icon: FcVoicePresentation,
        title: "Presentation",
        subTitle: "PowerPoint",
        description: "Make a great first impression with creative portfolio presentation",
      },
      {
        Icon: RiKakaoTalkLine,
        title: "Communication",
        subTitle: "Oral and Social",
        description: "Able to communicate information accurately, clearly and as intended with anyone",
      },
      {
        Icon: GiThink,
        title: "Critical thinking",
        subTitle: "Problem Solving",
        description: "Ability to think clearly and understanding the logical connection between ideas",
      },
      {
        Icon: AiOutlineTeam,
        title: "Teamwork",
        subTitle: "Collaborative Effort",
        description: "Able to work collaboratively and independently",
      },
      {
        Icon: RiFocus2Fill,
        title: "Hard Working",
        subTitle: "100% Effort",
        description: "Able to work with full focus and effort",
      },
      {
        Icon: FaCode,
        title: "Programming",
        subTitle: "Problem Solving",
        description: "Able to solve problems using programming languages (C,C++,Python,Java,JavaScript)",
      },
      {
        Icon: CgWebsite,
        title: "Developement",
        subTitle: "Mern Stack",
        description: "Can Develope a complete site using react and express",
      },
    ],
  };

  render() {
    return (
      <div className="services mb-5">
        <Title>Ability</Title>
        <div className="d-flex flex-wrap justify-content-center">
          {this.state.services.map((item, index) => (
            <ServiceBox key={index} {...item} />
          ))}
        </div>
      </div>
    );
  }
}

export default Services;
