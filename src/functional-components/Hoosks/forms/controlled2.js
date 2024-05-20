import { useState } from "react";

const FormControlled = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = form;
    await loginHitApi(username, password);
  };

  const loginHitApi = async (username, password) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30, // optional, defaults to 60
        }),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Username:</label>
      <input
        type="text"
        placeholder="Enter username"
        value={form.username}
        onChange={onChangeHandler}
        name="username"
      />

      <label>Password:</label>
      <input
        type="password"
        value={form.password}
        placeholder="Enter password"
        onChange={onChangeHandler}
        name="password"
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormControlled;
