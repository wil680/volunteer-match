import "./landingHeader.css";
import landingImage from "../../../landing.jpg";
import Search from "../search/search";

export default function LandingHeader() {
  return (
    <div
      className="landing-header"
      style={{ backgroundImage: `url(${landingImage})` }}
    >
      <h1 className="slogan">Give Impact</h1>
      <Search />
    </div>
  );
}
