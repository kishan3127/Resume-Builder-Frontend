import React from "react";
import AddCandidate from "../../components/addCandidate";
import AdminLayout from "../../layouts/admin-layout";

const NewCandidate = () => {
  return (
    <>
      <AdminLayout>
        <AddCandidate />
      </AdminLayout>
    </>
  );
};

export default NewCandidate;
