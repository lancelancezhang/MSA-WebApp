import React, { Component } from "react";
import Videos from "./components/videos";

class App extends Component {
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  state = {
    videos: [],
  };

  componentDidMount() {
    fetch("https://thereportoftheweek-api.herokuapp.com/reports")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ videos: data });
      })
      .catch(console.log);
  }
  render() {
    return <Videos videos={this.state.videos} />;
  }
}

export default App;
