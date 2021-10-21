import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [formData, setFormData] = useState({name: '', email:'', age:'', about:''});

    useEffect(() =>{
        console.log(formData);
    }, [formData]);

    const handleChange = e => {
        setFormData({...formData, [e.target.id]: e.target.value});
    };

    const handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
    };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter name" onChange={handleChange}/>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" onChange={handleChange} />

          <label htmlFor="age">Age:</label>
          <input type="number" id="age" placeholder="Enter your age" onChange={handleChange} />

          <label htmlFor="about">About me:</label>
          <textarea cols="50" rows="20" id="about" onChange={handleChange}>
          </textarea>

          <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default App;
