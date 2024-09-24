// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatch} = props

  const eachMatch = {
    competingTeam: recentMatch.competing_team,
    competingTeamLogo: recentMatch.competing_team_logo,
    result: recentMatch.result,
    matchStatus: recentMatch.match_status,
    // secondInnings: recentMatch.second_innings,
  }

  let matchWin
  if (eachMatch.matchStatus === 'Won') {
    matchWin = 'red'
  } else {
    matchWin = 'green'
  }

  return (
    <li className="match-card-container">
      <img
        className="competing-team-logo"
        src={eachMatch.competingTeamLogo}
        alt={`competing team ${eachMatch.competingTeam}`}
      />
      <p>{eachMatch.competingTeam}</p>
      <p>{eachMatch.result}</p>
      <p className={matchWin}>{eachMatch.matchStatus}</p>
    </li>
  )
}

export default MatchCard
