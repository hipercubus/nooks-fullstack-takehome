import React, { useContext, useEffect, useRef } from "react";
import { CardContent, IconButton } from "@mui/material";
import CustomCard from "./CustomCard";
import styled from "@emotion/styled";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ClearIcon from "@mui/icons-material/Clear";
import YouTube from "react-youtube";
import { GlobalContext } from "../context/GlobalContext";

function VideoPlayer() {
  const { state, closeVideo, setVideoTitle, playVideo, pauseVideo } =
    useContext(GlobalContext);
  const videoRef = useRef<any>();

  useEffect(() => {
    if (videoRef.current && state.currentVideo.status === "PLAYING") {
      videoRef.current.seekTo(state.currentVideo.time);
      videoRef.current.playVideo();
    }
    if (videoRef.current && state.currentVideo.status === "PAUSED") {
      videoRef.current.pauseVideo();
    }
  }, [state.currentVideo.status]);

  const opts: any = {
    height: "500",
    width: "800",
    playerVars: {
      autoplay: false,
    },
  };

  const handleReady = (event: any) => {
    const title = event.target?.getVideoData()?.title ?? "No title available";
    setVideoTitle(title);
    videoRef.current = event.target;
  };

  const handlePlay = (event: any) => {
    const time = event.target?.getCurrentTime();
    playVideo(time);
  };

  const handlePause = () => {
    pauseVideo();
  };

  const handleClose = () => {
    closeVideo();
  };

  return (
    <CustomCard maxWidth={"900px"}>
      <CardContent>
        <Header>
          <HeaderLeft>
            <YouTubeIcon />
            <Title>{state.currentVideo.title}</Title>
          </HeaderLeft>
          <HeaderRight>
            <IconButton size="small" onClick={handleClose}>
              <ClearIcon />
            </IconButton>
          </HeaderRight>
        </Header>
        <Video>
          <YouTube
            videoId={state.currentVideo.id}
            opts={opts}
            onReady={handleReady}
            onPlay={handlePlay}
            onPause={handlePause}
          />
        </Video>
      </CardContent>
    </CustomCard>
  );
}

const Header = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const HeaderRight = styled.div``;

const Title = styled.h4`
  margin: 0 0.8rem;
`;

const Video = styled.div``;

export default VideoPlayer;
