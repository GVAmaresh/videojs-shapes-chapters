import { Dispatch, SetStateAction } from "react";

export const togglePlayPause = (
  setIsPlaying: Dispatch<SetStateAction<boolean>>
) => {
  setIsPlaying((prev) => !prev);
};
