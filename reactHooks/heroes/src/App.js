import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import heroService from './service/heroService';

const App = () => {

  useEffect(() => {
    console.log('effect')
    heroService.getAll()
      .then(initialHeroes => {
        setHeroes(initialHeroes)
      })
  }, [])
  const [heroes, setHeroes] = useState([])
  const [newHero, setNewHero] = useState('')
  const [showAll, setShowAll] = useState(true)

  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/heroes/${id} `
    const hero = heroes.find(n => n.id === id)
    const changedHero = { ...hero, important: !hero.important }
    heroService.update(id, changedHero)
      .then(returnedHero => {
        setHeroes(heroes.map(hero => hero.id !== id ? hero : returnedHero))
      })
      .catch(error => {
        alert(
          ` l'eroe ${hero.name} non esiste`
        )
        setHeroes(heroes.filter(h => h.id !== id))
      })
  }
  // eslint-disable-next-line no-unused-vars
  const heroesToShow = showAll ? heroes : heroes.filter(hero => hero.important === true)
  const rows = () => heroesToShow.map(hero =>
    <Hero
      key={hero.id}
      hero={hero}
      toggleImportance={() => toggleImportanceOf(hero.id)}
      deleteHero={() => deleteHero(hero.id, hero.name)}
    >
    </Hero>)

  const addHero = e => {
    e.preventDefault();
    const heroObject = {
      name: newHero,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: heroes.lenght + 1
    }
    heroService.create(heroObject)
      .then(returnedHero => {
        setHeroes(heroes.concat(returnedHero))
        setNewHero('')
      })

  }
  const handleHeroChange = e => {
    console.log(e.target.value)
    setNewHero(e.target.value)
  }

  const deleteHero = (id, name) => {
    const r = window.confirm(` Sei sicuro di voler eliminare l'eroe ${name} ?`)
    if (r === false) {
      return
    } else {
      heroes.filter(h => h.id === id)
      heroService
        .deleteHero(id)
      window.location.reload()
    }
  }
  return (
    <div className="container">
      <div className="row">
        <h1>Heroes</h1>
        <button className='waves-effect waves-light btn-small' onClick={() => setShowAll(!showAll)}>
          show{showAll ? 'important' : 'all'}
        </button>
        <ul className='collection'>
          {rows()}
        </ul>
        <form onSubmit={addHero} className='col s12'>
          <div className="input-field col s6">
            <input
              type="text"
              value={newHero}
              onChange={handleHeroChange}
              required
            />
            <label >Inserisci il nome ...</label>
          </div>

          <button className='btn-floating  waves-effect waves-light green' type='submit'><i className="material-icons">add</i></button>

        </form>
      </div>

    </div>
  );
}

export default App;
