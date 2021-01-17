import React, {useState, useEffect, useReducer} from 'react';
import {PersonCard} from './';
import {mockData} from '../mockData';

const personReducer = (state, action) => {
  switch (action.type) {
    case "DISPLAY_ALL": {
      return {...state, noResults: false, data: action.payload}
    }
    case "DISPLAY_RESULTS": {
      return {...state, noResults: false, data: action.payload}
    }
    case "NO_RESULTS": {
      return {...state, noResults: true, data: []}
    }
    default: throw new Error();
  }
}

const PersonFinder = () => {
  const [search, setSearch] = useState("");
  const [state, dispatch] = useReducer(personReducer, {
    noResults: false,
    isLoading: false,
    data: mockData
  })

  useEffect(() => {
    const searchData = (searchTerm) => {
      if (searchTerm === "") return mockData;
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return mockData.filter((person) => {
        if (person.name.toLowerCase() === lowerCaseSearchTerm) return true;
        if (person.name.toLowerCase().includes(lowerCaseSearchTerm)) return true;
        return false;
      });
    }
    const results = searchData(search);
    if (search !== "" && results.length === 0) {
      dispatch({type: "NO_RESULTS"})
    } else {
      dispatch({type: "DISPLAY_RESULTS", payload: results})
    }
  }, [search])

  console.log(state.data)
  return (
    <>
      <div className="form-wrapper">
        <form>
          <label name="search"></label>
          <input
            type="text"
            name="search"
            placeholder="Type a name..."
            value={search}
            onChange={event => setSearch(event.target.value)}
          ></input>
        </form>
      </div>
      <div className="list-wrapper">
        {state.isLoading && <div>Loading...</div>}
        {state.noResults ? (
          <div>
            <p>No results. Please try another name.</p>
          </div>
        ) : (
          <>
          {state.data.map(person => {
            return (
              <PersonCard person={person} key={person.id}/>
            )
          })}
          </>
        )
      }
        </div>
    </>
  )
}

export default PersonFinder;
