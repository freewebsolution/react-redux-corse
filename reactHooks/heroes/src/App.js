import React, {useState,useEffect} from 'react';
import Hero from './components/Hero';
import axios from 'axios'
const App = () => {

  useEffect(()=> {
    console.log('effect')
    axios
    .get('http://localhost:3001/heroes')
    .then(response => {
      console.log('promise fulfilled')
      setHeroes(response.data)
    })
  } ,[])
  const [heroes,setHeroes] = useState([])
  const [newHero, setNewHero] = useState('')
  const [showAll, setShowAll] = useState(true)

  // eslint-disable-next-line no-unused-vars
  const heroesToShow = showAll ? heroes : heroes.filter(hero => hero.important === true)
  const rows = () => heroes.map(hero =>
    <Hero
     key={hero.id}
     hero={hero}
     >
    </Hero>)

    const addHero = e => {
      e.preventDefault();
      const heroObject = {
        name:newHero,
        date: new Date().toISOString(),
        important: Math.random() > 0.5,
        id: heroes.lenght + 1 
      }
      setHeroes(heroes.concat(heroObject))
      setNewHero('')
    }
    const handleHeroChange = e => {
      console.log(e.target.value)
      setNewHero(e.target.value)
    }
  return (

    <div className="App">
      <h1>Heroes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        show{showAll ? 'important' : 'all'}
      </button>
      <ul>
        {rows()}
      </ul>
    <form onSubmit={addHero}>
      <input 
      type="text"
      value={newHero}
      onChange={handleHeroChange}
      />
      <button type='submit'>Add</button>
    </form>
    </div>
  );
}

export default App;
