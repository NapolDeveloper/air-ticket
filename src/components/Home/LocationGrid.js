import React from 'react';
import styled from 'styled-components';

// components
import LocationCard from '../LocationCard/LocationCard';

const Container = styled.div`
  width: 100%;
  /* padding: 5px; */
  display: flex;
  flex-wrap: wrap;
  
  /* justify-content: space-around; */
  grid-template-columns: repeat(auto-fill, minmax(300px, auto));
`;

const ImageLocation = {
  seoul: 'https://www.kayak.co.kr/rimg/dimg/ff/d2/794e703d-city-35982-1620c5d9650.jpg?width=648&height=364&xhint=2242&yhint=1445&crop=true',
  jeju: 'https://cdn.pixabay.com/photo/2019/09/17/02/20/jeju-4482313_1280.jpg',
  tokyo: 'https://cdn.pixabay.com/photo/2019/07/14/08/08/night-4336403_1280.jpg',
  hongkong: 'https://www.kayak.co.kr/rimg/dimg/34/63/e358adfb-city-23190-164c80b5417.jpg?width=648&height=364&xhint=1528&yhint=1128&crop=true',
  newyork: 'https://cdn.pixabay.com/photo/2020/02/05/22/07/newyork-4822523_1280.jpg',
  paris: 'https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_1280.jpg'
};

const LocationGrid = () => {
  // image url
  const { seoul, jeju, tokyo, hongkong, newyork, paris } = ImageLocation;

  return (
    <Container>
      <LocationCard title={'서울'} price={'50000'} image={seoul}>
        서울
      </LocationCard>
      <LocationCard title={'도쿄'} price={'50000'} image={tokyo}>
        도쿄
      </LocationCard>
      <LocationCard title={'홍콩'} price={'500000'} image={hongkong}>
        홍콩
      </LocationCard>
      <LocationCard title={'뉴욕'} price={'500000'} image={newyork}>
        뉴욕
      </LocationCard>
      <LocationCard title={'파리'} price={'500000'} image={paris}>
        파리
      </LocationCard>
      <LocationCard title={'제주'} price={'100000'} image={jeju}>
        제주
      </LocationCard>
    </Container>
  );
};

export default LocationGrid;
