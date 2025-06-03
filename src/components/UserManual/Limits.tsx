import { useReducer } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as RoutePaths from "../../constants/RoutePaths";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Header, Body } from "../../utils/formats";

export default function Limits() {
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
            Limits
          </Typography>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Box>
      {expanded && (
        <>
          <Body>
            So, this is probably one of the most important sections of this
            whole document if you're interested in playing with me because it'll
            keep both of us safe and happy. Do not fuck with my limits. Period.
            I hate that I had to say that at all because there are people out
            there who will be like "well, as the supreme alpha Dom (or whatever
            these chucklefucks are calling themselves these days), I want to
            push your limits and mold you to my liking." Ha, okay buddy. If
            we've played for a while and have some kind of established history,
            sure, maybe. Fucking <strong>maybe</strong>. Some of my limits are
            hard limits, full stop, no ifs, ands, or buts. Others are a bit more
            fluid. You can see all of them in my{" "}
            <Link
              href={`#/${RoutePaths.KINKLIST}/${RoutePaths.SQUEAKYLIST}`}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                })
              }
            >
              kink list
            </Link>
            , but there are a few that I think are worth talking about.
          </Body>
          <Body>
            In general, the following rules apply regardless of the specific
            act:
            <ul>
              <li>Don't do anything permanent without my consent</li>
              <li>If it will lead to a long-term injury, let's probably not</li>
              <li>
                If it will end up with me on a sex registry, how about we don't
              </li>
              <li>
                If it violates the consent of others, don't even think about it
              </li>
            </ul>
          </Body>

          <Header>Age Play</Header>
          <Body>
            I won't call you "daddy", I won't call you "mommy" (well, maybe? idk
            I'm actually a lot more conflicted on this one... might unpack that
            with my therapist at some point), and I definitely won't call you
            "parental unit" (who the fuck talks like that anyway). I won't top
            for age play either. Do not call me "mommy" or "mom" or whatever
            variant of that you can think of if I'm topping. This limit comes a
            bit from trauma, a bit from a prior relationship, and it's overall
            not a good time. You press this button too hard and you're gone, got
            it? Cool.
          </Body>
          <Body>
            This kind of sort of includes diapers. They aren't inherently a
            limit, though if they are associated with age play at all, it's a
            hard no. An example of when they're okay is if they're just a thing
            to facilitate something else, like the time I tried a vacbed and the
            owner requested I wear a diaper for cleanliness purposes.
          </Body>

          <Header>Toilet Play</Header>
          <Body>
            I'll clean a toilet with proper tools as part of maid play, but piss
            and shit? Yeah not really my thing. Happy to do enemas to clean out
            and play around with them a bit as a submissive act, but it's not
            even remotely sexual for me. Playing with shit? Nope. Fuck nope. Had
            to do a stool sample once and almost threw up like three times
            during the collection process. So it's a pretty firm no from me.
            Piss? Won't drink it. I'm <em>maybe</em> open to being pissed on at
            some point? Probably just my body and not my face and it'd have to
            be in a shower where I can rinse off quickly. Just not really my jam
            but that's not necessarily a hard limit.
          </Body>
          <Body>
            Being referred to as a toilet is just a nope. Doesn't do anything
            for me, is a bit repulsive, and will pull me out of a headspace.
            Swirlies or having to interact with a toilet in a disgusting way is
            also a big nope. Grosses me out too much. Being bound near or to a
            toilet isn't necessarily an issue, but there better be a good reason
            for it in the context of play bc it's not doing anything for me.
          </Body>

          <Header>Tickling</Header>
          <Body>
            Just no. Like, a violent "fuck off" reaction kind of no. Some things
            can be ticklish and be okay, but deliberate tickling? Yeah we're
            done. Goodbye. The end. Maybe we can play in the future if you
            absolutely never fucking tickle me again. But fuck right off with
            that. Hard limit. Full stop. Nope.
          </Body>

          <Header>Branding</Header>
          <Body>
            Do I really need to elaborate on this one? Soft limit. If I'm in a
            long-term dynamic with someone and really trust them and it's a
            super big thing for them, maybe. Just maybe. But yeah, I'm a little
            bitch when it comes to burning pain, especially something that
            intense with such a long healing process.
          </Body>

          <Header>Cutting</Header>
          <Body>
            Nope. At one point I was maybe considering scarification, and the
            interest is definitely still there, but that feels like it's very
            similar to branding in the conditions for doing that. Cutting more
            generally is a soft limit at the moment. With the right top, I could
            maybe see doing some light cutting play. I do like scratches, but
            actually breaking skin intentionally with a blade kinda freaks me
            out a little.
          </Body>
        </>
      )}
    </>
  );
}
