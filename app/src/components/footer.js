const Footer = () => {
  return (
    <div className="grid md:grid-cols-3">
      <div className="p-4">
        <ul className="decoration-none">
          <li>
            <a href="">Test</a>
          </li>
          <li>
            <a href="">Test</a>
          </li>
          <li>
            <a href="">Test</a>
          </li>
        </ul>
      </div>
      <div className="p-4">
        <form action="" className="inline-block">
          <button className="px-5 py-3 w-[100px] bg-red-500">Join</button>
          <input type="text" placeholder="email" type="email" />
        </form>
      </div>
    </div>
  );
};

export default Footer;
