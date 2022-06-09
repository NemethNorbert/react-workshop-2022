

function Card ({login, company, name, email, avatarLink}) {

    return [
        <div className="octo-card">
            <div>
                <img src={avatarLink} className="octo-avatar" />
                <table>
                    <tr>
                        <td><b>Login : </b></td><td>{login}</td>
                    </tr>
                    <tr>
                        <td><b>Name : </b></td><td>{name}</td>
                    </tr>
                    <tr>
                        <td><b>email : </b></td><td>{email}</td>
                    </tr>
                    <tr>
                        <td><b>Company : </b></td><td>{company}</td>
                    </tr>
                </table>
            </div>
        </div>
    ]
}

export default Card;