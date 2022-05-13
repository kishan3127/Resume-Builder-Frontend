import Login from "../../screens/login";

export const getServerSideProps = async () => {
  let newProps = { props: { loggedIn: false } };

  return {
    props: newProps,
  };
};
export default Login;
