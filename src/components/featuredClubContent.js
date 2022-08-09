import React from "react";
import "../featured-clubs.css";
import {useNavigate} from "react-router-dom";

function FeaturedClubContent({ featuredClubs, setFeaturedClubs, clubIndex}) {

  let navigate = useNavigate();


  return (
    <div className="featured-club-content">
      <h2 onClick={() => navigate("/club-information/"+featuredClubs[clubIndex].clubId)}>{featuredClubs[clubIndex].clubName}</h2>
      <div className="featured-club-inner-img-div">
        <p src={featuredClubs[clubIndex].mediaURL}>Image Placeholder</p>
      </div>
      <div className="featured-club-inner-description-div">
        <p>{featuredClubs[clubIndex].description}</p>
      </div>
    </div>
  );
}

export default FeaturedClubContent;