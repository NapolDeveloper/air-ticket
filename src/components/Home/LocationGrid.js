import React from 'react';
import styled from 'styled-components';

// components
import LocationCard from '../LocationCard/LocationCard';

const Container = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, auto));
`;

const ImageLocation = {
  seoul: 'https://www.kayak.co.kr/rimg/dimg/ff/d2/794e703d-city-35982-1620c5d9650.jpg?width=648&height=364&xhint=2242&yhint=1445&crop=true',
  jeju: 'https://www.kayak.co.kr/rimg/dimg/e1/4e/8ff30a1b-city-32610-17686cfdd47.jpg?width=648&height=364&xhint=1541&yhint=1199&crop=true'
};

const LocationGrid = () => {
  const { seoul, jeju } = ImageLocation;
  return (
    <Container>
      <LocationCard title={'서울'} price={'50000'} image={seoul}>
        서울
      </LocationCard>
      <LocationCard title={'도쿄'} price={'50000'}>
        도쿄
      </LocationCard>
      <LocationCard title={'미국'} price={'500000'}>
        미국
      </LocationCard>
      <LocationCard title={'영국'} price={'500000'}>
        영국
      </LocationCard>
      <LocationCard title={'캐나다'} price={'500000'}>
        캐나다
      </LocationCard>
      <LocationCard title={'제주'} price={'100000'} image={jeju}>
        제주
      </LocationCard>
    </Container>
  );
};

export default LocationGrid;
