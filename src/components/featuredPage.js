import React from "react";
import FeaturedClubContent from "./featuredClubContent";

function featuredPage() {
  return (
    <div className="featured-page-body">
      <div className="featured-clubs-container">
        <h1>Featured Clubs</h1>
        <div className="featured-club-outer-div">
          <div className="featured-club-arrow-side-column left">
            <div className="featured-club-arrow left"></div>
          </div>
          <FeaturedClubContent />
          <div className="featured-club-arrow-side-column right">
            <div className="featured-club-arrow right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default featuredPage;