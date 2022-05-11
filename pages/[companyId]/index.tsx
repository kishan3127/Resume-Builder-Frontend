import CompanyScreen from "../../screens/company";

export const getServerSideProps = async ({ companyId }: { companyId: any }) => {
  let newProps = companyId;

  try {
    const apiResponse = [];
    newProps = {
      ...newProps,
      error: false,
      data: apiResponse ?? [],
    };
  } catch (error) {
    newProps = {
      ...newProps,
      data: [],
      error: true,
    };
  }

  return {
    props: newProps,
  };
};
export default CompanyScreen;
