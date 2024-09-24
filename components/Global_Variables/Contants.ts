import { ReactElement } from "react";

export interface IShapeDetails {
    id: number;
    type: string;
    position: { x: number; y: number };
  }

  export enum DrawAction {
    Select = "SELECT",
    Circle = "CIRCLE",
    Rectangle = "RECTANGLE",
    Arrow = "ARROW",
    Text = "TEXT"
  }

  export interface PaintOption {
    id: string;
    label: string;
    icon: ReactElement;
  }

//   export const PAINT_OPTIONS = [
//     {
//         id: DrawAction.Select,
//         label: "Select Shapes",
//         icon: ArrowUpLeftSquareFill ,
//     },
//     { id: DrawAction.Rectangle, label: "Draw Rectangle Shape", icon: Square  },
//     { id: DrawAction.Circle, label: "Draw Circle Shape", icon: Circle  },
//     { id: DrawAction.Arrow, label: "Draw Arrow Shape", icon: ArrowUpLeft  },
//     { id: DrawAction.Scribble, label: "Scribble", icon: Pencil  },
// ];
export interface Annotation {
    id: string;
    x: number;
    y: number;
    width?: number; 
    height?: number; 
    radius?: number; 
    points?: number[]; 
    color: string;
    label: string;
    startTime: number;
    endTime: number;
  }

 export interface IVideoSC {
    getShapesDetails?: (shapes: IShapeDetails[]) => void; 
    chapterRequired?: boolean;
  }

  