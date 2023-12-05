import styled from "@emotion/styled";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    
}))
const Icons = styled(Box)(({theme})=>({
    backgroundColor:"white"
}))

function Navbar() {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}} >INSTAGRAM</Typography>
        <InstagramIcon sx={{display:{xs:"block",sm:"none"}}}/>
        <Search/>
        <Icons/>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
