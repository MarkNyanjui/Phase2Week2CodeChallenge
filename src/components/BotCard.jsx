import React from 'react'

const botTypeClasses = {
    Assault: "icon military",
    Defense: "icon shield",
    Support: "icon plus circle",
    Medic: "icon ambulance",
    Witch: "icon magic",
    Captain: "icon star"
}

const BotCard = props => {
    const { bot, clickEvent , deleteBot } = props;

    function handleClick(e) {
        console.log("handleClick has been pressed")
        e.stopPropagation()
        if (typeof clickEvent === 'function') {
            clickEvent(bot)
        } else {
            console.error('No click event provided')
        }
    }

    function handleDischarge(e) {
        console.log("Red X Clicked")
        e.stopPropagation()
        if (typeof deleteBot === 'function') {
            deleteBot(bot)
        } else {
            console.error('No delete event provided')
        }
    }

    return (
        <div className='ui-column'>
            <div
                className="ui card"
                key={props.bot.id}
                onClick={handleClick}
            >
                <div className='image'>
                    <img src={props.bot.avatar_url} alt={props.bot.name} />
                </div>
                <div className='content'>
                    <div className='header'>
                        {props.bot.name}
                        <i className={botTypeClasses[props.bot.bot_class]} />
                    </div>
                    <div className='meta text-wrap'>
                        <small>{props.bot.catchphrase}</small>
                    </div>
                    <div className='extra content'>
                        <span>
                            <i className='icon heartbeat' />
                            Health: {props.bot.health}
                        </span>

                        <span>
                            <i className='icon lightning' />
                            Damage: {props.bot.damage}
                        </span>

                        <span>
                            <i className='icon shield' />
                            Armor: {props.bot.armor}
                        </span>

                        <span>
                            <div className='ui centre aligned segment basic'>
                                <button className='ui mini red button'
                                    onClick={handleDischarge}
                                >
                                    X
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