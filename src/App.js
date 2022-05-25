import { Component } from "react";


class App extends Component{

  state = {
    topic: '',
  };

  handleFormSubmit = topic => {
    this.setState({ topic })
  };

  render() {

    return (
      <>
        
      </>
    )
  };
}

export default App;