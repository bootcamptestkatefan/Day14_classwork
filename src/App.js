import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/users">Users</Link>
            </li>
            <li>
            <Link to="/news">News</Link>
            </li>
          </ul>
        </nav>
        <hr/>
        <switch>
        <Route path="/" exact component={() => <h1>home page</h1>} />
        <Route path="/about" component={"About Page"} />
        <Route path="/users" component={() => <h1>users page</h1>} />
        <Route path="/news" component={() => <h1>news page</h1>} />

        </switch>
      </div>
    );
  }
}
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
