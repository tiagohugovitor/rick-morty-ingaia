import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text';
import { LocationContainer, StyledLocationDescription, ResidentsDecription, ResidentsIcon } from './styles';

const LocationDescription = ({
  title,
  locationType,
  locationName,
  locationSubtitle,
  locationResidents
}) => {
  return (
    <LocationContainer>
      <Text
        text={title}
        color="tertiary"
        size="tiny"
      />
      <StyledLocationDescription>
        <Text
          text={locationType}
          color="secondary"
          size="small"
        />
        <Text
          text={locationName}
          color="white"
          size="extra"
        />
        <Text
          text={locationSubtitle}
          color="grey"
          size="medium"
        />
      </StyledLocationDescription>
      <ResidentsDecription>
        <ResidentsIcon src="../../../../public/assets/residents-icon"/>
        <Text
          text={locationResidents}
          color="secondary"
          size="small"
        />
      </ResidentsDecription>
    </LocationContainer>
  )
};

LocationDescription.propTypes = {
  title: PropTypes.string,
  locationType: PropTypes.string,
  locationName: PropTypes.string,
  locationSubtitle: PropTypes.string,
  locationResidents: PropTypes.string
}

export default LocationDescription;
