import React, { Component } from "react";

class BreedSelector extends Component {
  state = { breeds: [], selectedBreed: "All breeds" };

  componentDidMount() {
    this.start();
    //console.log(this.props);
  }

  async start() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    const breeds = Object.keys(data.message);
    this.setState({ breeds });
  }

  handleBreedChange = (e) => {
    this.setState({ selectedBreed: e.target.value });
  };

  render() {
    return (
      <div>
        <div style={{ paddingBottom: 50 }}>
          <h2>Select the breed you want to see!</h2>
          {
            //<select onChange={this.handleBreedChange}>
          }
          <div
            style={{ position: "-webkit-sticky", position: "sticky", top: 0 }}
          >
            <select
              className="custom-select custom-select-lg mb-3"
              style={{ position: "sticky" }}
              onChange={(event) => this.props.onChange(event.target.value)}
            >
              {
                //console.log(this.state.selectedBreed)
              }
              <option>All breeds</option>
              {this.state.breeds.map((breed) => {
                return <option key={breed}>{breed}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default BreedSelector;
