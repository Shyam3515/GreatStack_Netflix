import "./footer.css";
import youtube from "../../assets/youtube_icon.png";
import twitter from "../../assets/twitter_icon.png";
import facebook from "../../assets/facebook_icon.png";
import instagram from "../../assets/instagram_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={youtube} alt="" />
        <img src={twitter} alt="" />
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
      </div>
      {/* links */}
      <ul>
        <li>Auto Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Investor Relations</li>
        <li>Media Centre</li>
        <li>Jobs</li>
        <li>Terms Of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>

      <p className="copyright-text">&copy; 1997 - 2024 Netflix , Inc.</p>
    </div>
  );
};

export default Footer;
