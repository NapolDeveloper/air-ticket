import React from 'react';

import 'antd/dist/antd.css';
import styled from 'styled-components';

import { DatePicker, Space } from 'antd';

function onChange(date, dateString) {
  console.log(date, dateString);
}

const SpaceStyle = styled(Space)`
  z-index: 999;
`;

const ProductDate = () => {
  return (
    <SpaceStyle direction='vertical'>
      <DatePicker onChange={onChange} />
    </SpaceStyle>
  );
};

export default ProductDate;
