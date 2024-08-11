import React from 'react'

const botTypeClasses = {
    Assault: "icon military",
    Defense: "icon shield",
    Support: "icon plus circle",
    Medic: "icon ambulance",
    Witch: "icon magic",
    Captain: "icon star"
}

function BotCard({ bot, clickEvent, deleteBot }) {

    const handleClick = (e) => {
        console.log("handleClick has been pressed")
        e.stopPropagation()
        clickEvent(bot)
    }

    const handleDischarge = (e) => {
        console.log("handleDischarge has been pressed")
        e.stopPropagation()
        deleteBot(bot)
    }

    return (
        <div className='ui-column'>
            <div
                classname="ui card"
                key={props.bot.id}
                onClick={handleClick}
            >
                <div className='image'>
                    <img src={bot.avatar_url} alt={bot.name} />
                </div>
                <div className='content'>
                    <div className='header'>
                        {bot.name}
                        <i className={botTypeClasses[bot.bot_class]} />
                    </div>
                    <div className='meta'>
                        <small>{bot.catchphrase}</small>
                    </div>
                    <div className='extra content'>
                        <span>
                            <i className='icon heartbeat' />
                            Health: {bot.health}
                        </span>

                        <span>
                            <i className='icon lightning' />
                            Damage: {bot.damage}
                        </span>

                        <span>
                            <i className='icon shield' />
                            Armor: {bot.armor}
                        </span>

                        <span>
                            <div className='ui centre aligned'>
                                <button className='ui button red'
                                    onClick={handleDischarge}
                                >
                                    Discharge
                                </button>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BotCard