import CandidateScreen from "../../screens/candidate";
import { CandidateProfiles } from "../../utils/constants";
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
  const [first] = CandidateProfiles?.filter(
    (profile) => profile._id == candidateId
  );

  let newProps = {};

  try {
    const apiResponse = first;
    newProps = {
      ...newProps,
      error: false,
      data: apiResponse ?? [],
    };
  } catch (error) {
    newProps = {
      ...newProps,
      data: [],
      error: true,
    };
  }

  return {
    props: newProps,
  };
};
export default CandidateScreen;
