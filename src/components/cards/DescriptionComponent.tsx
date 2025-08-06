import { type PropertyType } from "../../redux/slices/propertiesSlice"

interface DescriptionProps {
  property: PropertyType
  loading?: boolean
  error?: string | null
}

const DescriptionComponent = ({
  property,
  error,
  loading,
}: DescriptionProps) => {
  const castingToNumber = (input: string) => {
    const result = input.replace(/\D/g, "").padStart(2, "0")
    return result
  }

  return (
    <div className="p-5 lg-custom:p-10 2xl:p-[50px] rounded-[10px] border border-gray15 flex flex-col gap-5 lg-custom:gap-10 2xl:gap-[50px] w-full lg-custom:w-1/2 h-fit">
      <div className="flex flex-col gap-1.5 lg-custom:gap-2.5 2xl:gap-3.5">
        <h3 className="text-white font-semibold text-lg leading-[150%] lg-custom:text-xl 2xl:text-2xl">
          Description
        </h3>

        {loading ? (
          <p className="text-white">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p className="text-gray60 font-medium text-sm leading-[150%] lg-custom:text-base 2xl:text-lg">
            {property?.descriptionLong || "No description available."}
          </p>
        )}
      </div>

      {!loading && !error && property && (
        <div className="flex gap-20 border-t border-t-gray15 pt-4">
          <div className="flex flex-col">
            <div className="flex gap-1 lg-custom:gap-1.5">
              <img
                src="/assets/icons/FeaturedProperties/bedroom.svg"
                alt="icon"
                className="w-5 h-5 2xl:w-6 2xl:h-6"
              />
              <span className="text-gray60 font-medium leading-[150%] text-sm 2xl:text-lg">
                Bedrooms
              </span>
            </div>
            <span className="text-white font-semibold leading-[150%] text-lg lg-custom:text-xl 2xl:text-lg">
              {castingToNumber(property.details[0].label)}
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-1 lg-custom:gap-1.5">
              <img
                src="/assets/icons/FeaturedProperties/bathroom.svg"
                alt="icon"
                className="w-5 h-5 2xl:w-6 2xl:h-6"
              />
              <span className="text-gray60 font-medium leading-[150%] text-sm 2xl:text-lg">
                Bathrooms
              </span>
            </div>
            <span className="text-white font-semibold leading-[150%] text-lg lg-custom:text-xl 2xl:text-lg">
              {castingToNumber(property.details[1].label)}
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-1 lg-custom:gap-1.5">
              <img
                src="/assets/icons/FeaturedProperties/area.svg"
                alt="icon"
                className="w-5 h-5 2xl:w-6 2xl:h-6"
              />
              <span className="text-gray60 font-medium leading-[150%] text-sm 2xl:text-lg">
                Area (m²)
              </span>
            </div>
            <span className="text-white font-semibold leading-[150%] text-lg lg-custom:text-xl 2xl:text-lg">
              {castingToNumber(property.details[2].label)}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default DescriptionComponent
