export default function Spinner() {
  return (
    <div
      className="fixed top-0 h-screen w-full bg-black bg-opacity-70 backdrop-blur-sm flex flex-col justify-center items-center z-50 animate-spin w-10 h-10 border-[3px] border-current border-t-transparent text-purple-600 rounded-full"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
