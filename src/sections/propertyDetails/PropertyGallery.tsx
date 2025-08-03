// import DescriptionComponent from "../../components/cards/DescriptionComponent"
// import KeyFeaturesComponent from "../../components/cards/KeyFeaturesComponent"
import { LocationIcon } from "../../components/icons/FormIcons"
import Gallery from "../../components/Sliders/Gallery"

const images = [
  "/assets/images/Gallery/1.webp",
  "/assets/images/Gallery/2.webp",
  "/assets/images/Gallery/3.webp",
  "/assets/images/Gallery/4.webp",
  "/assets/images/Gallery/5.webp",
  "/assets/images/Gallery/6.webp",
  "/assets/images/Gallery/7.webp",
  "/assets/images/Gallery/8.webp",
  "/assets/images/Gallery/9.webp",
  "/assets/images/Gallery/10.webp",
  "/assets/images/Gallery/11.webp",
  "/assets/images/Gallery/12.webp",
]

const PropertyGallery = () => {
  return (
    <div className="flex flex-col gap-12 text-white">
      <div className="flex justify-between items-center">
        <div className="flex flex-col lg-custom:flex-row items-center gap-5">
          <h1 className="font-semibold text-xl  2xl:text-3xl  ">
            Seaside Serenity Villa
          </h1>
          <div className="border border-gray15 rounded-lg p-2.5 flex gap-1.5">
            <LocationIcon />
            <h2 className="font-medium ">Malibu, California</h2>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-gray60 font-medium">Price</p>
          <p className="font-semibold text-lg 2xl:text-2xl">$1,250,000</p>
        </div>
      </div>
      <Gallery
        perView={2}
        thumbNumber={9}
        images={images}
        className="hidden lg-custom:flex"
      />
      <Gallery
        perView={1}
        thumbNumber={4}
        images={images}
        className=" lg-custom:hidden"
      />

      <div className="flex flex-col lg-custom:flex-row gap-5">
        {/* <DescriptionComponent />
        <KeyFeaturesComponent /> */}
      </div>


    </div>
  )
}

export default PropertyGallery
