import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getGames = async () => {
    
    setLoading(true);

    const req = await fetch('https://api.imgflip.com/get_memes');

    const res = await req.json();

    if (req.ok) {
      setLoading(false);
      return setData(res.data.memes);
    }
  }

  useEffect(() => {
    getGames();
  }, [])


  return (
    <main className='container'>
      <section className='row'>
        <h1 className='text-center'>Memes</h1>

        {loading?<div>Loading...</div>:data.map(e=>(
          <div className="col" style={{marginTop: '20px'}} key={e.id}  data-aos="flip-up" data-aos-duration="1300">
            <h2 className='text-center'>{e.name}</h2>
            <img src={e.url} style={{maxHeight: '350px'}}/>
          </div>
        ))}
      </section>
    </main>
  )
}

export default App
