import React from "react";
import {useNavigate} from "react-router-dom";

function FeaturedClubContent({ featuredClubs, setFeaturedClubs, clubIndex}) {

  let navigate = useNavigate();

  return (
    <div>
      <h2 onClick={() => navigate("/club-information/"+featured[clubIndex].clubId)}>{featuredClubs[clubIndex].clubName}</h2>
      <div className="featured-club-inner-img-div">
        <p src={featured[clubIndex].mediaURL}>Image Placeholder</p>
      </div>
      <div className="featured-club-inner-description-div">
        <p>{featuredClubs[clubIndex].description}</p>
      </div>
    </div>
  );
}

export default FeaturedClubContent;