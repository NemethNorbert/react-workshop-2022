function Card(props) {
  return (
    <div className="card-container">
      <img className="avatar" src={props.avatar_url} alt="img" />
      <a href={props.html_url}>
        <div className="name">{props.name}</div>
      </a>
      <div>{props.type}</div>
      <div>{props.public_repos} Repositories</div>
      <div>{props.followers} Followers</div>
    </div>
  );
}

export default Card;
