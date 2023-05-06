import { useState } from 'react';

function Form(props) {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {};
    const handleSubmit = (event) => {};

    
    const { name, email, message } = formState;

    return (
        <form onSubmit={handleSubmit} >
        <label>Name:
          <input 
          type="text" 
          name="name"
          onChange={handleChange} 
          value={name}
          />

        </label>
        <label>Email:
          <input 
          type="text" 
          name="email"
          onChange={handleChange} 
          value={email} />
        </label> 
        <label>Message:
          <textarea 
          type="text" 
          name="message"
          onChange={handleChange} 
          value={message} ></textarea>
        </label>  
        <input type="submit" value="Send Message"/>
      </form>
    )

}

export default Form;