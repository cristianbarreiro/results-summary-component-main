import React from "react";
import { Stack, Typography, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Button } from "@mui/material";
import ReactionIcon from '../assets/images/icon-reaction.svg';
import MemoryIcon from '../assets/images/icon-memory.svg';
import VerbalIcon from '../assets/images/icon-verbal.svg';
import VisualIcon from '../assets/images/icon-visual.svg';

const Summary = () => {
    const summaryData = [
        {
            category: "Reaction",
            score: 80,
            icon: ReactionIcon,
            textColor: "hsl(0, 100%, 67%)",
            bgColor: "hsla(0, 100%, 67%,0.07)",
        },
        {
            category: "Memory",
            score: 92,
            icon: MemoryIcon,
            textColor: "hsl(39, 100%, 56%)",
            bgColor: "hsla(39, 100%, 56%,0.07)",
        },
        {
            category: "Verbal",
            score: 61,
            icon: VerbalIcon,
            textColor: "hsl(166, 100%, 37%)",
            bgColor: "hsla(166, 100%, 37%,0.07)",
        },
        {
            category: "Visual",
            score: 72,
            icon: VisualIcon,
            textColor: "hsl(234, 85%, 45%)",
            bgColor: "hsla(234, 85%, 45%,0.07)",
        },
    ];

    return (
        <Stack
            bgcolor="white"
            padding={3}
            sx={{
                width: { lg: "50%", md: "50%", sm: "auto" },
                borderRadius: 25,
            }}
        >
            <Typography
                color="hsl(224, 30%, 27%)"
                fontWeight="700"
                fontSize="18px"
                fontFamily='"Hanken Grotesk", sans-serif'
            >
                Summary
            </Typography>

                <List >
                    {summaryData.map((item, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                background: `${item.bgColor}`,
                                marginBlock: "10px",
                                padding: "0px",
                                borderRadius: "12px",
                            }}
                        >
                        <ListItemIcon sx={{ minWidth: "28px", paddingLeft: "12px"}}>
                            <img src={item.icon} alt="icons"/>
                        </ListItemIcon>
                        <ListItemText
                            primaryTypographyProps={{
                                color: `${item.textColor}`,
                                fontFamily: '"Hanken Grotesk", sans-serif',
                                fontWeight: "500",
                            }}
                        >
                            {item.category}
                        </ListItemText>
                        <ListSubheader
                            sx={{
                                background: "transparent",
                                marginLeft: "55px",
                                fontFamily: '"Hanken Grotesk", sans-serif',
                                fontWeight: "500",
                            }}
                        >
                            <span style={{ color: "hsl(224, 30%, 27%)", fontWeight: "700" }}>
                                {item.score}
                            </span>{" "}
                            / 100
                        </ListSubheader>
                    </ListItem>
                ))}
            </List>
            <Button
                size="large"
                sx={{
                    background: "hsl(224, 30%, 27%)",
                    color: "white",
                    boxShadow: "none",
                    transition: "none",
                    textTransform: "none",
                    borderRadius: "25px",
                    ":hover": {
                        background:
                            "linear-gradient(0deg,hsl(241, 81%, 54%),hsl(252, 100%, 67%))",
                    },
                    fontFamily: '"Hanken Grotesk", sans-serif',
                    fontWeight: "500",
                }}
            >
                Continue
            </Button>
        </Stack>
    );
};

export default Summary;