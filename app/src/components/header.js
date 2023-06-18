export const Header = ({ children, className }) => {
  return (
    <h2 className={`text-[50px] ${className}  font-bold capitalize text-damo-primary`}>
      {children}
    </h2>
  );
};
