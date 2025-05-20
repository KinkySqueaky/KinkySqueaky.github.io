import { useEffect, memo } from "react";
import { useParams } from "react-router-dom";

import { useStableNavigate } from "../../hooks/StableNavigate";
import * as RoutePaths from "../../constants/RoutePaths";

import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../../store/store";
import { initialize, cleanup } from "./slice";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Group from "./Group";
import { questionData } from "./QuestionData";
import { responseToCode } from "./utils";

const KinkList = memo(function KinkList() {
  const { listData } = useParams();
  const navigate = useStableNavigate();

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
      }}
    >
      <Box sx={{ marginBottom: 2 }}>
        {questionData.map((group) => (
          <Group groupData={group} key={group.title} />
        ))}
      </Box>
    </Container>
  );
});

export default KinkList;
