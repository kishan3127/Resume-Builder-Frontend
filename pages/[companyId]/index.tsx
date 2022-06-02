import CompanyScreen from "../../screens/company";
import { IncomingMessage, ServerResponse } from "http";

type GetInitalProps = {
  res?: ServerResponse;
  req?: IncomingMessage;
  query?: {
    companyId?: Number;
  };
};

export const getServerSideProps = async ({ query }: GetInitalProps) => {
  let companyId = query?.companyId || null;
  let newProps;
  try {
    const apiResponse = [];
    newProps = {
      ...newProps,
      error: false,
      companyId,
      data: apiResponse ?? [],
    };
  } catch (error) {
    newProps = {
      ...newProps,
      data: [],
      companyId,
      error: true,
    };
  }

  return {
    props: newProps,
  };
};
export default CompanyScreen;
