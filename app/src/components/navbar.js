import useWindowDimensions from "../hooks/use-window-dimensions";

const Navbar = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="h-8 w-auto mr-4" />
      </div>
      <div>
        {width > 1280 && (
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
    </div>
  );
};

export default Navbar;
