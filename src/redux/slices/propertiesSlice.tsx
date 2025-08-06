import type { PropertyType } from "../../types/Property";
import { createGenericSlice } from "./createGenericSlice";

const transformProperty = (property: any, id: string): PropertyType => ({
    id,
    image: property.images?.[0] || '',
    title: property.type || 'Property',
    desc: property.description?.slice(0, 100) + '...',
    Price: `$${property.price?.toLocaleString() || 'N/A'}`,
    details: [
        {
            label: `${property.bedrooms|| 0}-Bedroom`,
            icon: "bed",
        },
        {
            label: `${property.bathrooms|| 0}-Bathroom`,
            icon: "bath",
        },
        {
            label: `Villa`,
            icon: "villa",
        },
    ],

    descriptionLong: property.description,
    gallery: property.images,
    location: property.location,
    tags: "Coastal Escapes - Where Waves Beckon",
})

const { slice, fetchEntities } = createGenericSlice<PropertyType, PropertyType>({
  name: "properties",
  transform: transformProperty,
  itemsPerPage: 4,
});

export const fetchProperties = fetchEntities;
export default slice.reducer;
