import React from "react";
import AddEmployee from "../../components/addEmployee";
import AdminLayout from "../../layouts/admin-layout";

const NewEmployee = () => {
  return (
    <>
      <AdminLayout>
        <AddEmployee />
      </AdminLayout>
    </>
  );
};

export default NewEmployee;
