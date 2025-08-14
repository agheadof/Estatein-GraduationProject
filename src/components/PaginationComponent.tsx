import { useMemo } from "react";

const DOTS = "...";
function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
}

function PaginationComponent({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}) {
  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount * 2 + 5;
    if (totalPages <= totalPageNumbers) return range(1, totalPages);

    const leftSibling = Math.max(currentPage - siblingCount, 1);
    const rightSibling = Math.min(currentPage + siblingCount, totalPages);

    const showLeftDots = leftSibling > 2;
    const showRightDots = rightSibling < totalPages - 1;

    if (!showLeftDots && showRightDots) {
      return [...range(1, 3 + 2 * siblingCount), DOTS, totalPages];
    }
    if (showLeftDots && !showRightDots) {
      return [
        1,
        DOTS,
        ...range(totalPages - (3 + 2 * siblingCount) + 1, totalPages),
      ];
    }
    return [1, DOTS, ...range(leftSibling, rightSibling), DOTS, totalPages];
  }, [currentPage, totalPages, siblingCount]);

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mx-8">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50 dark:bg-gray08 bg-white99 dark:border-gray15 border-white90  dark:text-white text-black "
      >
        First
      </button>

      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50 dark:bg-gray08 bg-white99 dark:border-gray15 border-white90 dark:text-white text-black "
      >
        Prev
      </button>

      {paginationRange.map((p, idx) =>
        p === DOTS ? (
          <span key={idx} className="px-2">
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(Number(p))}
            className={`px-3 py-1 border rounded dark:border-gray15 border-white90 ${
              p === currentPage
                ? "bg-purple60 dark:text-white90 text-black"
                : "bg-white90 text-black"
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50 dark:bg-gray08 bg-white99 dark:border-gray15 border-white90 dark:text-white text-black"
      >
        Next
      </button>

      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50 dark:bg-gray08 bg-white99 dark:border-gray15 border-white90 dark:text-white text-black"
      >
        Last
      </button>
    </div>
  );
}

export default PaginationComponent;
