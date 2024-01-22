export default function Spinner() {
  return (
    <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
      <div
        className="fixed top-0 flex flex-col justify-center items-center z-50 animate-spin w-10 h-10 border-[4px] border-current border-t-transparent text-purple-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
