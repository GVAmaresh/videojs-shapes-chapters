import { FaRegCircle } from "react-icons/fa";
import { LuRectangleHorizontal } from "react-icons/lu";
import { CgArrowTopRight } from "react-icons/cg";
import { FaImage } from "react-icons/fa6";
import { BsChatLeftText } from "react-icons/bs";
import { MdLabelImportant } from "react-icons/md";
import { DrawAction } from "../Global_Variables/Contants";



const icons = {
  [DrawAction.Circle]: FaRegCircle,
  [DrawAction.Rectangle]: LuRectangleHorizontal,
  [DrawAction.Arrow]: CgArrowTopRight,
  image: FaImage,
  text: BsChatLeftText,
  label: MdLabelImportant
};

export default function NavBar() {
    // setAction:(key:string)=>void
    const setAction = (action:string) => {
      console.log(`Action set to: ${action}`);
    };

  
    return (
      <>
        <div className="">
          <div className="flex justify-evenly mt-4 shadow-lg pb-2">
            {Object.entries(icons).map(([key, IconComponent]) => (
              <div key={key} className="" onClick={() => setAction(key)}>
                <IconComponent className=" size-5 md:size-8  font-semibold text-white" />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
