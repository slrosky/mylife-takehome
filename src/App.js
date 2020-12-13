import React, { useState, useEffect } from 'react';
import { fetchAllData } from './api/rickmorty-api.js';
import './App.css';
import DataList from './components/DataList'
import Filter from './utils/Filter'
import Header from './components/Header';



function App() {
  //set the items of the displayed list
  const [items, setItems] = useState([])
  // set the selection of the tag type to filter the content
  const [selectedFilter, setSelectedFilter] = useState('')

  useEffect(() => {
    // fetching and mounting the data from the  api
    const fetchData = async () => {
      const result = await fetchAllData();
      // clean up any potential duplicates that exist within the content property
      const removeDuplicates = (result, prop) => {
        let newArray = [];
        let lookupObject = {};

        for (var i in result) {
          lookupObject[result[i][prop]] = result[i];
        }

        for (i in lookupObject) {
          newArray.push(lookupObject[i]);
        }
        return newArray;
      }
      const uniqueArray = removeDuplicates(result, "content");
      setItems(uniqueArray);
    }
    fetchData();
  }, [selectedFilter])

  return (
    <div className="App">
      <Header />
      <Filter onClick={(e) => setSelectedFilter(e.target.value)} setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter} />
      <DataList items={items} selectedFilter={selectedFilter} />
    </div>
  );
}

export default App;
