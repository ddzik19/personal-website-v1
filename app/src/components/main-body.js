import Navbar from "./navbar"

const MainBody = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[90%_1fr_10%]">
            <div className="md:px-[300px] bg-damo-darker-green">
                {/* Content for the left div */}
                yayayayay
            </div>
            <div className="">
                {/* Content for the right div */}
                <Navbar />
            </div>
        </div>
    )
}

export default MainBody