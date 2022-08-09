import AdminLayout from "../../layouts/admin-layout";
import EmployeeEditComponent from "../../components/editCompany/index";

function CompanyEditScreen({ companyId }) {
  return (
    <AdminLayout>
      <EmployeeEditComponent companyId={companyId} />
    </AdminLayout>
  );
}

export default CompanyEditScreen;
