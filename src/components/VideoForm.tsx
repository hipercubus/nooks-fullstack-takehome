import React, { useContext, useRef, FormEvent } from "react";
import { Button, CardActions, CardContent, TextField } from "@mui/material";
import { GlobalContext } from "../context/GlobalContext";
import CustomCard from "./CustomCard";

function VideoForm() {
  const videoId = useRef<HTMLInputElement>();
  const { state, setVideoId } = useContext(GlobalContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (videoId.current?.value) {
      setVideoId(videoId.current?.value);
    }
    //TODO: Notify when videoId is empty
    //TODO: Make it work with youtube URL
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

export default VideoForm;
