import React from 'react';
import PropTypes from 'prop-types';

function UserCard({user}) {
    const [visible, setVisible] = React.useState(true);

    const closeCard = () => {
        setVisible(false);
    }
    if (!visible) {
        return null;
    }
    else {
        return(
            
            <div className="card">
                <button className="close" onClick={closeCard}>&times;</button>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <img alt="profile" className="profile" src={user.avatar_url} />
                            </td>
                            <td>
                                <b>Id:</b> {user.id} <br/>
                                <b>User name:</b> {user.name} <br />
                                <b>Email address:</b> {user.email}<br/>
                                <b>Location:</b> {user.location} <br />
                                <b>Company:</b> {user.company}<br/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
UserCard.propTypes = {
    user: PropTypes.object
}

export default UserCard;