import React, { FC, Suspense, useState } from "react";
import "./banner.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const BannerContent: FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div className="navigation-wrapper ">
        <div ref={sliderRef} className="keen-slider">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRS1Eu4DVnB9-pMpic4IsUMylyoUOvXXtl1ADKwJy8ug&s"
              alt=""
              className="w-full h-40 md:h-60 lg:h-80 keen-slider__slide"
            />
          </div>
          <div>
            <img
              src="https://tuoitrebariavungtau.vn/wp-content/uploads/2023/08/15319063_1870502259827840_8901988026005563692_n.jpg"
              alt=""
              className="w-full h-40 keen-slider__slide"
            />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/474x/95/8f/06/958f0641d3f43d0b836ff16c8f32c76f.jpg"
              alt=""
              className="w-full h-40 keen-slider__slide"
            />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/564x/c1/9a/1d/c19a1d3823b60a19194fe700f0524ae6.jpg"
              alt=""
              className="w-full h-40 keen-slider__slide"
            />
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

{
  /* This is a JSX comment 
function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
*/
}


const Fallback: FC = () => {
  return(
<div className="animate-ping w-full h-40 rounded-full bg-green-600"></div>
  )
}
export const Banner: FC = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <BannerContent />
    </Suspense>
  );
};
