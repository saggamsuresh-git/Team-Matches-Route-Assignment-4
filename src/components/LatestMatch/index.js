// import {Component} from 'react'
// import Loader from 'react-loader-spinner'

import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  console.log(latestMatchDetails)

  return (
    <div className="latest-match-container-main">
      <div className="match-ground-logo-container">
        <div className="match-ground-info">
          <p className="opponent-team-name">
            {latestMatchDetails.competing_team}
          </p>
          <p>{latestMatchDetails.date}</p>
          <p>{latestMatchDetails.venue}</p>
          <p>{latestMatchDetails.result}</p>
        </div>
        <div className="opponent-logo-container">
          <img
            src={latestMatchDetails.competing_team_logo}
            alt={`latest match ${latestMatchDetails.competing_team}`}
            className="competing-team-logo"
          />
        </div>
      </div>
      {/* <hr /> */}
      <div className="match-over-info">
        <p>First Innings</p>
        <p>{latestMatchDetails.first_innings}</p>
        <p>Second Innings</p>
        <p>{latestMatchDetails.second_innings}</p>
        <p>Man Of The Match</p>
        <p>{latestMatchDetails.man_of_the_match}</p>
        <p>Umpires</p>
        <p>{latestMatchDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
