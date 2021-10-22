import React, {useEffect, useState} from 'react';

function App() {

    const [formData, setFormData] = useState({name: '', email:'', age:'', about:''});
    const forceUpdate = (changeObject) => setFormData({...formData, ...changeObject});
    window.forceUpdate = forceUpdate;

    useEffect(() =>{
        console.log(formData);
    }, [formData]);

  return (
    <div className="App">
      please see the console output for state changes
    </div>
  );
}

export default App;
