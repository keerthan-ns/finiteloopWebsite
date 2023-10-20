import { type FunctionComponent, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe"
import BlurImage from "../blurImage";
import { type JsonArray} from "@prisma/client/runtime/library";

type ImageSliderProps = {
    images: JsonArray;
};

const ImageSlider:FunctionComponent<ImageSliderProps> = ({ images }: ImageSliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
    const newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
    };

    const handlePrevSlide = () => {
    const newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
    };

    return (
        <div className="relative">
            <AiOutlineLeft
                onClick={handlePrevSlide}
                className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
            />
            {/* <div className="w-full h-[50vh] flex overflow-hidden relative m-auto"> */}
            <div className="w-full h-[350px] flex overflow-hidden relative m-auto">
                <Swipe
                onSwipeLeft={handleNextSlide}
                onSwipeRight={handlePrevSlide}
                className="relative z-10 w-full h-full flex"
                >
                {images && images.map((image, index) => {
                    if (index === currentSlide) {
                        return (
                            <BlurImage
                                alt="event images"
                                key={index}
                                src={image?.toString() || ""}
                                className="max-h-[550px] w-full rounded-xl"
                                style={{ objectFit: "contain" }}
                                height={500}
                                width={500}
                            />
                        // <Image
                        //     alt="event images"
                        //     key={index}
                        //     src={image}
                        //     layout="fill"
                        //     style={{ objectFit: "contain" }}
                        //     // objectFit="contain"
                        //     className="animate-fadeIn"
                        // />
                    );
                    }
                })}
                </Swipe>
            </div>
            <AiOutlineRight
                onClick={handleNextSlide}
                className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
            />

            {/* <div className="relative flex justify-center p-2">
                {images.map((_, index) => {
                return (
                    <div
                    className={
                        index === currentSlide
                        ? "h-2 w-2 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                        : "h-2 w-2 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
                    }
                    key={index}
                    onClick={() => {
                        setCurrentSlide(index);
                    }}
                    />
                );
                })}
            </div> */}
        </div>
    );
};

export default ImageSlider;
