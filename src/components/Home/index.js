import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
    // console.log('did mount')
  }

  getTeams = async () => {
    // console.log('entered')
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamsData = await response.json()
    // console.log(teamsData)
    const allTeams = teamsData.teams
    const updatedTeamsList = allTeams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    // console.log(allTeams)

    this.setState({teamsList: updatedTeamsList, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    // console.log(isLoading)
    return (
      <>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="home-bg-container">
            <div className="logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="ipl-headline">IPL Dashboard</h1>
            </div>
            <ul className="teams-list-container">
              {teamsList.map(each => (
                <TeamCard teamDetails={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default Home
