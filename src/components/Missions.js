import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Mission extends React.Component {
  render() {
    return (
      <div  className='missions-container'>
        <Title headline="Missões" />
      <div data-testid="missions" className='missions'>

        {missions.map((mission, index) => (
          <div className='div-missions'> 
          <MissionCard
            key={ index }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />
          </div>
        ))}
      </div>
      </div>
    );
  }
}

export default Mission;
