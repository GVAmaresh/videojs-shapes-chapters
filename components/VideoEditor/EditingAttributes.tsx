import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import useCustomeState from "../hooks/useCustomState";
import { togglePlayPause } from "../Functions/useEditingFunctions";
import { CustomTextField } from "../MUI_Function/MUI_Theme";
import { Grid } from "@mui/material";
import { TwitterPicker } from "react-color";

const Attributes = () => {
  const { color, setColor } = useCustomeState();
  return (
    <>
      <div className="">
        <Grid
          sx={{ flexGrow: 1 }}
          container
          spacing={1}
          justifyContent="center"
          marginTop={1}
        >
          <Grid item xs={10}>
            <Grid container justifyContent="center" spacing={4}>
              <Grid item xs={6} sm={3}>
                <div className="">
                  <CustomTextField
                    id="outlined-required"
                    label="Opacity"
                    defaultValue="Hello World"
                  />
                </div>
              </Grid>
              <Grid item xs={6} sm={3}>
                <div className="">
                  <CustomTextField
                    id="outlined-required"
                    label="Fill"
                    defaultValue="Hello World"
                  />
                </div>
              </Grid>
              <Grid item xs={6} sm={3}>
                <div className="">
                  <CustomTextField
                    id="outlined-required"
                    label="Border"
                    defaultValue="Hello World"
                  />
                </div>
              </Grid>
              <Grid item xs={6} sm={3}>
                <div className="">
                  <CustomTextField
                    id="outlined-required"
                    label="Shadow"
                    defaultValue="Hello World"
                  />
                </div>
              </Grid>
              <Grid item xs={6} sm={3}>
                <div className="">
                  <CustomTextField
                    id="outlined-required"
                    label="Start Time"
                    defaultValue="Hello World"
                  />
                </div>
              </Grid>
              <Grid item xs={6} sm={3}>
                <div className="">
                  <CustomTextField
                    id="outlined-required"
                    label="End Time"
                    defaultValue="Hello World"
                  />
                </div>
              </Grid>
              <Grid item xs={6} sm={3}>
                <div className="">
                  <TwitterPicker
                    color={color}
                    onChangeComplete={(color) => setColor(color.hex)}
                    styles={{
                      default: {
                        card: {
                          width: "230px",
                          height: "58px",
                          backgroundColor: "transparent",
                          boxShadow: "0px 1px 2px 0px rgba(255, 255, 255, 0.5)"
                        },
                        hash: {
                          display: "none",
                          background: "#F0F0F0",
                          height: "28px",
                          width: "20px",
                          borderRadius: "4px 4px 4px 4px",
                          float: "left",
                          color: "#98A1A4",
                          alignItems: "center",
                          justifyContent: "center"
                        },
                        input: {
                          width: "100px",
                          fontSize: "14px",
                          fontWeight: "20px",
                          color: "#666",
                          border: "0px",
                          outline: "none",
                          height: "26px",
                          boxShadow: "inset 0 0 0 1px #F0F0F0",
                          boxSizing: "content-box",
                          borderRadius: "4px 4px 4px 4px",
                          float: "left",
                          paddingLeft: "8px"
                        },
                        swatch: {
                          width: "20px",
                          height: "20px",
                          margin: "2px",
                          display: "inline-block"
                        }
                      },
                      "top-left-triangle": {
                        triangle: {
                          display: "none"
                        }
                      }
                    }}
                    colors={[
                      "#FF0000",
                      "#00FF00",
                      "#000000",
                      "#FFFFFF"
                    ]}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default function EditingAttributes() {
  const { isPlaying, setIsPlaying } = useCustomeState();
  return (
    <>
      <div className="mt-2">
        <div
          className="flex justify-center"
          onClick={() => togglePlayPause(setIsPlaying)}
        >
          <div className="cursor-pointer p-4 border-2 rounded-lg w-fit ">
            {isPlaying ? (
              <FaPause className="size-6" />
            ) : (
              <FaPlay className="size-6" />
            )}
          </div>
        </div>
        <div className="">
          <div className="">
            <Attributes />
          </div>
        </div>
      </div>
    </>
  );
}
