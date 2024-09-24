import React from "react";
import VideoPlayer from "./VideoPlayer";
const VideoScreen = () => {
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "/sample.mp4",
        type: "video/mp4"
      }
    ]
  };

  return (
    <div className="flex justify-center relative">
      <div className="shadow-lg w-full">
        <VideoPlayer options={videoJsOptions} />
      </div>
    </div>
  );
};

export default VideoScreen;
