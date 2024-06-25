import { useEffect, useRef } from "react";
import React from "react";

export default function UseRef() {
  const name = useRef(null);
  const email = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value);
    console.log(email.current.value);

    console.log(name);
    console.log(email);

    name.current.value = "";
    email.current.value = "";
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" ref={name} placeholder="enter the name" />
      <input type="text" ref={email} placeholder="Enter email" />
      <input type="submit" />
    </form>
  );
}
