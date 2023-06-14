export const Button = ({ children, className }) => {
  return (
    <button className={`capitalize border-[1px] boder-black font-semibold px-[30px] py-[10px] text-center rounded-lg ${className} hover:bg-damo-primary hover:text-[#ffffff]`}>
      {children}
    </button>
  );
};
