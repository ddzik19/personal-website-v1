export const Button = ({ children, className, href, hover_color = "orange" | "blue" }) => {

  if (hover_color === "orange") {
    hover_color = "hover:bg-damo-tirtrary"
  } else if (hover_color === "blue") {
    hover_color = "hover:bg-damo-secondary"
  } else {
    hover_color = "hover:bg-damo-tirtrary"
  }

  return (
    <a href={href}
      className={`capitalize border-[1px] border-black font-semibold px-[30px] py-[10px] text-center rounded-lg transition-all ${className} ${hover_color} hover:text-[#ffffff]`}
    >
      {children}
    </a>
  );
};
