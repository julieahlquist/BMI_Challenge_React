import React from 'react';

function MethodSelect(props) {
  return (
    <div>
      <select id="method" value={props.method} onChange={props.methodOption}>
        <option value="metric">Metric System</option>
        <option value="imperial">Imperial System</option>
      </select>
    </div>
  )
}

export default MethodSelect