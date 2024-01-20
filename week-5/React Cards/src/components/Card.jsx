import React from 'react'

export default function Card({ person }) {
    const {name,description,interests,twitter,linkedin}=person
    return (
        <div className="card">
            <h1>{name}</h1>
            <h4>{description}</h4>
            <h2>Interests</h2>
            <p>{interests[0]}</p>
            <p>{interests[1]}</p>
            <p>{interests[2]}</p>
            <div className="socials">
            <a href={linkedin} target='blank'>LinkedIn</a>
            <a href={twitter} target='blank'>Twitter</a>
            </div>
      </div>
  )
}
