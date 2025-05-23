import { useReducer } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Header, Body } from "./formats";

export default function QuirksOfPlay() {
  const [expanded, toggleExpanded] = useReducer((state) => !state, true);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          color="white"
          sx={{ textTransform: "unset", padding: "0px" }}
          onClick={toggleExpanded}
        >
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          <Typography variant="h4" sx={{ padding: "0px 8px" }}>
            Quirks of Play
          </Typography>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Box>
      {expanded && (
        <>
          <Header>Strange Relationship with Pleasure</Header>
          <Body>
            I have a somewhat strange relationship with pleasure, particularly
            sexual pleasure. I've been on hormones for several years and my body
            just doesn't like to relax. This wombo combo means it's quite
            difficult for me to fully experience sexual pleasure and orgasm
            without a lot of effort. In order for me to have anything close to
            an intense orgasm, I need to be fucked thoroughly for like an hour
            and be in a good headspace and have the perfect temperature and all
            the stars need to align and mercury needs to be in retrograde or
            something. Basically, I'm not likely to have a mind-blowing orgasm,
            but that doesn't mean I'm not having a good time! I derive most of
            my pleasure from my partner(s) having a good time. I also get
            embarrassed and shy about receiving sexual pleasure for some reason,
            so I tend to try to hide my face which is a bit related to the next
            section. I have gotten a bit better with accepting the fact that
            it's okay to experience sexual pleasure, but it's still kind of hit
            or miss as to whether I'll be super slutty or shy or some fun
            mixture of both.
          </Body>
          <Body>
            A quick note: if you want me to squirm around and squeak and
            whimper, playing with my nipples is like a cheat code for this.
          </Body>

          <Header>Overstimulation (aka Why I Close my Eyes)</Header>
          <Body>
            You may notice during play that I close my eyes or try to hide my
            face. I get overstimulated very easily, so unless the room is dim or
            dark, I tend to close my eyes to avoid getting overstimulated. This
            is something I'm willing to play around with like being forced to
            look someone in the eyes. Playing with this is something that I've
            done more of recently and I've found it to be really fun! But if I'm
            having an off day, it may still be necessary for me to hide my face
            or close my eyes. This is really something that just needs to be
            felt out with newer partners. Typically once I play with partners a
            couple times, navigating this becomes second nature. Or just throw a
            blindfold on me and don't let me see what's going on at all. That's
            also a welcome option.
          </Body>

          <Header>I Fucking Love Sound</Header>
          <Body>
            Not sounding (well also yes, but that's for later), but sound.
            Whispers and words are often some of the best ways to really get
            inside my head and to get me to melt. They're some of the main ways
            that I'm able to sink into a headspace, so feel free to use your
            words and whispers ^.^ Telling me I'm doing a good job? yes pls 🥺
            Asking me to just sink down and take it? mhmm, that's a good one
            🥺🥺🥺 Reminding me where my place is? yeah I like that one 🥺👉👈
          </Body>

          <Header>Ma, There's a Weird Fuckin' Stray Cat Outside</Header>
          <Body>
            So, I make cat noises sometimes. I'm very vocal and squeaky and
            whatnot during play, and sometimes this comes out as cat sounds. You
            are absolutely able to poke fun at me for this and I actually even
            encourage it. It makes me feel a bit embarrassed, so it's a fun tool
            if you want to play with that kind of feeling. I've even got a kind
            of trigger where if someone boops my nose, I'll meow at them. Please
            don't abuse this knowledge.
          </Body>
          <Body>
            Oh, and if you're wondering where the title of this section comes
            from:{" "}
            <Link href="https://www.youtube.com/watch?v=ebsnSQ0w0xo">
              https://www.youtube.com/watch?v=ebsnSQ0w0xo
            </Link>
          </Body>

          <Header>That Spot on my Neck</Header>
          <Body>
            There's a particular spot on my neck on my right side near a part of
            my collarbone that is way more sensitive than anywhere else on my
            body (except maybe my nipples). If you press on this spot, I'm going
            to twitch a bit, try to clamp down on that part of my neck a bit,
            and I'll probably keep doing that for a while. If the pressure is
            firm enough (a low threshold), I feel “ghost touches” where it still
            feels like you're touching it even if you haven't touched that for a
            couple minutes. So, I end up twitching like that for a bit. Just a
            heads up there. It'd be really rude of you to play with this for
            your own entertainment... yeah... really rude... I totally don't get
            embarrassed and shy about it or anything...
          </Body>

          <Header>Occasionally Nonverbal</Header>
          <Body>
            I do occasionally go nonverbal during play, but this has never
            prevented me from using safewords. There are particular headspaces
            that tend to cause the nonverbal state and I'm always yanked out of
            them if there's something even remotely close to being so off as to
            require a safeword. So, don't be alarmed, but be aware of this.
          </Body>
        </>
      )}
    </>
  );
}
