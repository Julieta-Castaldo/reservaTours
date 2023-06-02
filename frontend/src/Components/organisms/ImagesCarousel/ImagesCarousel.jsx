import { CircleButton } from "../../molecules/CircleButton/CircleButton";
import { useEffect, useState } from "react";
import { IconArrowRight2 } from "../../svgs/IconArrowRight2";
import './ImagesCarousel.css'

export const ImagesCarousel = ({ isOpen, onClose, images }) => {
    if (!isOpen) return null;
    const [selectedImage, setSelectedImage] = useState(0)
    
    return (
        <div className="modal-overlay">
            <section className="modal">
                <button className="modal-close" onClick={onClose}>
                    X
                </button>

                <div className="modal-content" style={{ display: 'flex', alignItems: 'center' }}>
                    <CircleButton
                        onClick={() => {
                            if (selectedImage !== 0) {
                                setSelectedImage(selectedImage - 1)
                            }
                        }}
                        src={
                            <IconArrowRight2
                                size='18'
                                className='iconSVG'
                            />
                        }
                        borderColor={'#05848A'}
                        color={'white'}
                        hoverColor={'white'}
                        bgColor={'#58C1CE'}
                        hoverBgColor={'#A0D7DE'}
                        width={'30px'}
                        height={'30px'}
                        disabled={selectedImage === 0}
                    />
                    <div>
                        {
                            images && images.map((image, idx) => {
                                if (idx === selectedImage) {
                                    return (
                                        <div className='carouselImage' style={{ backgroundImage: `url(${image.url})`}}>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <CircleButton
                        onClick={() => {
                            if (images && (images.length - 1) !== selectedImage) {
                                setSelectedImage(selectedImage + 1)
                            }
                        }}
                        src={
                            <IconArrowRight2
                                size='18'
                                className='iconSVG'
                            />
                        }
                        borderColor={'#05848A'}
                        color={'white'}
                        hoverColor={'white'}
                        bgColor={'#58C1CE'}
                        hoverBgColor={'#A0D7DE'}
                        width={'30px'}
                        height={'30px'}
                        disabled={selectedImage === (images.length - 1)}
                    />
                </div>
            </section>
        </div>
    )
}