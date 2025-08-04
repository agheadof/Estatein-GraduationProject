import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import OfficeLocationCard from "../../components/cards/OfficeLocationCard";
import { fetchOffices } from "../../redux/thunks/officesThunks";
import { setActiveTab } from "../../redux/slices/ourOfficesSlice";
import { selectFilteredOffices } from "../../redux/selectors/offices";
import type { RootState, AppDispatch } from "../../redux/store";

function OurOfficeTaps() {
  const dispatch = useDispatch<AppDispatch>();

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

  if (loading) return <p className="text-black dark:text-white">Loading offices...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="flex flex-col mt-10 lg-custom:mt-[60px] 2xl:mt-20 gap-7.5 lg-custom:gap-10 2xl:gap-[50px]">
      <div className="grid grid-cols-3 bg-white97 dark:bg-gray10 gap-2.5 w-fit p-2.5 rounded-lg 2xl:rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => dispatch(setActiveTab(tab))}
            className={`w-full py-3.5 px-5 2xl:py-4.5 2xl:px-6 border border-gray15 rounded-lg 2xl:rounded-[10px] capitalize text-sm/[1.5] 2xl:text-lg font-medium text-black dark:text-white ${
              activeTab === tab ? "bg-white99 dark:bg-gray08" : "bg-white90 dark:bg-gray15"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {filteredOffices.map((office) => (
          <OfficeLocationCard key={office.id} {...office} />
        ))}
      </div>
    </div>
  );
}

export default OurOfficeTaps;
