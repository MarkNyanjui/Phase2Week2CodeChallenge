import React from 'react'
import BotCard from './BotCard'

function YourBotArmy( props )  {
    const displayBotCards = props.bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            clickEvent={props.removeBot}
            deleteBot={props.deleteBot}
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