import React from 'react'
import BotCard from './BotCard'

function BotCollection({ botCollection, enlistBot, deleteBot }) {
    const displayBotCards = botCollection.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            clickEvent={enlistBot}
            deleteBot={deleteBot}
          />
        ));

    return (
        <div>
            <div className='ui grid container'>
                {displayBotCards}
            </div>
        </div>
    )};
    
export default BotCollection