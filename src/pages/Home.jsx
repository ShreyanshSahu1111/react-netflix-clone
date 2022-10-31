import React from 'react'
import Main from '../components/Main';
import Row from '../components/Row';
import { genreArray } from '../utils/genre';

const Home = () => {
  return (
    <>
      <Main />

        {genreArray.map((item, index)=>(
          <Row title={item["name"]} rowId={item["id"]} key={index} />
        ))}
    </>
  )
}

export default Home