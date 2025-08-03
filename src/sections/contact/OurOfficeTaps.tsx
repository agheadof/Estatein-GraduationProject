import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import OfficeLocationCard from "../../components/cards/OfficeLocationCard";
import { fetchOffices } from "../../redux/thunks/officesThunks";
import type { RootState, AppDispatch } from "../../redux/store";

function OurOfficeTaps() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    offices: officeLocations,
    loading,
    error,
  } = useSelector((state: RootState) => state.offices);

  const [activeTab, setActiveTab] = useState<
    "all" | "regional" | "international"
  >("all");

  useEffect(() => {
    dispatch(fetchOffices());
  }, [dispatch]);

  const filteredOffices = officeLocations.filter((office) =>
    activeTab === "all"
      ? true
      : office.category.toLowerCase().includes(activeTab)
  );

  const tabs = ["all", "regional", "international"];

  if (loading) return <p className="text-white">Loading offices...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="flex flex-col mt-10 lg-custom:mt-[60px] 2xl:mt-20 gap-7.5 lg-custom:gap-10 2xl:gap-[50px]">
      <div className="grid grid-cols-3 bg-gray10 gap-2.5 w-fit p-2.5 rounded-lg 2xl:rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`w-full py-3.5 px-5 2xl:py-4.5 2xl:px-6 border border-gray15 rounded-lg 2xl:rounded-[10px] capitalize text-sm/[1.5] 2xl:text-lg font-medium text-white ${
              activeTab === tab ? "bg-gray08" : "bg-gray15"
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
