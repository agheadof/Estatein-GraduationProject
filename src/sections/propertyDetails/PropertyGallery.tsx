import DescriptionComponent from "../../components/cards/DescriptionComponent"
import KeyFeaturesComponent from "../../components/cards/KeyFeaturesComponent"
import { LocationIcon } from "../../components/icons/FormIcons"
import Gallery from "../../components/Sliders/Gallery"
import { useAppSelector } from "../../redux/hooks"
import type { PropertyType } from "../../redux/slices/propertiesSlice"

interface Id {
  id: string
}

const PropertyGallery = ({ id }: Id) => {
  const property = useAppSelector((state) => {
    const { loading, error } = state.properties
    const item = state.properties.all.find(
      (prop: PropertyType) => prop.id === id
    )
    return { item, loading, error }
  })
  return (
    <div className="flex flex-col gap-12 text-white">
      <div className="flex justify-between items-center">
        <div className="flex flex-col lg-custom:flex-row items-center gap-5">
          <h1 className="font-semibold text-xl  2xl:text-3xl  ">
            {property.item?.title}
          </h1>
          <div className="border border-gray15 rounded-lg p-2.5 flex gap-1.5">
            <LocationIcon />
            <h2 className="font-medium ">{property.item?.location}</h2>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-gray60 font-medium">Price</p>
          <p className="font-semibold text-lg 2xl:text-2xl">{`$${property.item?.Price}`}</p>
        </div>
      </div>
      <Gallery
        perView={2}
        thumbNumber={9}
        images={property.item?.gallery!}
        className="hidden lg-custom:flex"
      />
      <Gallery
        perView={1}
        thumbNumber={4}
        images={property.item?.gallery!}
        className=" lg-custom:hidden"
      />

      <div className="flex flex-col lg-custom:flex-row gap-5">
        <DescriptionComponent
          property={property.item!}
          loading={property.loading}
          error={property.error}
        />
        <KeyFeaturesComponent
          property={property.item!}
          loading={property.loading}
          error={property.error}
        />
      </div>
    </div>
  )
}

export default PropertyGallery
