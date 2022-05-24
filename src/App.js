import { Component } from "react";

import Searchbar from "components/Searchbar";
import ImageGallery from "components/ImageGallery";

class App extends Component{

  state = {
    image: [],
  };

  handleFormSubmit = image => {
    this.setState({ image })
  };

  render() {
    const { image } = this.state;
    const { handleFormSubmit } = this;
    return (
      <>
        <Searchbar onSubmit={handleFormSubmit} />
        <ImageGallery images={image} />
      </>
    )
  }

}

export default App;