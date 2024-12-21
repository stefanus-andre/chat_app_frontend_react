import { Component } from "react";
import { connect, sendMsg } from "../api";
import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    };
    this.send = this.send.bind(this); // Bind `send` method
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message:", msg);
      this.setState((prevState) => ({
        chatHistory: [...prevState.chatHistory, msg]
      }));
    });
  }

  send() {
    console.log("Hello");
    sendMsg("Hello");
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <button onClick={this.send}>Submit</button>
      </div>
    );
  }
}

export default App;
