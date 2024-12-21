import { Component } from "react";
import { connect, sendMsg } from "../api";
import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";

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

  send(event) {
    if(event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }

  render() {
    return (
      <div className="App">
      <Header />
      <ChatHistory chatHistory={this.state.chatHistory} />
      <ChatInput send={this.send} />
    </div>
    );
  }
}

export default App;
