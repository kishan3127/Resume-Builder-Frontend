import CandidateScreen from "../../screens/candidate";
import { staticData } from "../../utils/constants";
import { IncomingMessage, ServerResponse } from "http";

type GetInitalProps = {
  res?: ServerResponse;
  req?: IncomingMessage;
  query?: {
    candidateId?: Number;
  };
};

export const getServerSideProps = async ({ query }: GetInitalProps) => {
  const candidateId = query?.candidateId || null;

  let newProps = {};

  try {
    const apiResponse = staticData;
    newProps = {
      ...newProps,
      error: false,
      data: apiResponse ?? [],
      candidateId,
    };
  } catch (error) {
    newProps = {
      ...newProps,
      data: [],
      error: true,
      candidateId,
    };
  }

  return {
    props: newProps,
  };
};
export default CandidateScreen;
