import React from "react";
// 1.
import { GiftedChat } from "react-native-gifted-chat";
import Fire from "../components/Fire";

class Chat extends React.Component {
  // 2.
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || "Chat!"
  });
  // 3.
  state = {
    messages: []
  };

  // 1.
  componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message)
      }))
    );
  }
  // 2.
  componentWillUnmount() {
    Fire.shared.off();
  }

  get user() {
    // Return our name and our UID for GiftedChat to parse
    return {
      name: this.props.navigation.state.params.name,
      _id: Fire.shared.uid
    };
  }

  render() {
    // 4.
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
      />
    );
  }
}
export default Chat;
