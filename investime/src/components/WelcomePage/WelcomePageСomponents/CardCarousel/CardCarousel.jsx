import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme, rem } from '@mantine/core';
import EventCard from './EventCard/EventCard';
import AttractionCard from './AttractionCard/AttractionCard';


function CardsCarousel({data}) {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item) => (
      <Carousel.Slide key={item.title}>
        {item.type === 'event' ? (
          <EventCard {...item} />
        ) : (
          <AttractionCard {...item} />
        )}
      </Carousel.Slide>
    ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: rem(2), sm: 'xl' }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}

export default CardsCarousel;
