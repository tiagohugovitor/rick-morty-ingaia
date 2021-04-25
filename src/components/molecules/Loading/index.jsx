import React from 'react';
import Text from '../../atoms/Text';
import LoadingIcon from '../../../assets/loading-icon.svg';
import {StyledLoading, Icon} from './styles';

const Loading = () => (
  <StyledLoading>
    <Icon src={LoadingIcon}/>
    <Text
      text="Loading"
      color="white"
      size="huge"
    />
  </StyledLoading>
);

export default Loading;
