import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Addpost from "./components/Addpost";
import { useState } from "react";

function App() {
  const [mode, setmode] = useState("light")

  const darktheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darktheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setmode} mode={mode}/>
        <Feed />
        <Rightbar />
      </Stack>
    <Addpost />
    </Box>
    </ThemeProvider>
  );
}

export default App;
