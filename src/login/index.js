import React, {useEffect} from "react";
const Login = () => {
  useEffect(() => {
    console.log('Login');
  }, []);
  return (
    <>
      <h1 id="123">登陆页面</h1>
    </>
  );
};
export default Login;
