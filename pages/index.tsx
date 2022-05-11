import Dashboard from "../screens/dashboard";
import { getUserLoginStatus } from "../utils/helper";

export const getServerSideProps = async (context) => {
  let newProps = getUserLoginStatus(context);
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

export default Dashboard;
