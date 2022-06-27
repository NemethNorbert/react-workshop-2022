import UserCard from "./UserCard";

const UserList = (props) => (
  <div>
    {props.cards.map((card) => (
      <UserCard {...card} id={card.id}/>
    ))}
  </div>
);

export default UserList;
