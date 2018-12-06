import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AboutPage from './component/AboutPage';
class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul> {/*//define and then give it a hyperlink */}
            <li>
            <Link to="/">Home</Link>
            </li>
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
        <Switch>
        <Route path="/" exact component={() => <h1>home page</h1>} />
        <Route path="/about" component={() => <h1>about page</h1>} />
        <Route path="/about" component={this.AboutPage}/>
        <Route path="/users/:userid" component={({match}) => {
          return <h1> hello user {match.params.userid}</h1>
        }}/>
        <Route path="/users" component={() => <h1>users page</h1>} />
        
        <Route path="/news" component={() => <h1>news page</h1>} />
        <Route component={() => <h1>not found</h1>}/>
        </Switch>
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
