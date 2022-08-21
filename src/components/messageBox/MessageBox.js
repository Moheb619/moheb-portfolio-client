import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
const MessageBox = (props) => {
  const [cardDisplay, setCardisplay] = useState(true);
  const card = {
    display: cardDisplay ? "" : "none",
  };
  const handleDelete = async (id) => {
    setCardisplay(false);
    try {
      const config = {
        data: {
          id: props.msg._id,
        },
      };
      await axios.delete(`https://ancient-earth-10032.herokuapp.com/contact/${id}`, config);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Card sx={({ minWidth: 275 }, card)}>
        <CardContent>
          <Typography variant="h5" component="div">
            {props.msg.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.msg.email}
          </Typography>
          <Typography variant="body2">{props.msg.message}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handleDelete(props.msg._id.toString())}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default MessageBox;
