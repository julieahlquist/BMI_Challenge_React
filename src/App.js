import React, { Component } from 'react';
import DisplayResult from './Components/displayResult';

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
          <select id="method">
            <option value="metric">Metric System</option>
            <option value="imperial">Imperial System</option>
          </select>
        </div>

        <div>
          <label>Weight(kg)</label>
          <input name="weight" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value})} />
        </div>

        <div>
          <label>Height(cm)</label>
          <input name="height" value={this.state.height} onChange={ (e) => this.setState({ height: e.target.value })} />
        </div>

        <div>
          <label>Weight(lbs)</label>
          <input name="weight" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value})} />
        </div>

        <div>
          <label>Height(inches)</label>
          <input name="height" value={this.state.height} onChange={ (e) => this.setState({ height: e.target.value })} />
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