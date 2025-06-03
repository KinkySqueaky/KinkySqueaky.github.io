import { useReducer } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Header, Body } from "../../utils/formats";

export default function BasicsOfPlay() {
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
            Basics of Play
          </Typography>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Box>
      {expanded && (
        <>
          <Header>The Basics</Header>
          <Body>
            If I've played with you before and we're on good terms, you can
            largely ignore the next paragraph! We're probably good to have a
            rough discussion of what is going to happen, I'll ask any questions
            I have, and we're chill to get into it. I've found lately that I'm
            enjoying scenes without knowing every little detail beforehand.
          </Body>
          <Body>
            If we haven't played before, I require detailed conversations before
            and after a scene, especially if we're playing with anything
            psychological or heavily emotional. I also require that I meet you
            in person for a one-on-one or small group chat before we do any play
            at all. This is almost always a completely separate time from when
            any play occurs. The key exception here is if we're doing pickup
            play at an event. Then only the conversation beforehand and
            afterward are required - this is to say that a separate meeting
            isn't needed in this case.
          </Body>
          <Body>
            On the topic of negotiation, at the time of writing, I have an
            owner. I love her, she loves me, and our dynamic always takes
            priority. My owner and I can discuss any changes to any
            tasks/restrictions she's given to me if I know I'm going to be
            playing with someone other than her. She's usually pretty
            accommodating, but if we're going to do something particularly
            intense or play regularly, she'll want to meet you and have her own
            negotiation with you.
          </Body>
          <Body>
            As far as safewords go, I use the stoplight system. Everyone has a
            slightly different interpretation of that, so here's how I tend to
            use it:
            <ul>
              <li>
                <span style={{ color: "#66dd00" }}>Green</span>: We're all good
                to keep going! This doesn't mean "go harder," it means "we're
                all good to keep going as we are."
              </li>
              <li>
                <span style={{ color: "#e4e400" }}>Yellow</span>: I need to stop
                for a break and check in. This doesn't necessarily mean play is
                over, but we need to evaluate whether it can and should
                continue.
              </li>
              <li>
                <span style={{ color: "#ff6161" }}>Red</span>: Play needs to
                stop immediately and we need to begin aftercare. Continuation of
                play beyond this point is a violation of my consent.
              </li>
            </ul>
          </Body>
          <Body>
            There's a pretty big jump between{" "}
            <span style={{ color: "#66dd00" }}>green</span> and{" "}
            <span style={{ color: "#e4e400" }}>yellow</span> so if I need you to
            slow down but not stop, I'll just use plain language communication.
            I'm also willing to adapt my system as needed on a per-person or a
            per-scene basis as long as we discuss it ahead of time and refresh
            on it right before a scene if we planned the scene ahead of time.
          </Body>
          <Body>
            I've got a handful of different behaviors that come up during play
            that I'll try to document better later on. For now, I'll summarize
            by saying that I'm vocal/noisy/squeaky for some things, can get
            easily overstimulated, and have a bit of a low threshold for crying.
            I don't expect you to memorize all the little details about me if
            we're just starting to play. So, if we're planning play that touches
            upon some of the things in here, I'll bring them up before we start
            as a reminder.
          </Body>

          <Header>Aftercare as a Submissive/Bottom</Header>
          <Body>
            My aftercare needs tend to vary with how psychologically/emotionally
            involved a scene is. A purely physical scene will often just require
            treating any injuries, rehydrating, and some verbal affirmations.
            (Squeaky's tip: Gatorade is a post-scene magic health potion!) If my
            emotions get played with more, I need a lot more thorough of a
            discussion afterward, sometimes getting cozy and cuddling, and I
            definitely need to fully stabilize before my partner leaves. The
            short version is that I just need to be reassured that my partner
            does in fact care about me as a partner and doesn't just see me as a
            disposable object. There are also plenty of scenes where I won't
            need aftercare beyond just a "you good?" "yep, I'm good".
          </Body>
          <Body>
            If play is particularly intense, I also prefer to have a check-in
            the day after, two days after, and with decreasing frequency for a
            duration depending on the intensity of a scene. This isn't required
            for pickup play, but it's still appreciated, especially if I'm still
            getting to know you.
          </Body>

          <Header>Aftercare as a Dominant/Top</Header>
          <Body>
            First and foremost, we'll deal with your aftercare needs. My
            aftercare needs as a top are to make sure of the following:
            <ul>
              <li>
                You had a good time
                <ul>
                  <li>
                    If you didn't, what can we change for the future if we want
                    to play again?
                  </li>
                </ul>
              </li>
              <li>
                You're happy with the scene
                <ul>
                  <li>
                    If you aren't, what can we change for the future if we want
                    to play again?
                  </li>
                </ul>
              </li>
              <li>
                I didn't cause any unintentional harm
                <ul>
                  <li>
                    If I did, why did it happen and what I can do to help with
                    the aftermath?
                  </li>
                </ul>
              </li>
            </ul>
          </Body>
          <Body>
            These may come up naturally during your aftercare, but if they don't
            I'll discuss them afterward. I also request the same check-ins as I
            do as a submissive/bottom (day after, two days after, etc.)
          </Body>

          <Header>Medical Considerations</Header>
          <Body>
            I have a mild form of Raynaud's, so my hands and feet lose
            circulation at their surface when they get cold. It doesn't need to
            be super cold before my hands and feet start to turn purple or
            white. It's not damaging unless it happens a lot or goes on for a
            while. However, it's quite unpleasant and if it can be avoided, I'd
            highly appreciate it.
          </Body>
          <Body>
            I also go climbing with variable frequency, so I occasionally get
            injured. Depending on the injury and severity, it may be something
            that I'm actually willing to incorporate into play. Because of the
            inconsistent nature of these injuries, I'll communicate about them
            if we're planning to play. I do expect you to ask for explicit
            consent before engaging with these injuries though.
          </Body>
          <Body>
            My shoulders and knees are also occasionally problematic so if we're
            doing anything that would put strain on them, I'll need to make sure
            I stretch them a bit. If they're really hurting on a particular day,
            we may have to adapt plans to work around that. I'm still in my 20s
            but oof do I feel elderly some days.
          </Body>
          <Body>
            I've got some weird stuff going on with my sinuses. If I cry even a
            little bit, my sinuses tend to swell to the point that it becomes
            difficult to breathe except for through my mouth. They also stay
            swollen for a while, so even after I'm done crying it'll sound like
            I'm crying or sick for up to a few hours afterward. If I cry for too
            long, I'll get a gnarly headache and need to stop play (this has
            only happened once).
          </Body>

          <Header>Emotional Considerations/Triggers</Header>
          <Body>
            Feeling like a burden was historically one of my biggest emotional
            problems, though it's gotten significantly better with time and
            therapy. If I feel like I'm a burden in some major way (or even a
            less major way if I'm in a vulnerable enough headspace), it'll
            likely pull me out of a scene and tear me up inside for a little
            bit. You can still make me feel like a piece of shit if that's the
            direction we want to go, but try to avoid explicitly pressing the
            burden button.
          </Body>
          <Body>
            I also used to majorly struggle with self-worth and feelings of
            competence. They've gotten better with time, and some things that
            used to be triggers are safe (and fun) to play with! I'm saying this
            to emphasize that the things in this section are safe to play with
            but should have some kind of follow-up to make sure they didn't
            leave a lasting mental or emotional impact. One main area where this
            came up a lot was calling me stuff like “stupid” or “dumb” or
            “worthless” in a scene, but I've recently found that I love being
            called “stupid” and “brainless” especially in hypnosis.
          </Body>
          <Body>
            Even though I've made progress with some of these things, there's
            still one area that fucks me up. <em>Never</em> carelessly mess
            around with themes of perfection. I've got some trauma wrapped up
            here from growing up, and it's a sensitive spot that will quickly
            ruin a scene for all parties involved because I'm likely to break
            down. For reference, a careless use of “trying isn't doing” while I
            was in an especially vulnerable headspace has caused such emotional
            damage in the past that there were physical consequences (read into
            it if you want, or don't, your choice). I will note that because
            I've communicated this to people I've played with, I haven't
            actually tried pressing this button to see if/how it messes with me
            in recent months. With the right person, I'm open to seeing the
            consequences of playing with themes of perfection. It'd likely be
            beneficial to do this at some point in the near future so I can
            update this section with more recent data, but that's for a future
            version of this document. Also "Kink isn't therapy" and all that
            jazz, yada yada yada...
          </Body>
          <Body>
            Talk of suicide is also an exceptionally difficult topic for me. I
            don't know why the hell this would come up during play, but it is
            within the realm of possibilities so I figure I'll mention it
            anyway. I used to be suicidal, I've had a family member threaten
            suicide to me directly, and I've had someone I cared deeply about
            attempt suicide multiple times and succeed in the end. Don't fucking
            talk about it as a joke or toss it around lightly during a scene.
            It's a topic that I can usually talk about outside of play just fine
            but bringing it into kink for any reason is a no-go.
          </Body>
          <Body>
            Being yelled at aggressively or in frustration can be triggering at
            times for me. This tends to trigger a fight or flight response in
            me. It reminds me of some not-so-fond family memories sometimes, so
            it's quite a visceral response. Loud noises can also be a bit
            overstimulating for me in general, so please try to avoid yelling if
            you can (unless we've specifically discussed it but that's kind of a
            given).
          </Body>

          <Header>Sexual Considerations</Header>
          <Body>
            I don't expect sex to be part of kink, but it's certainly lots of
            fun if I'm comfortable with you! I used to be a bit more hesitant
            when it came to sexual contact, but I'm a bit more open these days.
            Sexually, I'm pretty strictly a bottom. In theory I could top with a
            strap-on, but I don't use my biological "equipment" (if it can even
            be called that, it's more like a decoration). I'm open to being
            penetrated anally and orally, but I need some advance notice so I
            can appropriately prepare. I will note that I'm a bit of a slutty
            bottom when being penetrated anally and I love to try different
            positions to see what works for my partner and myself. I'm
            potentially open to receiving oral, but that's something that I'm
            still not 100% sold on yet.
          </Body>
          <Body>
            Playing with non-penetrative erogenous zones is also a huge turn-on
            but also needs discussion. For example, having my nipples played
            with is great, but it being unexpected can be very jarring if I'm
            not quite in a headspace yet. For people I've played with in this
            way before, the need for discussion goes down, but it's still
            appreciated.
          </Body>
        </>
      )}
    </>
  );
}
