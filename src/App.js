import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import './App.css';
import Finder from './Finder';
import UserCard from './UserCard';
import ErrorBoundary from './ErrorBoundary';
function App() {
  const [githubUser, setGithubUser] = useState('');
  const [usrs, setUsrs] = useState([]);

  const addUser = (user) => {
    if (user) {
      setUsrs((prev) => [...prev, user]);
    }
  }

  const fetchUser = () => {
    fetch('https://api.github.com/users/' + githubUser)
        .then(response =>  {
          if (response.ok) {
            return response.json();
          }
        })
        .then(user => { 
            addUser(user);
        })
        .catch((error) => {
          console.log(error);
        })
  }
  useEffect(() => {
    if (githubUser !== '') {
      fetchUser();      
    }
  },[githubUser]);
  
  return (
    <div className="App">
      <ErrorBoundary>
        <Finder setValue={setGithubUser}/>
      </ErrorBoundary>
      {usrs.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
      
    </div>
  );
}

App.propTypes = {
  githubUser: PropTypes.string,
  usrs: PropTypes.array
}
export default App;
