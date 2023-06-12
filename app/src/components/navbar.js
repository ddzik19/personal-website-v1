import useWindowDimensions from "../hooks/use-window-dimensions";

const Navbar = () => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      {width > 1280 && (
        <div className="flex justify-end h-2 py-2">
          <span id="span" className="mr-4">
            <a href="#">info@d2.ie</a>
          </span>
        </div>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-8 w-auto mr-4" />
        </div>
        {width > 1280 && (
          <div className="flex items-center">
            <ul className="flex">
              <li className="px-10 py-5 capitalize">
                <a href="#">Test</a>
              </li>
              <li className="px-10 py-5 capitalize">
                <a href="#">Test</a>
              </li>
              <li className="px-10 py-5 capitalize">
                <a href="#">Test</a>
              </li>
              <li className="px-10 py-5 capitalize">
                <a href="#">Test</a>
              </li>
            </ul>
          </div>
        )}
        {width <= 1280 && (
          <ul className="flex">
            <li className="px-10 py-5 capitalize">
              <a href="#">Test</a>
            </li>
            <li className="px-10 py-5 capitalize">
              <a href="#">Test</a>
            </li>
            <li className="px-10 py-5 capitalize">
              <a href="#">Test</a>
            </li>
            <li className="px-10 py-5 capitalize">
              <a href="#">Test</a>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
