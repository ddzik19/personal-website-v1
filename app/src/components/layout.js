export const Layout = ({ children, c1, c2 }) => {
  return (
    <div className={`flex justify-center items-center ${c1}`}>
      <div
        className={`w-[600px] md:w-[900px] lg:w-[1300px] text-left py-[200px] ${c2}`}
      >
        {children}
      </div>
    </div>
  );
};
