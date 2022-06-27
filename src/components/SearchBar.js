import React, { useState } from "react";
import * as axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Searchbar(props) {
  const [user, setUser] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${user}`);
    props.onSubmit(resp.data);
    setUser("");
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="container h-50">
        <div className="row h-50 justify-content-center align-items-center"></div>
        <InputGroup className="col-6">
          <FormControl
            placeholder="Type a github username.."
            aria-label="Search"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <Button type="submit" variant="info">
            Search
          </Button>
        </InputGroup>
      </div>
    </form>
    /*
    <form onSubmit={handleSearch}>
      <div classNameName="form-control">
        <input
          type="text"
          placeholder="search user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </div>
    </form>
    */
  );
}

export default Searchbar;
