import { useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { shallowEqual } from "react-redux"

import Gallery from "../../components/Sliders/Gallery"
import DescriptionComponent from "../../components/cards/DescriptionComponent"
import KeyFeaturesComponent from "../../components/cards/KeyFeaturesComponent"
import { LocationIcon } from "../../components/icons/FormIcons"

import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { fetchPropertyById } from "../../redux/thunks/propertyByIdThunk"
import { setCurrentProperty } from "../../redux/slices/propertiesSlice"

interface PropertyGalleryProps {
  id: string
}

const PropertyGallery = ({ id }: PropertyGalleryProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { current, error, loading } = useAppSelector(
    (state) => ({
      current: state.properties.current,
      error: state.properties.error,
      loading: state.properties.loading,
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(setCurrentProperty(id))
    if (!current && id) dispatch(fetchPropertyById(id))
  }, [id, dispatch])

  useEffect(() => {
    if (error === "not-found") navigate("/properties")
  }, [error, navigate])

  const galleryDesktop = useMemo(
    () =>
      current?.gallery && (
        <Gallery
          perView={2}
          thumbNumber={9}
          images={current.gallery}
          className="hidden lg-custom:flex"
        />
      ),
    [current?.gallery]
  )

  const galleryMobile = useMemo(
    () =>
      current?.gallery && (
        <Gallery
          perView={1}
          thumbNumber={4}
          images={current.gallery}
          className="lg-custom:hidden"
        />
      ),
    [current?.gallery]
  )

  if (loading) return <p className="text-red-700 font-bold">Loading...</p>

  return (
    <div className="flex flex-col gap-12 text-white">
      <div className="flex justify-between items-center">
        <div className="flex flex-col lg-custom:flex-row items-center gap-5">
          <h1 className="font-semibold text-xl 2xl:text-3xl">
            {current?.title}
          </h1>
          <div className="border border-gray15 rounded-lg p-2.5 flex gap-1.5">
            <LocationIcon />
            <h2 className="font-medium">{current?.location}</h2>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-gray60 font-medium">Price</p>
          <p className="font-semibold text-lg 2xl:text-2xl">{current?.Price}</p>
        </div>
      </div>

      {galleryDesktop}
      {galleryMobile}

      <div className="flex flex-col lg-custom:flex-row gap-5">
        <DescriptionComponent />
        <KeyFeaturesComponent />
      </div>
    </div>
  )
}

export default PropertyGallery
