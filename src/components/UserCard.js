import React, { useContext } from 'react';
import PropTypes, { func } from 'prop-types';
import ThemeContext from '../contexts/ThemeContext';
import './UserCard.css';


function UserCard({id, Name, Company, Image, Remove}){
    const theme = useContext(ThemeContext);

    function removeCard(){
        Remove(id);
    }
return(
    <div className={'User '+ theme.theme}>
        <div className='image' ></div>
        <button onClick={removeCard}>x</button>    
        <img src={Image} height="100" width="100" alt={Name}/>        
        <div className='basic_information'>
            {Name}
            <div>{Company}</div> 
        </div>
        
    </div>
);
}

UserCard.prototypes = {
    id: PropTypes.number,
    Name: PropTypes.string,
    Company: PropTypes.string,
    Image: PropTypes.string,
    Remove: PropTypes.func,
};

export default UserCard;