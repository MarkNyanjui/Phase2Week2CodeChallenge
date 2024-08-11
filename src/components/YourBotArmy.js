import React from 'react'
import BotCard from './BotCard'

function YourBotArmy({ bots, removeBot, deleteBot }) {
    const displayBotCards = bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            clickEvent={removeBot}
            deleteBot={deleteBot}
          />
        ));

    return (
        <div>
            <div className='ui grid container'>
                {displayBotCards}
            </div>
        </div>
    )
}
export default YourBotArmy