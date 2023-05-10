import React, { useEffect, useState } from "react";
import { Container, Grid, Header, Image } from "semantic-ui-react";

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = activeIndex === 2 ? 0 : activeIndex + 1;
      setActiveIndex(newIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const carouselImages = [
    {
      src: "../assets/almonds.jpg",
      title: "Image 1",
      link: "#",
    },
    {
      src: "../assets/almonds.jpg",
      title: "Image 2",
      link: "#",
    },
    {
      src: "../assets/almonds.jpg",
      title: "Image 3",
      link: "#",
    },
  ];

  return (
    <div>
      <div
        className="carousel"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div
          style={{
            display: "flex",
            transition: "transform 0.5s",
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {carouselImages.map((image, index) => (
            <div key={index} style={{ flex: "0 0 100%", position: "relative" }}>
              <Image
                src={image.src}
                style={{ cursor: "pointer", width: "100%" }}
                onClick={() => handleImageClick(index)}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    color: "#fff",
                    padding: "5px 10px",
                    fontWeight: "bold",
                  }}
                >
                  {image.title}
                </div>
              </Image>
            </div>
          ))}
        </div>
      </div>
      <Container text>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Header as="h2">About Us</Header>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ut massa vitae quam pulvinar fermentum. Suspendisse potenti.
                Vivamus ullamcorper auctor velit ut tristique. Sed a ex vel orci
                fermentum vestibulum.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Header as="h2">Our Mission</Header>
              <p>
                Phasellus suscipit eros at felis ultrices, eget commodo metus
                sollicitudin. Fusce volutpat mi augue, vel molestie nisl aliquam
                vel. Sed consequat, sapien quis fringilla gravida, ipsum enim
                aliquam odio, nec maximus massa orci non turpis.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
