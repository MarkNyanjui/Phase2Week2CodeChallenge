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
        <div className='ui segment inverted olovr bot-army'>
            <div className='ui five column grid'>
                <div className='row bot-army-row'>
                {displayBotCards}
            </div>
        </div>
        </div>
    )
}
export default YourBotArmy