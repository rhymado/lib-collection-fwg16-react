import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";

import bgLibrary from "../assets/bg-library.jpg";

function Auth() {
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => {
    setIsLogin((state) => !state);
  };
  const navigate = useNavigate();
  const showPwdHandler = () => {
    setIsPwdShown((state) => !state);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      password: e.target.pwd.value,
    };
    if (!isLogin) Object.assign(body, { username: e.target.username.value });
    // console.log(body);
    let url = "http://localhost:8000/auth";
    if (!isLogin) url += "/register";
    axios
      .post(url, body)
      .then((res) => {
        console.log(res.data);
        navigate("/app");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
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
            <div className={`flex flex-col ${isLogin && "hidden"}`}>
              <label htmlFor="username">username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="border-solid border-black border-2 p-1"
              />
            </div>
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
            <button
              type="submit"
              className="bg-orange-500 cursor-pointer select-none border-solid border-black border-2 p-3 w-full hover:bg-orange-400"
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
    </>
  );
}

export default Auth;
