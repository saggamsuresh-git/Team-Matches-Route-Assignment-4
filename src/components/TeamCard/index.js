import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, teamImageUrl, id} = teamDetails
  console.log(teamDetails)

  return (
    <Link to={`/team-matches/${id}`} className="link-style">
      <li className="team-card-container">
        <img src={teamImageUrl} alt={`${name}`} className="team-image" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
