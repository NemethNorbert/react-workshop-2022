import axios from 'axios';
import PropTypes from 'prop-types';
import {useState} from 'react';

function Form({onSubmit}) {
    const [username, setUsername] = useState('')
  
    const handleSubmit = event => {
      event.preventDefault()
  
      axios
        .get(`https://api.github.com/users/${username}`)
        .then(resp => {
          onSubmit(resp.data)
          setUsername('')
        })
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
          placeholder="GitHub username"
          required
        />
        <button type="submit">Add card</button>
      </form>
    )
}

Form.propTypes = {
    onSubmit: PropTypes.func
};

export default Form;