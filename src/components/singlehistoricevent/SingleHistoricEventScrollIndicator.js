import React from 'react';
import styled from 'styled-components';
import {FlexColumnFullWidthView} from '../views/FlexView';
import {FACT_COLOR} from '../../constants/styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSortDown} from '@fortawesome/free-solid-svg-icons';
import TweenOne from 'rc-tween-one';

const Header = styled.div`
  font-size: medium;
  font-weight: bold;
  text-align: center;
  color: ${FACT_COLOR};
  font-style: italic;
  justify-self: flex-end;
  padding-bottom: 30px;
`;

function SingleHistoricEventScrollIndicator(props) {

  return (
      <FlexColumnFullWidthView {...props}>
        <Header>
          See where
          <TweenOne
              animation={{
                y: 10,
                yoyo: true, // demo 演示需要
                repeat: -1, // demo 演示需要
                duration: 1000,
                ease: 'easeInOutQuad'
              }}
              className="code-box-shape"
          >
            <FontAwesomeIcon icon={faSortDown} size={'lg'}/>
          </TweenOne>
        </Header>
      </FlexColumnFullWidthView>
  );
}

export default SingleHistoricEventScrollIndicator;