import logo from "./logo.svg";
import "./App.css";
import { Calendar } from "antd";
import { GithubOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <GithubOutlined />
        </p>
        <Calendar />
      </header>
    </div>
  );
}

export default App;
