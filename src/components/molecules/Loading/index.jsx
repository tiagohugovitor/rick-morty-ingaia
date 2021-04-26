import React from 'react';
import Text from '../../atoms/Text';
import LoadingIcon from '../../../assets/loading-icon.svg';
import {StyledLoading, Icon, AnimationText} from './styles';

const Loading = () => (
  <StyledLoading>
    <Icon src={LoadingIcon} />
    <AnimationText>
      <Text
        text="Loading"
        color="white"
        size="huge"
      />
    </AnimationText>
  </StyledLoading>
);

export default Loading;
