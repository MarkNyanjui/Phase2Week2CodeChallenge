import React from 'react'

const botTypeClasses = {
    Assault: "icon military",
    Defense: "icon shield",
    Support: "icon plus circle",
    Medic: "icon ambulance",
    Witch: "icon magic",
    Captain: "icon star"
}


const BotSpecs = props => {
    return (
        <div className='ui segment'>
            <div className='ui two column'>
                <div className='row'>
                    <div className='column'>
                        <img
                            alt={props.bot.name}
                            className='ui medium circular image border'
                            src={props.bot.avatar_url}
                        />
                    </div>
                    <div className='four wide column'>
                        <h2>{props.bot.name}</h2>
                        <p>
                            <strong>Catchphrase: </strong>
                            {props.bot.catchphrase}
                        </p>
                        <strong>
                            Class: {props.bot.bot_class}
                            <i className={botTypeClasses[props.bot.bot_class]} />
                        </strong>
                        <br />
                        <div className='ui segment'>
                            <div className='ui three column centred grid'>
                                <div className='row'>
                                    <div className='column'>
                                        <strong>Health: </strong>
                                        {props.bot.health}
                                    </div>
                                    <div className='column'>
                                        <strong>Damage: </strong>
                                        {props.bot.damage}
                                    </div>
                                    <div className='column'>
                                        <strong>Armor: </strong>
                                        {props.bot.armor}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className='ui button fluid'
                            onClick={() =>
                                props.back()
                            }
                        >
                            Back to Collection
                        </button>
                        <button
                            className='ui button fluid'
                            onClick={() =>
                                props.enlistBot(props.bot)
                            }
                        >
                            Enlist Bot
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BotSpecs
