import React from "react";
// import { useRouter } from "next/router";
import EmployeeProfile from "../../components/candidate-profile";

const EmployeeScreen = (props) => {
  // const router = useRouter();
  // const { candidateId } = router.query;
  const { data } = props;

  return (
    <>
      <EmployeeProfile employeeId={props.employeeId} staticData={data} />
    </>
  );
};

export default EmployeeScreen;
