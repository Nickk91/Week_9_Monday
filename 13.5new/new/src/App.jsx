import { useRef, useEffect } from "react";
import "./App.css";

function App() {
  const myInputRef = useRef(null);

  useEffect(() => {
    myInputRef.current.focus();
  }, []);

  return (
    <>
      <form>
        <label htmlFor="fullname">Full name:</label>
        <br />
        <input ref={myInputRef} type="text" id="fullname" name="fullname" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
