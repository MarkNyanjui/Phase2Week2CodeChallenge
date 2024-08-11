import React, { useState, useEffect } from 'react'
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from './BotSpecs'


function BotsPage() {
  const [botCollection, setBotCollection] = useState([]);
  const [filteredCollection, setFilteredCollection] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [botSpecs, setBotSpecs] = useState({});
  const [collectionVisible, setCollectionVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(bots => {
        console.log('Bots Fetched', bots)
        setBotCollection(bots);
        setFilteredCollection(bots);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching bot data:', error);
        setIsLoading(false);
      })
  }, []);

  const enlistBot = (bot) => {
    const newCollection = filteredCollection.filter(card => card.bot_class !== bot.bot_class);
    setFilteredCollection(newCollection);
    setYourBotArmy([...yourBotArmy, bot]);
    setCollectionVisible(true)
  }

  const removeFromArmy = (bot) => {
    const newBotArmy = yourBotArmy.filter(card => card.id !== bot.id);
    const armyClasses = newBotArmy.map(bot => bot.bot_class)
    const newCollection = botCollection.filter(card => !armyClasses.includes(bot.bot_class));
    console.log('newCollection', newCollection)

    setYourBotArmy(newBotArmy);
    setFilteredCollection(newCollection);
  }

  const deleteBotPermanently = (bot) => {
    const newBotCollection = botCollection.filter(card => card !== bot);
    const newFilteredCollection = filteredCollection.filter(card => card !== bot);
    const newBotArmy = yourBotArmy.filter(card => card !== bot)

    setBotCollection(newBotCollection);
    setFilteredCollection(newFilteredCollection);
    setYourBotArmy(newBotArmy);

    fetch(`http://localhost:3000/bots/${bot.id}`,
      {
        method: 'DELETE',
      }).then(response => response.json())
      .then(result => console.log(result))
  }

  const displayBotSpecs = (bot) => {
    setCollectionVisible(false);
    setBotSpecs(bot);
  }

  const displayBotCollection = () => {
    setCollectionVisible(true);
  }
console.log("Filtered collection:", filteredCollection);

  return (
    <div>
      <YourBotArmy
        bots={yourBotArmy}
        clickEvent={removeFromArmy}
        deleteBot={deleteBotPermanently}
      />
      {isLoading ? (
        <p>Loading Bots...</p>

      ) : collectionVisible ? (
       <BotCollection
          bots={filteredCollection}
          clickEvent={enlistBot}
          deleteBot={deleteBotPermanently}
        />
      ) : ( 
      <BotSpecs
          bot={botSpecs}
          back={displayBotCollection}
          enlistBot={enlistBot}
        />
      )}
    </div>
  )
}

export default BotsPage