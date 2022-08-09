import AdminLayout from "../../layouts/admin-layout";

import EmployeeEditComponent from "../../components/editEmployee";

function EmployeeEditScreen({ employeeId }) {
  return (
    <AdminLayout>
      <EmployeeEditComponent employeeId={employeeId} />
    </AdminLayout>
  );
}

export default EmployeeEditScreen;
