import React, {useState, useEffect} from 'react';
import {PersonList} from './';
import {mockData} from '../mockData';

const PersonFinder = () => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {

  }, [query])

  return (
    <div className="form-wrapper">
      <form onSubmit={""}>
        <label name="search"></label>
        <input
          type="text"
          name="search"
          placeholder="Type a name..."
          value={query}
          onChange={event => setQuery(event.target.value)}
        ></input>
      </form>
    </div>
  )
}

export default PersonFinder;
