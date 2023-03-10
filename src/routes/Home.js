import Hero from "../components/Hero";
import ImageSlider from "../components/ImageSlider";
import NavBar from "../components/NavBar";
import mainImage from "../images/mainImage.jpeg";

function Home() {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero"
        heroImg={mainImage}
        heading="संत रविदास महाराज मंदिर,माळवटा"
      />
      <ImageSlider />
    </>
  );
}

export default Home;
