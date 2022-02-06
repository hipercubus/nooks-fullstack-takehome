import React from "react";
import { CardContent, IconButton } from "@mui/material";
import CustomCard from "./CustomCard";
import styled from "@emotion/styled";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ClearIcon from "@mui/icons-material/Clear";

function VideoPlayer() {
  const handleClose = () => {
    //TODO: Close video
  };

  return (
    <CustomCard width={"60rem"}>
      <CardContent>
        <Header>
          <HeaderLeft>
            <YouTubeIcon />
            <Title>Video Title</Title>
          </HeaderLeft>
          <HeaderRight>
            <IconButton size="small" onClick={handleClose}>
              <ClearIcon />
            </IconButton>
          </HeaderRight>
        </Header>
        <Video>here it goes the video</Video>
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
