import styled from "@emotion/styled";
import { Add, AddPhotoAlternate, DateRange, EmojiEmotions, VideoCameraBack } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StytledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Userbox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

function Addpost() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "50%", md: 30 },
        }}
        onClick={(e) => setModalOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <StytledModal
        open={modalOpen}
        onClose={(e) => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
          <Typography variant="h6" color={"gray"} textAlign={"center"}>
            Create Post
          </Typography>
          <Userbox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66.jpg"
            />
            <Typography variant="span">Nameer</Typography>
          </Userbox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="Whats in your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3} >
            <EmojiEmotions color="inherit" />
            <AddPhotoAlternate color="primary"/>
            <VideoCameraBack color="success" />
          </Stack>
          <ButtonGroup
          fullWidth
          variant="contained"
          aria-label="oulined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{width:"100px"}} ><DateRange/></Button>
            
          </ButtonGroup>
        </Box>

      </StytledModal>
    </>
  );
}

export default Addpost;
