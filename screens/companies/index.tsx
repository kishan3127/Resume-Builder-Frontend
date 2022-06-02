import React from "react";
import Companies from "../../components/companies";
import AdminLayout from "../../layouts/admin-layout";
import { useRouter } from "next/router";

const CompaniesList = () => {
  const router = useRouter();
  const { route } = router;
  return (
    <>
      <AdminLayout route={route}>
        <Companies />
      </AdminLayout>
    </>
  );
};

export default CompaniesList;
