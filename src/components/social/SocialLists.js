import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialItem = ({ url, Icon }) => (
  <li className="m-1">
    <a className="text-white p-2" href={url}>
      <Icon />
    </a>
  </li>
);

class SocialList extends React.Component {
  state = {
    socials: [
      {
        url: "https://www.facebook.com/Moheb619",
        Icon: FaFacebookF,
      },
      {
        url: "https://instagram.com/moheb619",
        Icon: FaInstagram,
      },
      {
        url: "https://www.linkedin.com/in/moheb619/",
        Icon: FaLinkedin,
      },
      {
        url: "https://github.com/Moheb619",
        Icon: FaGithub,
      },
    ],
  };

  render() {
    return (
      <ul className={`list-unstyled d-flex ${this.props.margin ? "mb-5" : ""}`}>
        {this.state.socials.map((item, index) => (
          <SocialItem key={index} {...item} />
        ))}
      </ul>
    );
  }
}

export default SocialList;
