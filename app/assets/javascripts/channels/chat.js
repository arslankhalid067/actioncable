App.chat = App.cable.subscriptions.create("ChatChannel", {
  connected: function() {
    console.log("Connected to channel");
  },
  disconnected: function() {
    console.log("Disconnected to channel");
  },
  received: function(data) {
    var messages= $('#chatbox');
    messages.append(data['message']);
    messages.scrollTop(messages[0].scrollHeight);
  }
});
  