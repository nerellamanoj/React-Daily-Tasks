import React from "react";

function Button() {
  var url = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
  return (
    <>
      <img src={url} width={100} height={100} />
      <button>singnup</button>
    </>
  );
}

export default Button;
