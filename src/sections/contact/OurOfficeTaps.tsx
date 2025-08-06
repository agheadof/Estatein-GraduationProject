import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import OfficeLocationCard from "../../components/cards/OfficeLocationCard";
import { fetchOffices } from "../../redux/thunks/officesThunks";
import { setActiveTab } from "../../redux/slices/ourOfficesSlice";
import { selectFilteredOffices } from "../../redux/selectors/offices";
import type { RootState, AppDispatch } from "../../redux/store";

function OurOfficeTaps() {
  const dispatch = useDispatch<AppDispatch>();
  const [isFading, setIsFading] = useState(false);

  const filteredOffices = useSelector(selectFilteredOffices);
  const { loading, error, activeTab } = useSelector(
    (state: RootState) => state.offices
  );

  const tabs: ("all" | "regional" | "international")[] = [
    "all",
    "regional",
    "international",
  ];

  useEffect(() => {
    dispatch(fetchOffices());
  }, [dispatch]);

  if (loading)
    return <p className="text-black dark:text-white">Loading offices...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="flex flex-col mt-10 lg-custom:mt-[60px] 2xl:mt-20 gap-7.5 lg-custom:gap-10 2xl:gap-[50px]">
      <div className="flex w-full sm:w-fit bg-white97 dark:bg-gray10 gap-2.5 p-2.5 rounded-lg 2xl:rounded-xl overflow-x-auto whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setIsFading(true);
              setTimeout(() => {
                dispatch(setActiveTab(tab));
                setIsFading(false);
              }, 200);
            }}
            className={`min-w-[105px] md:min-w-[125px] 2xl:min-w-[159px] px-4 py-3.5 2xl:py-4.5 2xl:px-7 border dark:border-gray15 border-purple70 rounded-lg 2xl:rounded-[10px] capitalize text-sm/[1.5] 2xl:text-lg font-medium text-black dark:text-white ${
              activeTab === tab
                ? "bg-white99 dark:bg-gray08"
                : "bg-white90 dark:bg-gray15"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div
        className={`grid md:grid-cols-2 grid-cols-1 gap-5 transition-opacity duration-300 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {filteredOffices.map((office) => (
          <OfficeLocationCard key={office.id} {...office} />
        ))}
      </div>
    </div>
  );
}

export default OurOfficeTaps;
