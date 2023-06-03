import useWindowDimensions from '../hooks/use-window-dimensions'

const Navbar = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div>
      {width > 1280 ? (
        <div className='flex items-center justify-center h-screen'>
          yaya
        </div>
      ) : (
        <>
        </>
      )}
    </div>
  )
};

export default Navbar;
