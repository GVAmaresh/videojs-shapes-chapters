import React, { useEffect, useRef } from "react";
import "video.js/dist/video-js.css";
import Player from "video.js/dist/types/player";
import videojs from "video.js";

import useCustomState from "../hooks/useCustomState";
// import { Stage } from "react-konva";

interface VideoPlayerProps {
  options: typeof videojs.options;
}

const VideoPlayer = ({ options }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Player | null>(null);
  const { isClient, setIsClient } = useCustomState();

  useEffect(() => {
    setIsClient(true);
    if (isClient && videoRef.current && !playerRef.current) {
      playerRef.current = videojs(videoRef.current, options, function onPlayerReady() {
        console.log("Player is ready");
        const player = playerRef.current;
        if (player) {
          player.controls(true); 
          player.play(); 
        }
      });
    }
  
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [options, isClient, setIsClient]);
  

  return (
    <>
      {isClient && (
        <div className="flex justify-center relative">
          <video
            ref={videoRef}
            id="my-video"
            className="video-js max-h-[50vh] w-full md:w-fit rounded-2xl"
            controls
            preload="auto"
            poster="/sample-image.jpeg"
            // data-setup="{}"
            style={{ position: "relative", zIndex: 1 }}
          >
            <source src="/sample.mp4" type="video/mp4" />
            <p className="vjs-no-js">
              To view this video please enable JavaScript, and consider
              upgrading to a web browser that
              <a
                href="https://videojs.com/html5-video-support/"
                target="_blank"
              >
                supports HTML5 video
              </a>
            </p>
          </video>
        </div>
      )}
      {/* <Stage
        // width={window.innerWidth}
        // height={window.innerHeight}
        className="video-js h-[50vh] md:h-[70vh] lg:h-[50vh] w-full md:w-fit rounded-2xl"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "transparent",
          zIndex: 2,
          height: "50vh",
          width: "100%"
        }}
      ></Stage> */}
    </>
  );
};

export default VideoPlayer;
