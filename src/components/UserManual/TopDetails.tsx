import { useReducer } from "react";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Header, Body } from "./formats";

export default function TopDetails() {
  const [expanded, toggleExpanded] = useReducer((state) => !state, true);

  return (
    <>
      <Typography variant="h4" align="center">
        <IconButton onClick={toggleExpanded}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
        Specific Kinks as a Dominant or Top
      </Typography>
      {expanded && (
        <>
          <Body>
            Again, the kinks listed here are just the ones that I have something
            to say about more than "I'd like to try that (more)" or "I like that
            shit." If something's not listed here, check my kink list for how I
            feel about it.
          </Body>

          <Header>Middle Management (wait that's a kink?)</Header>
          <Body>
            So, one way that I really like to top is to serve in sort of a
            "middle management" role where I'm carrying out someone else's
            orders to do shit to someone else. I can reeeeeeeally get into that.
            Being told what to do and not having to think while also getting to
            do fun things to other people? Sign me the fuck up. Like
            immediately. Hitting someone else for the entertainment of someone
            above me in the hierarchy? Yes please! Tying someone up so that
            someone else can do unspeakable things to them? Some of the most fun
            scenes I've ever done! I'm also happy to learn how to top for
            something under the guidance of another top. Love building my skill
            set, especially if it seems like I'm going to get to use it again in
            a service toppy way or as part of casual group play.
          </Body>

          <Header>Pain (Including but not Limited to Impact)</Header>
          <Body>
            It's fun to beat people up sometimes! I'm not really into
            traditional impact implements and techniques and instead greatly
            prefer "misusing" (finding other ways to use) traditional implements
            or using makeshift tools. Or just using my own body to hurt others
            instead of using tools at all. This is especially true of biting.
            For some reason I can't fully explain, I love sinking my teeth into
            people. Oh, and pinching. When I'm going to the gym often, I've got
            climber grip and can really clamp down to pinch hard for somewhat
            extended periods of time. So if pinching or biting are things you
            want to explore, I'd be happy to demo. Lately I've been exploring
            punching and kicking people more. I find that if you'll let me, I
            can become a gremlin and just keep whacking and maybe giggling a bit
            while I do it.
          </Body>

          <Header>Ropes</Header>
          <Body>
            I don't really do non-rope bondage as a top, so this section is
            dedicated specifically to ropes. I do a lot of self-tying so much of
            what I do as a top is informed by this experience. I tend to
            slightly favor decorative ties over restrictive ties as a top, but
            I'm also perfectly content with making something restrictive look
            pretty. I don't have a super broad range of ties I can do from
            memory (yet), but the ones I can do, I make sure they're clean. Also
            happy to improvise, though mileage may vary with this.
          </Body>
          <Body>
            Oh god... apparently the last time I updated this I said that I'm
            just starting my journey into suspensions and I'm having a great
            time with it. Yeah that's just straight up wrong. I do
            self-suspensions and will suspend partners I'm comfortable with.
          </Body>

          <Header>Hypnosis</Header>
          <Body>
            I don't have a ton of experience here, but from the little bit I
            have done as a top, I've really enjoyed it. Until I get more
            practice, I'm going to stick with using hypnosis for relaxation so I
            don't fuck someone up unintentionally. I've practiced inductions and
            wakeners, but I need to keep working on the body of a scene and
            other techniques. This isn't one of my main priorities right now so
            I'm not actively seeking out people to practice with, but if an
            opportunity to practice arises I'm happy to take it.
          </Body>
        </>
      )}
    </>
  );
}
