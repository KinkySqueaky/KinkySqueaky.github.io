import { useEffect, memo } from "react";
import { useParams } from "react-router-dom";

import { useStableNavigate } from "../../hooks/StableNavigate";
import * as RoutePaths from "../../constants/RoutePaths";

import { store, useKLDispatch, useKLSelector } from "./store";
import { Provider } from "react-redux";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Group from "./Group";

import { questionData } from "./QuestionData";
import { responseToCode } from "./utils";

const KinkListForm = memo(function KinkListForm() {
  const { listData } = useParams();
  const navigate = useStableNavigate();

  const dispatch = useKLDispatch();
  //console.log(responses);

  const responses = useKLSelector((state) => state.kinklist);

  // Load the initial data, clean it, then set the internal response data
  useEffect(() => {
    if (listData) {
      dispatch({ type: "INIT", data: listData });
    }

    return () => {
      dispatch({ type: "CLEANUP" });
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // Disabling rule to only get value on the first render of the component

  // Set hash on change to responses
  useEffect(() => {
    // Set hash
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

const KinkList = memo(function KinkList() {
  return (
    <Provider store={store}>
      <KinkListForm />
    </Provider>
  );
});

export default KinkList;
