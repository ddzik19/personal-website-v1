export const Button = ({ children, className, href }) => {
  return (
    <a href={href}
      className={`capitalize border-[1px] border-black font-semibold px-[30px] py-[10px] text-center rounded-lg ${className} hover:bg-damo-tirtrary hover:text-[#ffffff]`}
    >
      {children}
    </a>
  );
};
