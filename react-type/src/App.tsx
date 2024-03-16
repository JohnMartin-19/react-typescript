/* eslint-disable no-const-assign */
import React,{FC, useState} from 'react';

import './App.css';

type  AppProps = {
  sendSearchQuery?(): void;
}

const App: FC<AppProps> = ({sendSearchQuery = () => undefined}) => {
  const [searchValue,setSearchValue] =useState<string>()

  const onSearchInput = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue = (event.target.value)
  }
  
  const search = () =>{
    sendSearchQuery()
  }
  return (
    <div >
      <input value = {searchValue} onChange={onSearchInput} type="text" name='serach'/>
      <button onClick={search}>Search</button>
    </div>
  );
}

export default App;
