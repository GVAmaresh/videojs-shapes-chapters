"use client";
import { IVideoSC } from "../Global_Variables/Contants";
import NavBar from "../NavBar/NavBar";
import VideoScreen from "../VideoFunctions/VideoScreen";
import EditingAttributes from "./EditingAttributes";

export default function VideoShapeChapters({
  getShapesDetails,
  chapterRequired = true
}: IVideoSC) {
  if (getShapesDetails && chapterRequired) console.log("getShapesDetails");

  return (
    <div className="">
      <div className="">
        <NavBar />
        <VideoScreen />
        <EditingAttributes />
      </div>
    </div>
  );
}
