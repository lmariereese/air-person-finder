import {mockData} from "../mockData";

const searchData = (search) => {
  if (search === "") return mockData;
  const lowerCaseSearchTerm = search.toLowerCase();
  return mockData.filter((person) => {
    if (person.name.toLowerCase() === lowerCaseSearchTerm) return true;
    if (person.name.toLowerCase().includes(lowerCaseSearchTerm)) return true;
    return false;
  });
}

export default searchData;
