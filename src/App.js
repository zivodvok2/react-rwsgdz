import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
 const inputRef=useRef(null);
  return(
    <div>
    <h1> WELCOME TO SOMA </h1>
    <h2> SIGNUP TO CONTINUE </h2>

<form name="sign" onsubmit={formik.handlesubmit} className='sign'>

<fieldset>
<p> ENTER YOUR NAME:</p>
<input ref={inputRef} type="text" size="30" placeholde="name" />
<br /><br />

<p>ENTER YOUR EMAIL ADDRESS: </p>
<input ref={inputRef} type="text" size="30" placeholder="Email" />
<br /> <br />

<p> ENTER YOUR PASSWORD: </p>
<input ref={inputRef} type="password" size="30"
placeholder="password" />
<br />< br />

<p>CONFIRM YOUR PASSWORD :</p>
<input ref={inputRef} type="password" size="30"
placeholder="Confirm password" />
<br /><br />
<br />
<Button variant="primary" size="lg" block>    SIGNUP
  </Button>
</ fieldset>
</ form>
    </div>
  );
}