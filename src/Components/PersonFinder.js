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
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("all");
  const [state, dispatch] = useReducer(personReducer, {
    noResults: false,
    data: mockData
  })


  useEffect(() => {
    const searchData = (searchTerm) => {
      // only exact matches, no partial matches yet
      if (searchTerm === "all") return mockData;
      return mockData.filter((person) => person.name === searchTerm);
    }
    if (search !== "all") {
      const results = searchData(search);
      if (search !== "all" && results.length === 0) {
        dispatch({type: "NO_RESULTS"})
      } else {
        dispatch({type: "DISPLAY_RESULTS", payload: results})
      }
    }
  }, [search])

  return (
    <>
      <div className="form-wrapper">
        <form onSubmit={(event) => {
          setSearch(query)
          event.preventDefault()
          }}>
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
