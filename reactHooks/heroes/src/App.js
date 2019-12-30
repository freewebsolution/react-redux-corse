import React, {useState} from 'react';
import Hero from './components/Hero';

const App = () => {
  const heroes = [
    {
      id: 1,
      name: 'Hulk',
      date: '2019-12-30t17:30:31.098z',
      important: true
    },
    {
      id: 2,
      name: 'Spiderman',
      date: '2019-12-30t17:30:31.098z',
      important: true
    },
    {
      id: 3,
      name: 'Superman',
      date: '2019-12-30t17:30:31.098z',
      important: true
    }
  ]
  const [Eroi,setEroi] = useState(heroes)
  const [newHero, setNewHero] = useState('')
  const [showAll, setShowAll] = useState(true)

  const heroesToShow = showAll ? heroes : heroes.filter(hero => hero.important === true)
  const rows = () => Eroi.map(hero =>
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
      setEroi(heroes.concat(heroObject))
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
