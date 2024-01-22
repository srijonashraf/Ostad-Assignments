import React, { useState } from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";

const items = [
  {
    src: "https://picsum.photos/id/756/1200/400",
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: "https://picsum.photos/id/456/1200/400",
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: "https://picsum.photos/id/678/1200/400",
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
];

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => (
      <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.key}
      >
        <img
            src={item.src}
            alt={item.altText}
            className="d-block w-100" // Ensure full width
            style={{ objectFit: "cover", maxHeight: "400px" }} // Adjust max height as needed
        />
        <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
        />
      </CarouselItem>
  ));

  return (
      <div className="w-100 d-flex justify-content-center">
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            {...props}
        >
          <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
          />
          <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
          />
        </Carousel>
      </div>
  );
};

export default Slider;
