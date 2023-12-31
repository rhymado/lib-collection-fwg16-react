import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../components/Title";
// import { useUserContext } from "../contexts/userContext";
// import { login, register } from "../utils/https/auth";
import { userAction } from "../redux/slices/user";

import bgLibrary from "../assets/bg-library.jpg";

function Auth() {
  const user = useSelector((state) => state.user);
  // console.log(user.err);
  const dispatch = useDispatch();
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  // const { changeUser } = useUserContext();
  const toggleLogin = () => {
    setIsLogin((state) => !state);
  };
  // const navigate = useNavigate();
  const showPwdHandler = () => {
    setIsPwdShown((state) => !state);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      password: e.target.pwd.value,
    };
    if (!isLogin) Object.assign(body, { username: e.target.username.value });
    // try {
    const { loginThunk, registerThunk } = userAction;
    // const { data } = isLogin ? await login(body) : await register(body);
    if (isLogin) return dispatch(loginThunk(body));
    return dispatch(registerThunk(body));
    // changeUser({
    //   isUserAvailable: true,
    //   userInfo: isLogin ? data.data.userInfo : data.data,
    // });
    // if (isLogin) return navigate("/app");
    // toggleLogin();
    // e.target.email.value = "";
    // e.target.pwd.value = "";
    // e.target.username.value = "";
    // } catch (error) {
    //   (err) => console.log(err);
    // }
  };
  return (
    <Title title="Auth">
      <Header />
      <main className="p-3 bg-beige text-left">
        <section className="flex flex-col items-center mb-3">
          <img src={bgLibrary} alt="side-background-login" className="h-[350px] w-52" />
          <p id="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel reprehenderit totam,
            nulla consequatur adipisci qui cupiditate minima voluptatum nostrum commodi temporibus
            asperiores atque veritatis nihil non praesentium sapiente laboriosam.
          </p>
        </section>
        <section className="login-form">
          <form onSubmit={submitHandler}>
            <div className="flex flex-col">
              <label htmlFor="email">email</label>
              <input
                type="text"
                name="email"
                id="email"
                className="border-solid border-black border-2 p-1"
              />
            </div>
            {!isLogin && (
              <div className="flex flex-col">
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="border-solid border-black border-2 p-1"
                />
              </div>
            )}
            <div className="flex flex-col">
              <label htmlFor="pwd">password</label>
              <input
                type={isPwdShown ? "text" : "password"}
                id="pwd"
                name="pwd"
                className="border-solid border-black border-2 p-1"
              />
              <div className="text-right my-3">
                <input
                  type="checkbox"
                  id="show-pwd"
                  className="cursor-pointer select-none"
                  value={isPwdShown}
                  onChange={showPwdHandler}
                />
                <label htmlFor="show-pwd" className="cursor-pointer select-none ml-1">
                  show password
                </label>
              </div>
            </div>
            {user.isRejected && (user.err.login || user.err.register) && (
              <p className="block text-center text-red-600 font-bold text-lg">
                {user.err.login.message || user.err.register.message}
              </p>
            )}
            <button
              type="submit"
              className={`bg-orange-500 ${
                user.isPending ? "cursor-progress" : "cursor-pointer"
              } select-none border-solid border-black border-2 p-3 w-full hover:bg-orange-400`}
            >
              {isLogin ? "Login" : "Register"}
            </button>
            <div className="text-center">
              <p
                className="inline underline cursor-pointer select-none hover:text-blue-800"
                onClick={toggleLogin}
              >
                {isLogin ? "Register" : "Login"}
              </p>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </Title>
  );
}

export default Auth;
