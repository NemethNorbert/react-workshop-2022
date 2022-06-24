import PropTypes from 'prop-types';

async function getUser(Name){
    fetch('https://api.github.com/users/' + Name).then(resp => resp.json())
    .then(data => { 
        console.log(data);      
      return Promise.resolve(data);
    });
}

getUser.prototypes = {
    Name: PropTypes.string,
};

export default getUser;