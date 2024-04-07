import React, { useState } from 'react';
import Lightbox, { ImagesListType } from 'react-spring-lightbox';
interface ModalImageProps {
    images: ImagesListType;
}

const ModalImage: React.FC<ModalImageProps> = ({ images }) => {
    const [currentImageIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(true);

    const gotoPrevious = () =>
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

    const gotoNext = () =>
        currentImageIndex + 1 < images.length &&
        setCurrentIndex(currentImageIndex + 1);

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
        <Lightbox
            isOpen={isOpen}
            onPrev={gotoPrevious}
            onNext={gotoNext}
            images={images}
            currentIndex={currentImageIndex}
            /* Add your own UI */
            // renderHeader={() => (<CustomHeader />)}
            // renderFooter={() => (<CustomFooter />)}
            // renderPrevButton={() => (<CustomLeftArrowButton />)}
            // renderNextButton={() => (<CustomRightArrowButton />)}
            // renderImageOverlay={() => (<ImageOverlayComponent >)}

            /* Add styling */
            // className="cool-class"
           // style={{ background: "#99f779" }}
           style={{ background: "gray" }}

            /* Handle closing */
             onClose={closeModal}

            /* Use single or double click to zoom */
            singleClickToZoom

            /* react-spring config for open/close animation */
            // pageTransitionConfig={{
            //   from: { transform: "scale(0.75)", opacity: 0 },
            //   enter: { transform: "scale(1)", opacity: 1 },
            //   leave: { transform: "scale(0.75)", opacity: 0 },
            //   config: { mass: 1, tension: 320, friction: 32 }
            // }}
        />
        </>
    );
};

export default ModalImage;
