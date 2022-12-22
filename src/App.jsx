import { useState } from 'react'
import './App.css'

function App() {
  const [dark, setDark] = useState(false);
  const toggleHandler = () => {
    setDark(!dark);
  };

  return (
    <div className={dark ? "App-dark" : "App"}>
      <div className="toggle-dark">
        <div
          className={dark ? "circle-active" : "circle"}
          onClick={toggleHandler}
        >
          <div>
            {dark ? <h4>ON</h4> : <h4>OFF</h4>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
