import { useEffect, useReducer, memo } from "react";
import { useParams } from "react-router-dom";

import { useStableNavigate } from "../../hooks/StableNavigate";
import * as RoutePaths from "../../constants/RoutePaths";

import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../../store/store";
import { initialize, cleanup } from "./slice";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

import Group from "./Group";
import Key from "./Key";
import { questionData } from "./QuestionData";
import { responseToCode } from "./utils";

const KinkList = memo(function KinkList() {
  const { listData } = useParams();
  const navigate = useStableNavigate();

  const [showInfo, toggleShowInfo] = useReducer((state) => !state, true);

  const responses = useSelector((state: RootState) => state.kinklist);
  const dispatch = useDispatch();

  useEffect(() => {
    if (listData) {
      dispatch(initialize(listData));
    }

    return () => {
      dispatch(cleanup());
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Set hash on change to responses
  useEffect(() => {
    navigate(`${RoutePaths.KINKLIST}/${responseToCode(responses)}`, {
      replace: true,
    });
  }, [responses, navigate]);

  return (
    <Container
      maxWidth="xxl"
      sx={{
        paddingLeft: { xxl: "12px" },
        paddingRight: { xxl: "12px" },
        paddingBottom: "16px",
      }}
    >
      {showInfo && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "16px",
          }}
        >
          <Alert severity="info" onClose={toggleShowInfo}>
            Hello, thanks for checking out the kink list! As you edit your
            answers, the URL updates to match your answers. If you want to share
            your responses or save them for later, just share/save the URL when
            you're done! This is currently a first cut, so there are plenty more
            features to come like search and filtering. Have fun!
          </Alert>
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "16px",
        }}
      >
        <Key />
      </Box>

      {questionData.map((group) => (
        <Group groupData={group} key={group.title} />
      ))}
    </Container>
  );
});

export default KinkList;
