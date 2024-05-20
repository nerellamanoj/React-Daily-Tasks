import { useState } from "react";

const ControlledComponents = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameHandler = (event) => {
    const userName = event.target.value;

    setUserName(userName);
    console.log(userName);
  };
  const passwordHandler = (event) => {
    const password = event.target.value;
    setPassword(password);

    console.log(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userDetails = {
      username: username,
      password: password,
      id: Math.random(),
    };
    console.log(userDetails);

    // console.log(username);
    // console.log(password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <lable>UserName</lable>
      <input
        type="text"
        value={username}
        placeholder="Enter the Name"
        onChange={userNameHandler}
      ></input>

      <lable>Password</lable>
      <input
        type="password"
        value={password}
        placeholder="Enter password"
        onChange={passwordHandler}
      ></input>

      <button type="submit">Submit</button>
    </form>
  );
};
export default ControlledComponents;
