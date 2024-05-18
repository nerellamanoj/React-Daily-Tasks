import { useState } from "react";

const FormControlled = () => {
  const [form, setform] = useState({
    username: null,
    password: null,
  });
  const onChangeHnadler = (event) => {
    const { value, name } = event.target;

    setform((prevstate) => ({
      ...prevstate,
      [name]: value,
    })); 
  };

  return (
    <form>
      <label>Username:</label>
      <input
        type="Text"
        placeholder="Enter username"
        value={form.username}
        onChange={onChangeHnadler}
        name="username"
      ></input>

      <label>Password:</label>
      <input
        type="Text"
        value={form.password}
        placeholder="Enter password"
        onChange={onChangeHnadler}
        name="password"
      ></input>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormControlled;
