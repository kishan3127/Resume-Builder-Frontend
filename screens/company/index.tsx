import React from "react";
import { useRouter } from "next/router";
import CompanyProfile from "../../components/company-profile";

const CompnayScreen = () => {
  const router = useRouter();
  const { companyId } = router.query;

  console.log(companyId, "propspropsprops");
  return (
    <>
      CompanyId - {JSON.stringify(router.query)}
      <CompanyProfile />
    </>
  );
};

export default CompnayScreen;
