import React from 'react';

function MethodSelect(props) {
  return (
    <div>
      <select id="method" value={props.method} onChange={ (e) => this.setState({ method: e.target.value })}>
        <option value="metric">Metric System</option>
        <option value="imperial">Imperial System</option>
      </select>
    </div>
  )
}

export default MethodSelect