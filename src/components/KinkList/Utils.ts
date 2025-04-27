import { questionData, GroupInfo } from "./QuestionData";

// Internally used consts
const validChars: string =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
const responseChars: string = "ABCDEFGH";
// const responseMap: { [key: string]: string } = {
//   A: "HL",
//   B: "SL",
//   C: "0",
//   D: "1",
//   E: "2",
//   F: "3",
//   G: "4",
// };

// Types
export type Category = "topint" | "botint" | "topexp" | "botexp";
export type Responses = { [key: string]: { [key in Category]: string } };

// Encode a single block of the string (6 chars -> 4 chars)
const encodeBlock = (blockIn: string) => {
  const answerIndexTop =
    responseChars.indexOf(blockIn[2]) * 8 + responseChars.indexOf(blockIn[3]);
  const answerIndexBot =
    responseChars.indexOf(blockIn[4]) * 8 + responseChars.indexOf(blockIn[5]);
  return `${blockIn.substring(0, 2)}${validChars[answerIndexTop]}${
    validChars[answerIndexBot]
  }`;
};

// Encode the entire response string (must have length divisible by 6)
const encodeResponse = (strIn: string) => {
  let output = "";
  const blockCount = Math.floor(strIn.length / 6);
  for (let i = 0; i < blockCount; i++) {
    output = `${output}${encodeBlock(strIn.substring(i * 6, (i + 1) * 6))}`;
  }
  return output;
};

// Decode a single block of the string (4 chars -> 6 chars)
const decodeBlock = (blockIn: string) => {
  const answerIndexTop = validChars.indexOf(blockIn[2]);
  const answerIndexBot = validChars.indexOf(blockIn[3]);
  const topInt = responseChars[Math.floor(answerIndexTop / 8)];
  const topExp = responseChars[answerIndexTop % 8];
  const botInt = responseChars[Math.floor(answerIndexBot / 8)];
  const botExp = responseChars[answerIndexBot % 8];
  return `${blockIn.substring(0, 2)}${topInt}${topExp}${botInt}${botExp}`;
};

// Decode the entire response string (must have length divisible by 4)
const decodeResponse = (strIn: string) => {
  let output = "";
  const blockCount = Math.floor(strIn.length / 4);
  for (let i = 0; i < blockCount; i++) {
    output = `${output}${decodeBlock(strIn.substring(i * 4, (i + 1) * 4))}`;
  }
  return output;
};

// Convert a response object to a response code for the hash
export const responseToCode = (responseObj: Responses) => {
  const responseArray = Object.keys(responseObj).map((key) => {
    return {
      ID: key,
      topint: responseObj[key]["topint"],
      topexp: responseObj[key]["topexp"],
      botint: responseObj[key]["botint"],
      botexp: responseObj[key]["botexp"],
    };
  });
  responseArray.sort((a, b) => {
    if (a.ID < b.ID) {
      return -1;
    }
    if (b.ID < a.ID) {
      return 1;
    }
    return 0;
  });
  let responseString = "";
  responseArray.forEach(
    (e) =>
      (responseString = `${responseString}${e["ID"]}${e["topint"]}${e["topexp"]}${e["botint"]}${e["botexp"]}`)
  );
  return encodeResponse(responseString);
};

// Convert a response code to a response object
export const codeToResponse = (responseCode: string) => {
  const decodedResponse = decodeResponse(responseCode);
  // Populate state object
  const responseState: Responses = {};
  let blockCount = Math.floor(decodedResponse.length / 6);
  for (let i = 0; i < blockCount; i++) {
    let currentBlock = decodedResponse.substring(i * 6, (i + 1) * 6);
    if (
      responseChars.includes(currentBlock[2]) &&
      responseChars.includes(currentBlock[3])
    ) {
      responseState[currentBlock.substring(0, 2)] = {
        topint: currentBlock[2],
        topexp: currentBlock[3],
        botint: currentBlock[4],
        botexp: currentBlock[5],
      };
    } else {
      // Shouldn't hit here, but just in case
      console.log("Error in parsed data");
    }
  }
  return responseState;
};

// Remove empty responses from response object
export const removeEmptyResponse = (response: Responses) => {
  const filteredResponses: Responses = {};
  Object.keys(response).forEach((item) => {
    const valid = Object.keys(response[item]).some((category: string) => {
      return response[item][category as Category] !== "H";
    });
    if (valid) {
      filteredResponses[item] = response[item];
    }
  });
  return filteredResponses;
};

// Clean a response object
// To clean a response code string, first convert to object with codeToResponse
export const cleanResponse = (response: Responses) => {
  const cleanedResponses: Responses = {};
  Object.keys(response).forEach((item) => {
    const valid = questionData.some((group) =>
      group.questions.some((question) => question.ID === item)
    );
    if (valid) {
      cleanedResponses[item] = response[item];
    }
  });
  return removeEmptyResponse(cleanedResponses);
};

// Get responses only for a group
export const getGroupResponses = (response: Responses, group: GroupInfo) => {
  const filteredResponses: Responses = {};
  Object.keys(response).forEach((item) => {
    const valid = group.questions.some((question) => question.ID === item);
    if (valid) {
      filteredResponses[item] = response[item];
    }
  });
  return filteredResponses;
};
