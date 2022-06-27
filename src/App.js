import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";

function App() {
  const [cards, setCards] = useState([]);

  const onSearch = (data) => {
    setCards(cards.concat(data));
  };
  return (
    <div className="App">
      <SearchBar onSubmit={onSearch} />
      <UserList cards={cards} />
    </div>
  );
}

export default App;
