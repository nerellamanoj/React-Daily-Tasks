import react, { useRef } from "react";

const Demo = () => {
  const userNameRef = useRef("");
  const passwordRef = useRef("");

  const handlesubmit = (event) => {
    event.preventDefault();

    console.log(userNameRef.current.value);
    console.log(passwordRef.current.value);
    const username=userNameRef.current.value;
    const password=passwordRef.current.value


    localStorage.setItem("username", username);
    localStorage.setItem("password", password);


  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="text" className="form-control" id="email" ref={userNameRef} />
          
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="text" className="form-control" id="pwd" ref={passwordRef} />
          
        </div>
        {/* <div className="checkbox">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div> */}
        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Demo;
