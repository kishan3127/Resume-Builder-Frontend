import React from "react";
import CompanyProfile from "../../components/company-profile";

const CompnayScreen = (props) => {
  return (
    <>
      <CompanyProfile companyId={props.companyId} />
    </>
  );
};

export default CompnayScreen;
