import React from 'react'
import styled from 'styled-components';
import AppText from './common/AppText';
import {FACT_COLOR} from '../constants/styles';

const FactText = styled(AppText)`
  font-size: 40px;
  color: ${FACT_COLOR};
`;

export default FactText;