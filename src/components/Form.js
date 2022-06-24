import axios from "axios";
import { useState } from "react";

export default function Form(props) {
    const [username, setUsername] = useState('')
    const [error, setError] = useState('');
  
    const handleSubmit = event => {
      event.preventDefault()
  
      axios
        .get(`https://api.github.com/users/${username}`)
        .then(resp => {
          props.onSubmit(resp.data)
          setUsername('')
        })
        .catch(e => {
            setError(e);
        })
    }
  
    if (error) {
        throw new Error(error);
    } else {
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
}