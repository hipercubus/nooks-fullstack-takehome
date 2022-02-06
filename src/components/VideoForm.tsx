import React, { useContext, useRef, FormEvent } from "react";
import { Button, CardActions, CardContent, TextField } from "@mui/material";
import { GlobalContext } from "../context/GlobalContext";
import CustomCard from "./CustomCard";

function VideoForm() {
  const videoId = useRef<HTMLInputElement>();
  const { state, setVideoId } = useContext(GlobalContext);

  const getVideoId = (_url: string | undefined): string | undefined => {
    let validVideoId: string | null;
    try {
      const url: any = new URL(_url || "");
      // Params format
      validVideoId = url.searchParams.get("v");
      if (validVideoId) return validVideoId;

      // Pathname format
      validVideoId = url.pathname.replaceAll("/", "");
      if (validVideoId) return validVideoId;

      return _url;
    } catch {
      return _url;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validVideoId = getVideoId(videoId.current?.value);
    if (validVideoId) return setVideoId(validVideoId);

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
            label="Please enter a valid YouTube video URL or ID"
            variant="standard"
            inputRef={videoId}
            fullWidth
          />
        </CardContent>

        <CardActions>
          <Button type="submit">Add video</Button>
        </CardActions>
      </CustomCard>
    </form>
  );
}

export default VideoForm;
