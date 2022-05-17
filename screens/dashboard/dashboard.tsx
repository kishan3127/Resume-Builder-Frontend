import React from "react";

import AdminLayout from "../../layouts/admin-layout";
import Countries from "../../components/Countries";
import ClientOnly from "../../components/ClientOnly";

const DashboardScreen = (props) => {
  console.log("props", props);
  return (
    <>
      <AdminLayout>
        <ClientOnly>
          <Countries />
        </ClientOnly>
        Dashboad it is
      </AdminLayout>
    </>
  );
};

export default DashboardScreen;
