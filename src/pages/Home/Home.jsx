import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
export default function Home() {
  const [category , setCatagry] = useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu catagry={category} setCatagry={setCatagry}/>
      <FoodDisplay category={category}/>
    </div>
  )
}
