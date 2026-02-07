import React from "react";
import { Stack } from "@mui/material";
import Result from "./components/Result";
import Summary from "./components/Summary";
import "./App.css";

const App = () => {
    return (
        //Main Body Content
        <Stack
            component="main"
            minHeight='100vh'
            justifyContent='center'
            alignItems='center'
        >
            <h1 style={{ position: 'absolute', left: '-9999px' }}>
                Results Summary Component
            </h1>
            {/* WRAPPER CONTAINER */}
            <Stack
                bgcolor='white'
                maxWidth='600px'
                gap={0}
                fontFamily='"Hanken Grotesk", sans-serif'
                sx={{
                    flexDirection: { xs: "column", md: "row" },
                    borderRadius: "25px",
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