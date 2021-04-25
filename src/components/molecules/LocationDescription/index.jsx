import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text';
import ResidentsIcon from '../../../assets/residents-icon.svg'
import { LocationContainer, StyledLocationDescription, Title, ResidentsDecription, StyledResidentsIcon } from './styles';

const LocationDescription = ({
  title,
  locationType,
  locationName,
  locationSubtitle,
  locationResidents
}) => {
  return (
    <LocationContainer>
      <Title>
        <Text
          text={title}
          color="tertiary"
          size="tiny"
          fontWeight="normal"
        />
      </Title>
      <StyledLocationDescription>
        <Text
          text={locationType}
          color="secondary"
          size="small"
          fontWeight="normal"
        />
        <Text
          text={locationName}
          color="white"
          size="extra"
          fontWeight="normal"
        />
        <Text
          text={locationSubtitle}
          color="grey"
          size="medium"
          fontWeight="normal"
        />
      </StyledLocationDescription>
      {!!locationResidents && (
        <ResidentsDecription>
          <StyledResidentsIcon src={ResidentsIcon} />
          <Text
            text={`${locationResidents} residents`}
            color="secondary"
            size="small"
            fontWeight="normal"
          />
        </ResidentsDecription>
      )}
    </LocationContainer>
  )
};

LocationDescription.propTypes = {
  title: PropTypes.string,
  locationType: PropTypes.string,
  locationName: PropTypes.string,
  locationSubtitle: PropTypes.string,
  locationResidents: PropTypes.number
}

export default LocationDescription;
