import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import SocialList from "../social/SocialLists";
import "./LeftSide.scss";

const LeftSide = () => (
  <>
    <div className="col-12 col-md-6 left-back d-flex align-items-center">
      <div className="d-flex flex-column align-items-center">
        <Avatar margin />
        <div className="d-flex justify-content-center flex-wrap align-items-baseline">
          <p className="o-font-lg text-white mb-1 mb-sm-3">Hello, I am</p>
          <h1 className="o-font-lg ml-2 o-text-purple">Saeed Hossain Moheb</h1>
        </div>
        <p className="text-center text-white">Recently , I am studying Information and Communication Engineering in Bangladesh University of Professionals</p>
        <SocialList margin />
        <div className="row mb-5 justify-content-center">
          <a href="https://drive.google.com/file/d/11evsZplG8Ylhp3qNPG5LEHBTJLhfzJuy/view?usp=sharing" className="d-block m-3 text-white o-btn text-center py-2 position-relative">
            DOWNLOAD CV
          </a>
          <Link to="/contact" className="d-block m-3 text-white o-btn text-center py-2 position-relative">
            CONTACT ME
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default LeftSide;
