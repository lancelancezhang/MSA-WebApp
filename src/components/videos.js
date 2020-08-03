import React from "react";

const Videos = ({ videos }) => {
  return (
    <div>
      <center>
        <h1>Video List</h1>
      </center>
      {videos.map((video) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{video.videoTitle}</h5>
            <h6 class="subtitle second">{video.product}</h6>
            <h6 class="card-subtitle mb-2 text-muted">{video.dateReleased}</h6>
            <p class="card-text">
              {"www.youtube.com/watch?v=" + video.videoCode}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
