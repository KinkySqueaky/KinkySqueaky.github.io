import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useStableNavigate } from "../../hooks/StableNavigate";
import * as RoutePaths from "../../constants/RoutePaths";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Group from "./Group";

import { questionData } from "./QuestionData";
import {
  type Responses,
  responseToCode,
  codeToResponse,
  removeEmptyResponse,
  cleanResponse,
  getGroupResponses,
} from "./Utils";

export default function KinkList() {
  const { listData } = useParams();
  const navigate = useStableNavigate();

  const [responses, setResponses] = useState<Responses>({});

  // Load the initial data, clean it, then set the internal response data
  useEffect(() => {
    if (listData) {
      const dirtyResponses = codeToResponse(listData);
      const cleanResponses = cleanResponse(dirtyResponses);
      setResponses(cleanResponses);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // Disabling rule to only get value on the first render of the component

  // Set hash on change to responses
  useEffect(() => {
    // Set hash
    navigate(`${RoutePaths.KINKLIST}/${responseToCode(responses)}`, {
      replace: true,
    });
  }, [responses, navigate]);

  // Handle a response
  const handleChange = (questionID: string, type: string, value: string) => {
    // Edit response state
    if (!(questionID in responses)) {
      responses[questionID] = {
        topint: "",
        topexp: "",
        botint: "",
        botexp: "",
      };
    }
    // Set appropriate value
    if (type === "topint") {
      responses[questionID]["topint"] = value;
    }
    if (type === "topexp") {
      responses[questionID]["topexp"] = value;
    }
    if (type === "botint") {
      responses[questionID]["botint"] = value;
    }
    if (type === "botexp") {
      responses[questionID]["botexp"] = value;
    }
    // Fill out nonexistent entries
    if (!responses[questionID]["topint"]) {
      responses[questionID]["topint"] = "H";
    }
    if (!responses[questionID]["topexp"]) {
      responses[questionID]["topexp"] = "H";
    }
    if (!responses[questionID]["botint"]) {
      responses[questionID]["botint"] = "H";
    }
    if (!responses[questionID]["botexp"]) {
      responses[questionID]["botexp"] = "H";
    }
    const cleanResponses = removeEmptyResponse(responses);
    // Update the state officially
    setResponses({ ...cleanResponses });
  };

  return (
    <Container
      maxWidth="xxl"
      sx={{
        paddingLeft: { xxl: "12px" },
        paddingRight: { xxl: "12px" },
      }}
    >
      <Box>
        {questionData.map((group) => (
          <Group
            groupData={group}
            responses={getGroupResponses(responses, group)}
            onChange={handleChange}
            key={group.title}
          />
        ))}
        <Typography>{JSON.stringify(responses)}</Typography>
      </Box>
    </Container>
  );
}
