import React from "react";
import MessageBox from "./../../components/messageBox/MessageBox.js";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import useFetch from "./../../components/hooks/useFetch.js";
const Admin = () => {
  const { data, loading, error, reFetch } = useFetch(`https://ancient-earth-10032.herokuapp.com/contact/getmessages`);
  return (
    <>
      <Box sx={{ flexGrow: 1, width: "50%" }}>
        <Grid container spacing={2}>
          {loading
            ? "Loading please wait..."
            : data.map((msg) => {
                return (
                  <Grid item xs={12} md={12} lg={12} sm={12} key={msg._id}>
                    <MessageBox msg={msg}></MessageBox>
                  </Grid>
                );
              })}
        </Grid>
      </Box>
    </>
  );
};

export default Admin;
