import { Header } from "./header";
import Image from 'next/image'

const ServiceBox = ({ image, alt, title, desc }) => {
    return (
        <div className="flex justify-center items-center flex-col text-center">
            <Image
                src={image}
                width={100}
                height={100}
                alt={alt}
            />
            <Header>{title}</Header>
            <p className="text-[18px]">{desc}</p>
        </div>
    )
}

export default ServiceBox;