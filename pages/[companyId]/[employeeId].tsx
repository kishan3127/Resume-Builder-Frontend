import EmployeeScreen from "../../screens/employee";
import { staticData } from "../../utils/constants";
import { IncomingMessage, ServerResponse } from "http";

type GetInitalProps = {
  res?: ServerResponse;
  req?: IncomingMessage;
  query?: {
    employeeId?: Number;
  };
};

export const getServerSideProps = async ({ query }: GetInitalProps) => {
  const employeeId = query?.employeeId || null;

  let newProps = {};

  try {
    const apiResponse = staticData;
    newProps = {
      ...newProps,
      error: false,
      data: apiResponse ?? [],
      employeeId,
    };
  } catch (error) {
    newProps = {
      ...newProps,
      data: [],
      error: true,
      employeeId,
    };
  }

  return {
    props: newProps,
  };
};
export default EmployeeScreen;
