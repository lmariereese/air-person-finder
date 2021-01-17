import React, {useState, useEffect} from 'react';
import {PersonCard} from './';
import {mockData} from '../mockData';

const personReducer = (state, action) => {

}

const PersonFinder = () => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState(mockData);

  useEffect(() => {

  }, [query])

  return (
    <div>
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
    <div className="list-wrapper">
      {data.map(person => {
        return (
          <PersonCard person={person} />
        )
      })}
      </div>
    </div>
  )
}

export default PersonFinder;
