import React, { useEffect, useContext, useState } from "react"
import { ProfileContext } from "./ProfileProvider.js"


export const ProfileList = () => {
    const { profile, getProfile } = useContext(ProfileContext)
    // const [myEvents, setMyEvents]= useState([])
    useEffect(() => {
        getProfile()
    }, [])
    // useEffect(()=>{
    //     setMyEvents(profile.events)
    // },[profile])

    return (
        <article className="profile">
            <header>
                <h1>Your Profile</h1>
            </header>
            <section className="profile__info">
                <header className="profile__header">
                    <h3>Your Info</h3>
                </header>
                <div className="profile__name">
                    Welcome: {profile.gamer && profile.gamer.user.first_name} {profile.gamer && profile.gamer.user.last_name}
                </div>
                <div className="profile__username">Username: {profile.gamer && profile.gamer.user.username}</div>
                <div className="profile__bio">About you: {profile.gamer && profile.gamer.bio}</div>
            </section>
            <section className="profile__registrations">
                <header className="registrations__header">
                    <h3>Your Events</h3>
                </header>
                {profile.events&&<div className="registrations">
                    {
                        profile.events.map(event => {
                            return <div key={event.id} className="registration">
                                <div className="registration__game">{event.game.title}</div>
                                <div>{event.location}</div>
                                <div>
                                    {event.event_time}
                                </div>
                            </div>
                        })
                    }
                </div>}
            </section>
        </article>
    )
}

