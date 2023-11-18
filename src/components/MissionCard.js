import React from 'react';
import PropTypes from 'prop-types';
import { FaCalendarDay } from "react-icons/fa"
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaFlag } from "react-icons/fa"



class MissionCard extends React.Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;
    return (
      <div data-testid="mission-card" className='mission-card'>
        <div className='mission-name'>
        <p data-testid="mission-name">{name}</p>
        </div>
        <div className='missions-rest'>
        <p data-testid="mission-year">{<FaCalendarDay />}  {year}</p>
        <p data-testid="mission-country" className='countrys'>{<FaMapMarkerAlt />} {country}</p>
        <p data-testid="mission-destination">{<FaFlag />} {destination}</p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
