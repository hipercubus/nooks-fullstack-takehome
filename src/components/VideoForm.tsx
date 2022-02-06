import React, { useContext, useRef, FormEvent } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import { GlobalContext } from "../context/GlobalContext";
import styled from "@emotion/styled";

function VideoForm() {
  const videoId = useRef<HTMLInputElement>();
  const { state, setVideoId } = useContext(GlobalContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (videoId.current?.value) {
      setVideoId(videoId.current?.value);
    }
    //TODO: Notify when videoId is empty
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomCard>
        <CardContent>
          <h4>Hi {state.currentUser.name}!</h4>
          <TextField
            name="videoId"
            label="Please enter a valid YouTube video id"
            variant="standard"
            inputRef={videoId}
            fullWidth
          />
        </CardContent>

        <CardActions>
          <Button type="submit"> Add video</Button>
        </CardActions>
      </CustomCard>
    </form>
  );
}

const CustomCard = styled(Card)`
  width: 30rem;
  background-color: #ffffffcc;
`;

export default VideoForm;
