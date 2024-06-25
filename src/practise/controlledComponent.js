import React, { useState } from "react";

export default function ControlledComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter the name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="email"
        placeholder="Enter the email"
        value={email}
        onChange={handleEmailChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
