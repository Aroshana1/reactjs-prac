import React from 'react'

const Unit = ({imgUrl,name,city,position}) => {
  return (
    <div className="unit_cont">
        <img src = {imgUrl} alt = {name}/>
        <h3>{name}</h3>
        <p><span>{city}</span>
        <span>{position}</span>
        </p>

    </div>
  )
}

export default Unit