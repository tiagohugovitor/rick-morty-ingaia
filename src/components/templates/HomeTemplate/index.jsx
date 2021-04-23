import React from 'react';
import PropTypes from 'prop-types';
import HomeHeader from '../../organisms/HomeHeader';
import HomeContent from '../../organisms/HomeContent';
import { HomeContainer, StyledHomeHeader, StyledHomeContent } from './styles';

const HomeTemplate = ({
  onChange,
  onClick,
  value,
}) => {

  const hasContent = () => false
  
  return (
    <HomeContainer>
      <StyledHomeHeader>
        <HomeHeader
          onChange={onChange}
          onClick={onClick}
          value={value}
        />
      </StyledHomeHeader>
      <StyledHomeContent>
        {hasContent() && (
          <HomeContent />
        )}
      </StyledHomeContent>
    </HomeContainer>
  )
}

HomeTemplate.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.string
}

export default HomeTemplate;
