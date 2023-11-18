import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <hr />
        <Title headline="Planetas " />
        {planets.map((planet, index) => (
          <PlanetCard
          key={ index }
          planetImage={ planet.image }
          planetName={ planet.name }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
