import React from 'react'

const Card = (props) => {
  console.log(props.item)
  return (
    <div className="card">
      <div className="image--container">
        <img src={props.item.imageUrl} />
      </div>
      <div className="card--description">
        <div className="description--location">
          <span>📍{props.item.location}</span>
          <a href="#google-maps">View on Google Maps</a>
        </div>
        <h1>{props.item.title}</h1>
        <p className="timespan">
          {props.item.startDate} {props.item.endDate}
        </p>
        <p>{props.item.description}</p>
      </div>
    </div>
  )
}

export default Card
