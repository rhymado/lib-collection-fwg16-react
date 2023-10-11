// eslint-disable-next-line no-unused-vars
import React, { Component, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import "../styles/App.css";

import reactLogo from "../assets/react.svg";
import getImageURL from "../utils/imageGetter";

class AppClass extends Component {
  state = {
    name: "Fazztrack",
    count: 0,
  };
  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  componentDidMount() {
    console.log("done mounting");
  }
  componentDidUpdate() {
    console.log("done updating");
  }
  render() {
    console.log("render");
    return (
      <div className="test">
        <p>{this.state.name}</p>
        <p>{this.props.title}</p>
        <button onClick={this.increaseCount}>count is {this.state.count}</button>
      </div>
    );
  }
}

// eslint-disable-next-line no-unused-vars
function AppFunc(props) {
  const [name, setName] = useState("FWG");
  const [count, setCount] = useState(0);
  // const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const newName = e.target.fullname.value;
    setName(newName);
  };
  const increaseCount = () => {
    const newNumber = count + 1;
    setCount(newNumber);
  };
  // useEffect(handler, deps)
  // deps => [] => behaviour seperti componentDidMount
  // deps => [var1, var2] => behaviour seperti componentDidUpdate
  // componentWillUnmount digambarkan menggunakan return pada handler useEffect
  useEffect(() => {
    console.log("done mounting");
    // return () => {
    //   // cleanup function
    // };
  }, []);
  useEffect(() => {
    console.log("done updating");
  }, [count, name]);
  return (
    <div>
      <div>
        {/* import image from public directory */}
        <img src="/svg/vite.svg" alt="vite-logo" height={75} width={75} />
        {/* import image from assets */}
        <img src={reactLogo} alt="react-logo" height={75} width={75} />
        {/* dynamic import from assets */}
        <img
          src={getImageURL("profile", "png")}
          alt="profile"
          height={539}
          width={400}
          className="profile"
        />
      </div>
      <p>{name}</p>
      <p>{props.title}</p>
      <form onSubmit={submitHandler}>
        <input type="text" name="fullname" className="input-name" />
        <button type="submit">Change</button>
      </form>
      <button onClick={increaseCount}>count is {count}</button>
      <div>
        {/* <button onClick={() => navigate("/")}>Go to Auth</button> */}
        <Link to={"/"}>
          <button className="border-solid border-2 border-black p-3 m-3">Go to Auth</button>
        </Link>
      </div>
    </div>
  );
}

export default AppFunc;
// export default AppClass;

{
  /* <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </> */
}
