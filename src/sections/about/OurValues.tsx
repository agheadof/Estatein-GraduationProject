import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchFaqs, getFaqsByPag } from "../../redux/slices/faqsSlice";
import type { RootState } from "../../redux/store";
import { useAppDispatch } from "../../redux/types/typed-hooks";

const FaqList = () => {
  const dispatch = useAppDispatch();
  const currentFaqs = useSelector((state :RootState) => state.faqs.currentFaqs);
  const loading = useSelector((state :RootState) => state.faqs.loading);
  const error = useSelector((state :RootState) => state.faqs.error);
  const faqs = useSelector((state: any) => state.faqs.faqs);

  useEffect(() => {
    dispatch(fetchFaqs());
  }, [dispatch]);

  useEffect(() => {
    if (!loading && !error) {
      dispatch(getFaqsByPag({ page: 1, itemsPerPage: 6 }));
    }
  }, [loading, error, dispatch]);

  if (loading) return <p className="text-center">Loading FAQs...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (faqs.length === 0) return <p className="text-center">No FAQs available.</p>;

  return (
    <div>
      <ul className="space-y-6">
        {currentFaqs.map((faqs1,index) => (
          <li key={index} className="p-4 border rounded-lg bg-white">
            <h3 className="font-semibold text-lg">{faqs1.question}</h3>
            <p className="text-gray-700 mt-2">{faqs1.description}</p>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default FaqList;