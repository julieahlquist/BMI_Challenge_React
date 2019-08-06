import React, { Component } from 'react';
import DisplayResult from './Components/DisplayResult';
import MethodSelect from './Components/MethodSelect';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      weight: '',
      height: ''
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>BMI Converter</h1>
        </div>

        <div>
          <MethodSelect 
          method={this.state.method}
          methodOption={this.methodOption}
          />
        </div>

        <div>
          <label>Weight(kg)</label>
          <input name="weight-kg" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value})} />
        </div>

        <div>
          <label>Height(cm)</label>
          <input name="height-cm" value={this.state.height} onChange={ (e) => this.setState({ height: e.target.value })} />
        </div>

        <div>
          <label>Weight(lbs)</label>
          <input name="weight-lbs" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value})} />
        </div>

        <div>
          <label>Height(inches)</label>
          <input name="height-inches" value={this.state.height} onChange={ (e) => this.setState({ height: e.target.value })} />
        </div>

        <DisplayResult
        weight={this.state.weight}
        height={this.state.height}
        />
      </div>
    );
  }
}

export default App;