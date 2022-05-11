import Login from "../../screens/login";

export const getServerSideProps = async (context: any) => {
  let newProps = { props: { loggedIn: false } };

  return {
    props: newProps,
  };
};
export default Login;
