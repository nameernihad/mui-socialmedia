import { Avatar, AvatarGroup, Box, ImageList, Typography } from "@mui/material";
import React from "react";

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontweight={100}>
          Your Followers
        </Typography>
        <AvatarGroup total={24}>
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJaoIeJQU_V9rL_ZII61whWyqSFbmMgTgwQ&usqp=CAU"
          />
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/purposeful-young-businessman-looking-away_1262-3609.jpg"
          />
          <Avatar alt="Nindy Baker" src="#" />
          <Avatar
            alt="Agnes Walker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJaoIeJQU_V9rL_ZII61whWyqSFbmMgTgwQ&usqp=CAU"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://www.opticalexpress.co.uk/media/1064/man-with-glasses-smiling-looking-into-distance.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontweight={100}>
          Trending Photos
        </Typography>
        <ImageList></ImageList>
      </Box>
    </Box>
  );
}

export default Rightbar;
