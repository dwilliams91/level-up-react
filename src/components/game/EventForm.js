import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import {GameContext} from "./GameProvider"
import { EventContext} from "./EventProvider"

export const EventForm = (props) => {
    const history = useHistory()

    const {games, getGames}=useContext(GameContext)
    const {createEvent}=useContext(EventContext)
    const [currentEvent, setEvent] = useState({})

    useEffect(() => {
        getGames()
    }, [])


    const changeEventState = (domEvent) => {
        const newEventState = Object.assign({}, currentEvent)
        currentEvent[domEvent.target.name] = domEvent.target.value
        setEvent(currentEvent)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Schedule New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameId">Game: </label>
                    <select name="gameId" className="form-control"
                        value={ currentEvent.gameId }
                        onChange={ changeEventState }>
                        <option value="0">Select a game...</option>
                        {
                            games.map(game => (
                                <option value={game.id}>{game.title}</option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location: </label>
                    <input type="text" name="location" required autoFocus className="form-control"
                        value={currentEvent.location}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="event_time">When : </label>
                    <input type="datetime-local" name="event_time" required autoFocus className="form-control"
                        value={currentEvent.event_time}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>
            {/* Create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const event={
                        gameId: currentEvent.gameId,
                        location: currentEvent.location,
                        event_time: currentEvent.event_time
                    }
                    createEvent(event)
                        .then(() => props.history.push("/events"))
                }
            }

                className="btn btn-primary">Create Event</button>
        </form>
    )
}