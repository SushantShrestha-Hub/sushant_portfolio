import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.text())
      .then(data => setMsg(data));
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <h1 className="text-blue-500 text-3xl font-bold">{msg}</h1>
    </div>
  );
}

export default App;
