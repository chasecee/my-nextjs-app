"use client";
import { useEffect, useState } from "react";
import ResizableDiv from "./_components/ResizableDiv";
import YouTubeBackground from "./_components/YouTubeBackground";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [fontSize, setFontSize] = useState(22);
  const [verticalOffset, setVerticalOffset] = useState(0);

  useEffect(() => {
    const savedSize = localStorage.getItem("fontSize");
    if (savedSize) setFontSize(parseInt(savedSize, 10));

    const savedOffset = localStorage.getItem("verticalOffset");
    if (savedOffset) setVerticalOffset(parseInt(savedOffset, 10));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("fontSize", fontSize.toString());
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem("verticalOffset", verticalOffset.toString());
  }, [verticalOffset]);

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesStr = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutesStr}`;
  };

  const handleResize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(parseInt(event.target.value, 10));
  };

  const handleOffsetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVerticalOffset(parseInt(event.target.value, 10));
  };

  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  return (
    <div className="bg-black">
      <ResizableDiv>
        <YouTubeBackground videoId="xOQyovt-Jio" />
        <div className="relative w-full h-full flex tracking-[0cqw]  mix-blend-screen z-[2] ">
          <div className="absolute inset-0 flex items-center flex-col justify-center w-full   ">
            <h1
              className="leading-[100%] translate-y-[0%] text-green-800 "
              style={{
                fontSize: `${fontSize}cqw`,
                // marginTop: `${verticalOffset}cqh`,
              }}
            >
              {formatTime(time)}
            </h1>
          </div>
        </div>
      </ResizableDiv>
      <div className="fixed bottom-0 left-0 right-0 flex justify-between items-center p-4">
        <div className="flex flex-row items-center w-full">
          <input
            type="range"
            min="10"
            max="100"
            value={fontSize}
            onChange={handleResize}
            className="w-full mr-4"
            step={0.1}
          />
          <input
            type="range"
            min="-50"
            max="50"
            value={verticalOffset}
            onChange={handleOffsetChange}
            className="w-full mr-4"
          />
          <button
            onClick={handleFullscreen}
            className="p-2 bg-gray-800 text-white rounded"
          >
            Fullscreen
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clock;
