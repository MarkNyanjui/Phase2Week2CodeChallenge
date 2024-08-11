import React from 'react'
import BotCard from './BotCard'

function BotCollection({ bots, clickEvent , deleteBot }) {

    if (!bots || !Array.isArray(bots)) {
        return <div>Loading Bots...</div> 
    }

    const displayBotCards = bots.map(bot => {
        return <BotCard key={bot.id} bot={bot} clickEvent={clickEvent} deleteBot={deleteBot} />
});

    return (
        <div className='ui four column grid'>
            <div className='row'>
                {displayBotCards}
            </div>
        </div>
    )};
    
export default BotCollection
