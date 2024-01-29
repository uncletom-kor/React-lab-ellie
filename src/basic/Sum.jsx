import React, { useState, useEffect } from 'react';

function App() {
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let total = 0;
    for (let i = 1; i <= 10; i++) {
      total += i;
    }
    setSum(total);
  }, []);

  return (
    <div>
      <input type="text" readOnly value={sum} />
    </div>
  );
}

export default App;