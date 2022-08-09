import CompanyEditScreen from "../../../screens/company/editCompnayScreen";
import { IncomingMessage, ServerResponse } from "http";

type GetInitalProps = {
  res?: ServerResponse;
  req?: IncomingMessage;
  query?: {
    companyId?: Number;
  };
};

export const getServerSideProps = async ({ query }: GetInitalProps) => {
  const companyId = query?.companyId || null;

  let newProps = {};

  try {
    newProps = {
      ...newProps,
      error: false,
      data: [],
      companyId,
    };
  } catch (error) {
    newProps = {
      ...newProps,
      data: [],
      error: true,
      companyId,
    };
  }

  return {
    props: newProps,
  };
};
export default CompanyEditScreen;
