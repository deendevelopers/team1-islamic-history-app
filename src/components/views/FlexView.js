import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

const FlexView = styled.div`
display: flex;
flex-direction: ${props => props.flexDirection || 'row'};
justify-content: ${props => props.justifyContent || 'flex-start'};
align-items: ${props => props.alignItems || 'center'};
height: ${props => props.height || 'auto'};
width: ${props => props.width || 'auto'};
position: ${props => props.position || 'relative'};
`;

FlexView.propTypes = {
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  position: PropTypes.string,
};

FlexView.defaulProps = {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: 'auto',
  width: 'auto',
  position: 'relative',
};

export default FlexView;

export function FlexRowFullScreenView(props) {
  return (
      <FlexView
          flexDirection="row"
          justifyContent="center"
          alignItems={'center'}
          height="100%"
          width="100%"
          {...props}
      />
  );
}


export function FlexColumnFullWidthView(props) {
  return (
      <FlexView flexDirection="column" justifyContent="center"
                alignItems={'center'} width="100%" {...props}/>
  );
}



export function FlexColumnView(props) {
  return (
      <FlexView flexDirection="column" justifyContent="center"
                alignItems={'center'}{...props}/>
  );
}



export function FlexColumnFullScreenView(props) {
  return (
      <FlexView
          flexDirection="column"
          justifyContent="center"
          alignItems={'center'}
          height="100%"
          width="100%"
          {...props}
      />
  );
}