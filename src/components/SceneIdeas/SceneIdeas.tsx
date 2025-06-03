import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Line, Body, Header } from "../../utils/formats";

export default function SceneIdeas() {
  return (
    <Container
      maxWidth="xxl"
      sx={{
        paddingTop: "16px",
        paddingBottom: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <Typography align="center" variant="h4">
        Scene Ideas and Concepts
      </Typography>
      <Body>
        This page is pretty self-explanatory, but I'll explain it for you
        anyway, dear reader. These are some ideas and concepts for scenes that I
        have fleshed out to varying degrees. Some of them I'm interested in for
        myself, others may be something I thought of for people other than
        myself, and some I just think would be entertaining to watch &gt;:3
      </Body>
      <Line />
      <Header>Challenges, Wagers, and Competitions</Header>
      <Body>
        This is more of a category of scene than a specific scene, but it
        scratches the brain itch in a fun way. The core premise is to give the
        sub/bottom a moderately challenging task to complete, and they receive a
        performance-based reward or punishment. The task should ideally be
        within or just outside their capabilities, and time limits are
        encouraged. Using a puzzle as an example, the most basic setup would be
        "complete this puzzle before the time runs out. If you succeed, reward.
        If you fail, punishment." The reward can be a lack of punishment, or the
        punishment could be a lack of reward. Not both... if you do both at once
        you just get a "do this for my entertainment" type deal which is also
        fun, but not what I'm talking about here.
      </Body>
      <Body>
        Some fairly natural variants to this are to increase the punishment for
        each increment of time past the limit or to even set it up such that
        it's just punishment based on amount of time elapsed entirely (no reward
        for you in this case, fictional sub). Another variant is to make it
        performance-based where mistakes are punished. A concrete example of
        this from my past was counting the number of times I died during a
        playthrough of Dark Souls (a notoriously difficult video game). If I
        died to a regular enemy, that was 1 point. If I died to a boss, that was
        2 points. If I died by falling off a cliff, that was 3 points. At the
        end of my playthrough, the points were summed, and the top had a
        predetermined "menu" of punishments they could buy with the points.
        That's a bit more of a long-term one (the playthrough took a couple
        weeks). If your sub is into rhythm games, maybe try giving them a
        punishment for every miss in a track. Or increase the punishment for
        each attempt it takes them to full combo a track. The possibilities are
        endless.
      </Body>
      <Body>
        You could also frame it as a race or competition/bet. This works{" "}
        <em>really</em> well when the sub is competitive. Add handicaps to make
        it a close competition for more excitement! Though, a total blowout is
        also fun sometimes. Another example from my past: I was learning how to
        play chess and the top I was playing with at the time was significantly
        better than me. For every point of material she was up by at the end of
        the game was another spank unless I somehow managed to win (I didn't,
        I'm quite bad at chess). The competition framing also works really well
        for two switches playing together if you need a unique way to determine
        who tops. Watching two subs compete is also a fun time, so give them
        some motivation by rewarding the winner and punishing the loser.
      </Body>
      <Line />

      <Header>To be continued...</Header>
      <Body>
        Just not tonight. I'm tired and going to bed but wanted to get this into
        a bare minimum shareable state.
      </Body>
    </Container>
  );
}
