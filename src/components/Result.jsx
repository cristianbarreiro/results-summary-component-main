import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Result = () => {
    return (
        <Stack
            alignItems='center'
            gap={4}
            padding={3}
            sx={{
                background:
                    'linear-gradient(0deg,hsl(241,81%,54%), hsl(252,100%,67%))',
                width: { xs: 'auto', md: '50%' },
                borderRadius: "25px",
            }}
        >
            <Typography
                fontSize='18px'
                color='hsl(241, 100%, 89%)'
                fontFamily='"Hanken Grotesk", sans-serif'
                fontWeight='500'
            >
                Your Result
            </Typography>
            <Box sx={{
                padding: '20px 30px',
                borderRadius: '50%',
                background: 'linear-gradient(0deg, hsla(241, 72%, 46%, 0), hsla(256, 72%, 46%, 1))',
            }}>
                <Typography
                    color='white'
                    fontFamily='"Hanken Grotesk", sans-serif'
                    fontWeight='700'
                    fontSize='3.75rem'
                    lineHeight={1}
                >
                    76
                    <Typography
                        fontSize='16px'
                        fontFamily='"Hanken Grotesk", sans-serif'
                        fontWeight='500'
                        color='hsl(241, 100%, 89%)'
                        textAlign='center'
                    >
                        of 100
                    </Typography>
                </Typography>
            </Box>
            <Box>
                <Typography
                    variant="h5"
                    component="h2"
                    color='white'
                    fontFamily='"Hanken Grotesk", sans-serif'
                    fontWeight='700'
                    textAlign='center'
                    mb={1}
                >
                    Great
                </Typography>
                <Typography
                    color='hsl(241, 100%, 89%)'
                    fontFamily='"Hanken Grotesk", sans-serif'
                    fontWeight='500'
                    fontSize='16px'
                    textAlign='center'
                    paddingInline='10px'
                    lineHeight={1.2}
                >
                    You scored higher than 65% of the people who have taken these tests.
                </Typography>
            </Box>
        </Stack>
    )

};

export default Result;