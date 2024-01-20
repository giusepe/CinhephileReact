type PaginationItemProps = {
  pageNumber: number;
  value: string;
};

export function PaginationItem({ pageNumber, value }: PaginationItemProps) {
  return (
    <a
      href={"?page=" + pageNumber}
      className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
    >
      {/* className="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10" */}
      {value}
    </a>
  );
}

type PaginationProps = {
  PageNumbers: number[];
};
export const Pagination = ({ PageNumbers }: PaginationProps) => {
  return (
    <div className="max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-center">
        <nav className="flex space-x-2" aria-label="Pagination">
          <PaginationItem value="Previous" pageNumber={0} key={"Previous"} />
          {PageNumbers.slice(1, 10).map((i) => (
            <PaginationItem
              value={i.toString()}
              pageNumber={i}
              key={i.toString()}
            />
          ))}
          <PaginationItem value="Next" pageNumber={0} key={"Next"} />
        </nav>
      </div>
    </div>
  );
};
