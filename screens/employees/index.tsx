import React from "react";
import Employees from "../../components/employees";
import AdminLayout from "../../layouts/admin-layout";
import { useRouter } from "next/router";

const EmployeesList = () => {
  const router = useRouter();
  const { route } = router;
  console.log(route, "route");
  // console.log(companyId, "propspropsprops");

  return (
    <>
      <AdminLayout route={route}>
        <Employees />
      </AdminLayout>
    </>
  );
};

export default EmployeesList;
