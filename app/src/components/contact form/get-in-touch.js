import { Layout } from "../layout";
import Form from "./form";
import { Header } from "../header";
import { Subheader } from "../subheader";
import { MdEmail, MdSmartphone } from "react-icons/md";

const GetInTouch = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2 border-[1px] border-black shadow-lg rounded-3xl p-20">
        <div className="pr-10">
          <Header>Get in Touch</Header>
          <Subheader>yayayayyaayyaya</Subheader>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            rutrum ut tellus ac elementum. Nulla porttitor metus a nunc
            vulputate, sed vulputate enim finibus. Maecenas molestie enim
            pellentesque nulla condimentum, tempor dictum odio ultricies. Mauris
            nec lorem imperdiet, tincidunt elit at, aliquam est.
          </p>
          <div className="grid grid-cols-2 pt-10">
            <a
              href="mailto:enquire@ddzik.com"
              className="inline-block hover:underline hover:cursor-pointer hover:text-damo-bright-orange pb-2"
            >
              <MdEmail className="inline-block" /> enquire@ddzik.com
            </a>
            <a
              href="mailto:info@ddzik.com"
              className="inline-block hover:underline hover:cursor-pointer hover:text-damo-bright-orange pb-2"
            >
              <MdEmail className="inline-block" /> info@ddzik.com
            </a>
            <a
              href="tel:+3530871210261"
              className="inline-block hover:underline hover:cursor-pointer hover:text-damo-bright-orange pb-2"
            >
              <MdSmartphone className="inline-block" /> +353 087 121 0261
            </a>
          </div>
        </div>
        <Form />
      </div>
    </Layout>
  );
};

export default GetInTouch;
