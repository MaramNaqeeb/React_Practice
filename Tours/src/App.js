import './App.css';
import Loading from './Loading';
import Tours from './Tours';
import React,{useEffect, useState} from "react"

const url = 'https://course-api.com/react-tours-project'

export default function App() {
  const[tours,setTours]=useState([])
  const [loading,setLoading]=useState(true)


  const removeTour=(id)=>{
const newTours=tours.filter((tour)=>tour.id!==id)
setTours(newTours)
// setTours(tours.filter((tour)=>tour.id!==id))   we can write it these way also

  };

  const removeAll=()=>{
    setTours([])
  }

  const fetchTours=async()=>{
    setLoading(true);

    try{
      const response=await fetch(url);
      const tours=await response.json();
      setLoading(false);
      setTours(tours);
    }catch(error){
      setLoading(false);
      console.log(error);

    }
  }
    useEffect(() => {
      fetchTours()
    }, [])

    if (loading) {
      return (
        <main>
          <Loading />
        </main>
      )
    }
    if(tours.length==0){
return(
      <main>
        <div className='title'>

          <h2>no tours</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
)
    }

return(
  <main>
    <Tours tours={tours} removeTour={removeTour} removeAll={removeAll}/>
  </main>
)

}
