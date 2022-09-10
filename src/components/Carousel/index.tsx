/* eslint-disable @next/next/no-img-element */
import { ImageProps } from "../../types/carouselImages";
import Script from "next/script";

interface CarouselProps {
  images: ImageProps[];
}

export default function Carousel({ images }: CarouselProps) {
  return (
    <>
      <div
        className="gallery js-flickity"
        data-flickity-options='{ "cellAlign": "left", "contain": true, "freeScroll": true, "wrapAround": true,  "prevNextButtons": false, "autoPlay": 2000, "pauseAutoPlayOnHover": false, "fullscreen": true, "setGallerySize": true, "resize": true}'
      >
        {images.map((image) => {
          return (
            <div className="gallery-cell" key={image.url}>
              <img src={image.url} alt={image.label} />
            </div>
          );
        })}
      </div>

      <Script
        src="https://npmcdn.com/flickity@2.3.0/dist/flickity.pkgd.js"
        strategy="lazyOnload"
        onLoad={() => console.log("loaded Flickity")}
      />
    </>
  );
}
