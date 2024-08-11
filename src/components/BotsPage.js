import React, {useState, useEffect} from 'react'
import BotCard from './BotCard'
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


function BotsPage() {
    const [botCollection, setBotCollection] = useState([]);
    const [filteredCollection, setFilteredCollection] = useState([]);
    const [yourBotArmy, setYourBotArmy] = useState([]);
    const [botSpecs, setBotSpecs] = useState([]);
    const [collectionVisible, setCollectionVisible] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3000/bots')
    //     .then(response => response.)

  return (
    <div>BotsPage</div>
  )
}

export default BotsPage