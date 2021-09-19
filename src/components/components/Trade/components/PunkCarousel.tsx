import { FunctionComponent, useEffect, useState } from "react";

interface PunkCarouselProps {
    
}

const getUrl = (id: string) => `https://www.larvalabs.com/public/images/cryptopunks/punk${id}.png`;
 
const PunkCarousel: FunctionComponent<PunkCarouselProps> = () => {
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [activeImageIndex, setActiveImageIndex] = useState<number>();
    useEffect(() => {
        const imagesPreload = Array.from(Array(100).keys()).map(
            () => Math.floor(Math.random()* 10000 + 1).toString().padStart(4, '0')
        ).map(getUrl).map(
            (src) => {
                const readyPromise = new Promise<HTMLImageElement>((resolve, reject) => {
                    
                    const img = new Image();
                    img.onload = () => resolve(img);
                    img.onerror = () => reject('could not load punk');
                    img.src = src;

                });
                

                return readyPromise;
            }
        )

        Promise.all(imagesPreload).then((images) => setImages(images))
    }, []);

    useEffect(() => {
        const timerId = setInterval(() => {
            if (images.length > 0) {
                const randomIndex = Math.floor(Math.random() * 99 + 1);
                console.log('random image', randomIndex);
                setActiveImageIndex(randomIndex);
   
           }

        }, 400)

        return () => clearInterval(timerId);

    }
    , [images]);


    
    if (!activeImageIndex || !images) { return <svg height="120px" width="120px"></svg>; }
    return (<img height="120px" width="120px" alt={`Cryptopunk`} className="pixelated" src={images[activeImageIndex].src} />) ;
}
 
export default PunkCarousel;