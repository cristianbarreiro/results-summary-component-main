import React from "react";
import { Stack } from "@mui/material";
import Result from "./components/Result";
import Summary from "./components/Summary";
import "./App.css";

const App = () => {
    return (
        //Main Body Content
        <Stack
            minHeight='100vh'
            justifyContent='center'
            alignItems='center'
        >
            {/* WRAPPER CONTAINER */}
            <Stack
                bgcolor='white'
                maxWidth='600px'
                gap={2}
                fontFamily='"Hanken Grotesk", sans-serif'
                sx={{
                    flexDirection: { lg: "row", md: "row", sm: "column" },
                    borderRadius: { lg: "25px", md: "25px", sm: "0px" },
                    borderBottomLeftRadius: "25px",
                    borderBottomRightRadius: "25px",
                    boxShadow: "rgba(149,157,165,0.2) 0px 8px 24px"
                }}>
                {/* RESULT COMPONENT */}
                <Result />
                {/* SUMMARY COMPONENT */}
                <Summary />
            </Stack>
        </Stack>
    );
};

export default App; 