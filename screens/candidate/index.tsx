import React from "react";
// import { useRouter } from "next/router";
import CandidateProfile from "../../components/candidate-profile";

const CandidateScreen = (props) => {
  // const router = useRouter();
  // const { candidateId } = router.query;
  const { data } = props;

  return (
    <>
      <CandidateProfile candidateId={props.candidateId} staticData={data} />
    </>
  );
};

export default CandidateScreen;
