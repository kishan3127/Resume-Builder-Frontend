import { Cookies } from "react-cookie";

export const getUserLoginStatus = (context) => {
  let newProps: any = {};

  const cookies = new Cookies(context.req?.headers.cookie);
  const token = cookies.get("token");
  const userId = cookies.get("userId");

  if (!token || !userId) {
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();

    newProps = {
      isLogged: false,
      incompleteProfile: false,
    };
  } else {
    newProps = {
      isLogged: true,
    };
  }
  return newProps;
};
