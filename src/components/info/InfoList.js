import React from "react";
import Title from "../title/Title";

const InfoItem = ({ infoTitle, infoValue }) => (
  <li className="mb-2">
    <div className="row">
      <div className="col-4 font-weight-bold">{infoTitle}</div>
      <div className="col-8">{infoValue}</div>
    </div>
  </li>
);

class InfoList extends React.Component {
  state = {
    allInfo: [
      {
        infoTitle: "Name",
        infoValue: "Saeed Hossain Moheb",
      },
      {
        infoTitle: "Father's Name",
        infoValue: "Abul Hashem",
      },
      {
        infoTitle: "Mother's Name",
        infoValue: "Zannatoul Ferdous",
      },
      {
        infoTitle: "Age",
        infoValue: 22,
      },
      {
        infoTitle: "Languages",
        infoValue: "English, Bangla , Hindi",
      },
      {
        infoTitle: "Nationality",
        infoValue: "Bangladeshi",
      },
      {
        infoTitle: "Address",
        infoValue: "979 South Ibrahimpur , Dhaka Cantonment , Dhaka-1206",
      },
    ],
  };

  render() {
    return (
      <>
        <Title>About</Title>
        <ul className="list-unstyled p-3">
          {this.state.allInfo.map((item, index) => (
            <InfoItem key={index} {...item} />
          ))}
        </ul>
      </>
    );
  }
}

export default InfoList;
