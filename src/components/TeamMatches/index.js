import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import './index.css'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamMatch: [], isLoading: true, team: ''}

  componentDidMount() {
    this.getTeamDetails()
    // console.log('Hello')
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({team: `${id}`})
    console.log(id)
    const teamDetails = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const details = await teamDetails.json()
    // console.log(details)
    // console.log(details.latest_match_details)
    const updateTeamDetails = {
      teamBannerUrl: details.team_banner_url,
      latestMatchDetails: details.latest_match_details,
      recentMatches: details.recent_matches,
    }

    this.setState({
      teamMatch: updateTeamDetails,
      isLoading: false,
    })
  }

  render() {
    // console.log('first')
    const {teamMatch, isLoading, team} = this.state

    if (isLoading) {
      return (
        <div testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      )
    }

    return (
      <div className={`team-matches-container ${team}`}>
        <div>
          <img
            src={teamMatch.teamBannerUrl}
            alt="team banner"
            className="team-banner-img"
          />
        </div>
        <div>
          <p>Latest Matches</p>
          <div className="latest-match-container">
            <LatestMatch latestMatchDetails={teamMatch.latestMatchDetails} />
          </div>
        </div>
        <ul className="recent-matches-container">
          {teamMatch.recentMatches.map(eachMatch => (
            <MatchCard
              recentMatch={eachMatch}
              key={eachMatch.id}
              color={teamMatch.latestMatchDetails}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
