import React from "react";

function FeaturedClubContent({ featuredClubs, setFeaturedClubs, clubIndex}) {
  return (
    <div>
      <h2>{featuredClubs[clubIndex].name}</h2>
      <div className="featured-club-inner-img-div">
        <p>Image Placeholder</p>
      </div>
      <div className="featured-club-inner-description-div">
        <p>{featuredClubs[clubIndex].description}</p>
      </div>
    </div>
  );
}

export default FeaturedClubContent;