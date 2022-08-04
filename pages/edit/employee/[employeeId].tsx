import EmployeeEditScreen from "../../../screens/employees/editEmployeeScreen";
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
    newProps = {
      ...newProps,
      error: false,
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
export default EmployeeEditScreen;
