import './App.css';
import List from './List';
import data from "./data"
import React,{useState} from "react"

export default function App() {
  const [people,setPeople]=useState(data)
  return (
    <div className="App">
<main>
  <section className='container'>
<h3> {people.length} birthdays today</h3>
<List people={people} />
<button onClick={()=>setPeople([])}>Clear all</button>
  </section>
</main>
    </div>
  );
}

