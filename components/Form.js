import { useState } from 'react';
import styles from '@/styles/Form.module.css'
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
        <form onSubmit={handleSubmit} className={styles.form} >

        <label htmlFor='name' >Name:</label>
          <input 
          id="name"
          type="text" 
          name="name"
          onChange={handleChange} 
          value={name}
          />
        <label htmlFor='email' >Email:
        </label> 
          <input 
          id="email"
          type="text" 
          name="email"
          onChange={handleChange} 
          value={email} />
        <label htmlFor='message' >Message:
            </label>  
          <textarea 
          id="message"
          type="text" 
          name="message"
          onChange={handleChange} 
          value={message} ></textarea>
        <input type="submit" value="Send Message"/>
      </form>
    )

}

export default Form;