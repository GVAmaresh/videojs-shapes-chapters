import { useRef, useState } from "react";
import {
  Arrow,
  Circle,
  Rectangle,
  Scribble
} from "../Global_Variables/Paint.types";
import { DrawAction, IShapeDetails } from "../Global_Variables/Contants";

const useCustomeState = () => {
  const [isChapterRequired, setIsChapterRequired] = useState<boolean>(true);
  const [drawAction, setDrawAction] = useState<DrawAction>(DrawAction.Select);
  const [shapesDetails, setShapesDetails] = useState<IShapeDetails[]>([]);
  const [isClient, setIsClient] = useState<boolean>(false);

  const [action, setAction] = useState<DrawAction>(DrawAction.Select);
  const [text, setText] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [scribbles, setScribbles] = useState<Scribble[]>([]);
  const [rectangles, setRectangles] = useState<Rectangle[]>([]);
  const [circles, setCircles] = useState<Circle[]>([]);
  const [arrows, setArrows] = useState<Arrow[]>([]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [color, setColor] = useState("#000");

  return {
    isChapterRequired,
    setIsChapterRequired,
    drawAction,
    setDrawAction,
    shapesDetails,
    setShapesDetails,
    action,
    isPlaying, setIsPlaying,
    setAction,
    text,
    setText,
    canvasRef,
    scribbles,
    setScribbles,
    color, setColor,
    rectangles,
    isClient,
    setIsClient,
    setRectangles,
    circles,
    setCircles,
    arrows,
    setArrows
  };
};

export default useCustomeState;
