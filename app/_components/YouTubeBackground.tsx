import React from "react";

interface YouTubeBackgroundProps {
  videoId: string;
}

const YouTubeBackground: React.FC<YouTubeBackgroundProps> = ({ videoId }) => {
  return (
    <>
      <div className="absolute inset-0 top-1/2 aspect-video -translate-y-1/2 z-0">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&playsinline=1&playbackRate=0.5`}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
      <div className="absolute inset-0 bg-black/80"></div>
    </>
  );
};

export default YouTubeBackground;
