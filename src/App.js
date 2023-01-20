import React from "react";
import "./App.css";
import axios from "axios";
class App extends React.Component {
  state = { newAdvice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({newAdvice:advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { newAdvice } = this.state;
    return (
       <div className="app">
        <div className="card">
            <h1 className="heading">{newAdvice}</h1>
            <button className="button" onClick={this.fetchAdvice}>
                <span>Give me advice!</span>
            </button>
        </div>
       </div>
    );
  }
}

export default App;
