import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/titleCards/TitleCards";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      {/* Hero section */}
      <div className="hero">
        <img src={hero_banner} alt="" className="banner_img" />
        <div className="hero_caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p className="hero-p">
            Discovering his ties to a secret ancient order, a young man living
            in modern istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>

          <div className="hero_btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>

          {/* cards */}
          <TitleCards />
        </div>
      </div>

      <div className="more_cards">
        {/* cards */}
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only On Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Pics for You"} category={"now_playing"} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
