export type QuestionInfo = {
  ID: string;
  title: string;
  top: string;
  bottom: string;
  tooltip?: string;
};

export type GroupInfo = {
  title: string;
  questions: Array<QuestionInfo>;
};

export const questionData: Array<GroupInfo> = [
  {
    title: "Sexual Activity",
    questions: [
      {
        ID: "AA",
        title: "Anal sex",
        top: "Penetrating",
        bottom: "Being Penetrated",
      },
      {
        ID: "AB",
        title: "Anal plug (public, under clothes)",
        top: "Wearing (partner)",
        bottom: "Wearing (self)",
      },
      {
        ID: "AC",
        title: "Anal plug (private, under clothes)",
        top: "Wearing (partner)",
        bottom: "Wearing (self)",
      },
      {
        ID: "AD",
        title: "Anal plugs (small)",
        top: "Wearing (partner)",
        bottom: "Wearing (self)",
      },
      {
        ID: "AE",
        title: "Anal plugs (large)",
        top: "Wearing (partner)",
        bottom: "Wearing (self)",
      },
      {
        ID: "AF",
        title: "Anal Beads",
        top: "Partner",
        bottom: "Self",
      },
      {
        ID: "AG",
        title: "Vaginal Sex",
        top: "Penetrating",
        bottom: "Being Penetrated",
      },
      {
        ID: "AH",
        title: "Dilating",
        top: "Partner",
        bottom: "Self",
      },
      {
        ID: "AJ",
        title: "Dildos",
        top: "Partner",
        bottom: "Self",
      },
      {
        ID: "AK",
        title: "Figging/Radishing",
        top: "Partner",
        bottom: "Self",
      },
      {
        ID: "AL",
        title: "Strap-on Dildos (penetration)",
        top: "Penetrating",
        bottom: "Being Penetrated",
      },
      {
        ID: "AM",
        title: "Strap-on Dildos (sucking)",
        top: "Penetrating",
        bottom: "Being Penetrated",
      },
      {
        ID: "AN",
        title: "Strap-on Dildos (wearing)",
        top: "Partner",
        bottom: "Self",
      },
      {
        ID: "AO",
        title: "Vibrator on Genitals",
        top: "Partner",
        bottom: "Self",
      },
    ],
  },
  {
    title: "Section B",
    questions: [
      {
        ID: "BA",
        title: "Question B.A",
        top: "Giving",
        bottom: "Receiving",
      },
      {
        ID: "BB",
        title: "Question B.B",
        top: "Watching",
        bottom: "Wearing",
        tooltip: "Tooltip for Question B.B",
      },
      {
        ID: "BC",
        title: "Question B.C",
        top: "Giving",
        bottom: "Receiving",
      },
    ],
  },
  {
    title: "Section C",
    questions: [
      {
        ID: "CA",
        title: "Question C.A",
        top: "Giving",
        bottom: "Receiving",
        tooltip: "Tooltip for Question C.A",
      },
    ],
  },
  {
    title: "Section D",
    questions: [
      {
        ID: "DA",
        title: "Question D.A",
        top: "Giving",
        bottom: "Receiving",
        tooltip: "Tooltip for Question D.A",
      },
      {
        ID: "DB",
        title: "Question D.B",
        top: "Observing",
        bottom: "Wearing",
        tooltip: "Tooltip for Question D.B",
      },
      {
        ID: "DC",
        title: "Question D.C",
        top: "Giving",
        bottom: "Receiving",
        tooltip: "Tooltip for Question D.C",
      },
    ],
  },
  {
    title: "Section E",
    questions: [
      {
        ID: "EA",
        title: "Question E.A",
        top: "Giving",
        bottom: "Receiving",
        tooltip: "Tooltip for Question E.A",
      },
      {
        ID: "EB",
        title: "Question E.B",
        top: "Observing",
        bottom: "Wearing",
        tooltip: "Tooltip for Question E.B",
      },
      {
        ID: "EC",
        title: "Question E.C",
        top: "Giving",
        bottom: "Receiving",
        tooltip: "Tooltip for Question E.C",
      },
      {
        ID: "ED",
        title: "Question E.D",
        top: "Giving",
        bottom: "Receiving",
        tooltip: "Tooltip for Question E.D",
      },
    ],
  },
];
