import React from "react";
import Title from "../title/Title";
import Slider from "react-slick";
import { FaPen, FaCode, FaGamepad } from "react-icons/fa";
import { MdNaturePeople } from "react-icons/md";
import { BiBookReader } from "react-icons/bi";
import { AiFillCamera, AiFillRead } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.scss";

const ReviewBox = ({ name, expert, review, Icon }) => (
  <div className="testimonial__div mx-2 px-3 pb-3 o-border-purple d-flex flex-column position-relative">
    <div className="fa-quote-left text-white o-font-lg text-center o-bg-purple position-absolute rounded-circle">
      <Icon />
    </div>
    <strong>{name}</strong>
    <small className="text-muted mb-3">{expert}</small>
    <p className="text-justify o-font-sm">{review}</p>
  </div>
);

class Testimonial extends React.Component {
  state = {
    testimonials: [
      {
        id: 1,
        name: "Coding",
        Icon: FaCode,
        // expert: "Poem , Short Story",
        // review:
        //   "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.",
      },
      {
        id: 2,
        name: "Gaming",
        Icon: FaGamepad,
      },
      {
        id: 3,
        name: "Learning",
        Icon: BiBookReader,
      },
      {
        id: 4,
        name: "Reading",
        Icon: AiFillRead,
      },
    ],
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 1000,
      autoplaySpeed: 3000,
      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <>
        <Title>Hobby</Title>
        <div className="testimonial mb-5">
          <Slider {...settings}>
            {this.state.testimonials.map((item) => (
              <ReviewBox key={item.id} {...item} />
            ))}
          </Slider>
        </div>
      </>
    );
  }
}

export default Testimonial;
