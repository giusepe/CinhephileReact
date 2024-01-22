export const Header = () => {
  return (
    <div className="flex flex-col justify-start pb-4">
      <div className="relative">
        <img
          className="hidden sm:block w-full h-96 object-cover"
          src="https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="sofa"
        />
        <img
          className="sm:hidden w-full h-8"
          src="https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="sofa"
        />
        <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
          <p className="text-3xl sm:text-4xl font-semibold leading-9 text-white">
            Upcoming Movies
          </p>
        </div>
      </div>
    </div>
  );
};
