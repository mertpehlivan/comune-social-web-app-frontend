import React, { useRef, useState, useEffect } from "react";
import { Box, IconButton, Slider, Stack, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ReplayIcon from "@mui/icons-material/Replay";

const VideoPlayer = ({ item }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [showReplayButton, setShowReplayButton] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const { top, bottom } = videoRef.current.getBoundingClientRect();
        const isVisible = top >= 0 && bottom <= window.innerHeight;
        if (!isVisible) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
    };

    const handleKeyDown = (event) => {
      if (videoRef.current) {
        if (event.key === "ArrowLeft") {
          videoRef.current.currentTime -= 5; // Rewind 5 seconds
        } else if (event.key === "ArrowRight") {
          videoRef.current.currentTime += 5; // Forward 5 seconds
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPlaying]); // Dependency array

  useEffect(() => {
    const handleLoadedMetadata = () => {
      if (videoRef.current && isFinite(videoRef.current.duration)) {
        setDuration(videoRef.current.duration);
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
        }
      };
    }
  }, []); // Empty dependency array, runs only once after initial render
  const handleVideoEnded = () => {
    setVideoEnded(true);
  };
  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    if (videoRef.current) {
      videoRef.current.volume = newValue;
      setMuted(newValue === 0);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setShowReplayButton(videoRef.current.currentTime >= videoRef.current.duration);
    }
  };

  const handleSeek = (event, newValue) => {
    if (videoRef.current) {
      videoRef.current.currentTime = newValue;
      setCurrentTime(newValue);
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setIsPlaying(true);
      setShowReplayButton(false);
      setVideoEnded(false)
    }
  };

  return (
    <Stack style={{ maxWidth: 600, position: "relative", height: "100%" }}>
      <Box height="100%" width="100%">
        <video
          ref={videoRef}
          src={item.src}
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
          onClick={handleVideoClick}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnded}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 5,
          left: 0,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "primary.main",
          boxSizing: "border-box",
          borderRadius: 40,
          height: 30,
        }}
      >
        <IconButton onClick={togglePlay} style={{ marginRight: 10 }} color="white">
        {videoEnded ? (
          <IconButton onClick={handleReplay}>
            <ReplayIcon sx={{ color: "white" }} />
          </IconButton>
        ):(isPlaying ? <PauseIcon sx={{ color: "white" }} /> : <PlayArrowIcon sx={{ color: "white" }} />)}
          
        </IconButton>

        <Typography style={{ marginRight: 10, color: "#fff" }}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </Typography>
        <div style={{ flexGrow: 1, margin: "0 10px" }}>
          <Slider
            value={currentTime}
            onChange={handleSeek}
            aria-labelledby="continuous-slider"
            min={0}
            max={duration}
            step={0.01}
            color="blue"
          />
        </div>
        <IconButton onClick={toggleMute} style={{ marginRight: 10 }}>
          {muted ? <VolumeOffIcon sx={{ color: "white" }} /> : <VolumeUpIcon sx={{ color: "white" }} />}
        </IconButton>
        
      </Box>
    </Stack>
  );
};

const formatTime = (time) => {
  if (isNaN(time)) return "00:00"; // Handle NaN values
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

export default VideoPlayer;
