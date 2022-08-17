import { getUserLoginStatus } from "utils/helper";
import { Cookies } from "react-cookie";

import Login from "../../screens/login";

export const getServerSideProps = async (context: any) => {
  const cookies = new Cookies(context.req?.headers.cookie) || null;
  const token = cookies.get("token");
  const userId = cookies.get("userId");

  return {
    props: {
      user: {
        userId: userId || null,
        token: token || null,
        loggedIn: token ? true : false,
      },
    },
  };
};
export default Login;
