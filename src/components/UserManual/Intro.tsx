import { useReducer } from "react";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Body } from "./formats";

export default function Intro() {
  const [expanded, toggleExpanded] = useReducer((state) => !state, true);

  return (
    <>
      <Typography variant="h4" align="center">
        <IconButton onClick={toggleExpanded}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
        Intro
      </Typography>
      {expanded && (
        <>
          <Body>
            Hi, I'm Squeaky! If you're reading this, you're probably interested
            in play or just getting to know me better. I'm generally a
            sub-leaning switch, which for me means that I tend to prefer being a
            submissive puddle but I'll also service top for some stuff and very
            rarely actually get into a more dominant headspace for a limited set
            of activities. My top side is something I'm exploring a bit more
            lately, but I'm def still a subby bottom bitch at heart. I'm also
            always looking to expand/refine my skill set both as a bottom and a
            top.
          </Body>
          <Body>
            I try my best to provide consistent, clear communication, and I
            expect the same from my play partners. I sometimes miss social cues,
            so directly stating your intentions and interests will go a long way
            in making me feel comfortable. As a bottom or submissive, my
            favorite things are looking visually appealing for partners and
            doing whatever is within my capabilities and limits to give them
            what they desire. I also crave feeling vulnerable, and the
            psychological/emotional aspects go a lot further than the physical
            aspects of this for me. As a top or dominant, I'm mostly interested
            in making sure my partners are having a good time, but I won't
            sacrifice my own enjoyment. So, if we don't mesh well with me as a
            top, I'm highly unlikely to force it.
          </Body>
          <Body>
            For more information on who I am as a person, refer to the Vanilla
            Squeaky section of this page. I used to have this on the About Me
            section of my FetLife profile, but I'm trying to move away from
            keeping this there -- the writings feature isn't quite what I
            want/need for this. If there's something you're really curious about
            that isn't listed anywhere in here, feel free to reach out. If you
            already have my contact info, great! If not, uhhhhhh I guess check
            back in at some point and reach out to the email address that I'll
            eventually post here... sorry, random reader without my contact info
            who somehow managed to find this. Pretty sure this site doesn't even
            show up on Google if you search for it yet, so congratulations! How
            and why the fuck are you even here...
          </Body>
        </>
      )}
    </>
  );
}
