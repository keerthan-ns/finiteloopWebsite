import { Slide } from "react-awesome-reveal";
import { type FunctionComponent } from "react";
import ImageSlider from "../imageslider";
import { type JsonArray } from "@prisma/client/runtime/library";

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  name: string;
  img: string;
  images: JsonArray,
  desc: string;
  type: string;
  date: Date;
  attended: number;
  organizer: string;
  
};

// const items = [
//   "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/12753820/pexels-photo-12753820.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/163117/keyboard-white-computer-keyboard-desktop-163117.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600"
// ];

const Modal: FunctionComponent<ModalProps> = ({
  visible,
  onClose,
  name,
  // img,
  images,
  desc,
  type,
  date,
  attended,
  organizer,
}) => {
  const handleOnClose = (element: HTMLDivElement) => {
    if (element.id === "container") onClose();
  };

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={(e) => handleOnClose(e.target as HTMLDivElement)}
      className="fixed inset-0 flex justify-center bg-black bg-opacity-70 backdrop-blur-lg p-1 md:p-5 z-50 overflow-y-scroll "
   >
      <Slide triggerOnce direction="down" >
        <div className="p-4">
          <div className="relative  max-w-5xl rounded-xl bg-white bg-opacity-30 p-6 shadow-sm backdrop-blur-lg backdrop-filter ">
            <button
              onClick={onClose}
              className=" border absolute  top-0 right-0 rounded-full bg-opacity-70 p-1 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* <BlurImage
                alt="Laptop"
                src={img}
                className="max-h-[550px] w-full rounded-xl"
                height={500}
                width={500}
              /> */}
              <ImageSlider images={images} height={500} width={500}/>
              <div className="flex flex-col gap-3 text-white">
                <h2 className="heading text-lg font-medium lg:text-2xl">
                  {name}
                </h2>
                <a>Category: {type}</a>
                <a>Date: {date.toLocaleDateString()}</a>
                <a>Attended by: {attended}+ Participants</a>
                <a>Organizers: {organizer}</a>
                <div className="mt-4 text-sm">
                  <a className="text-lg text-white">Description</a>
                  <div className="mt-2 pr-2">
                    <a className="text-gray-200">{desc}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Modal;
