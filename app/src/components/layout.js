export const Layout = ({ children, className }) => {
    return (
        <div className={`${className}`}>
            <div className="flex justify-center md:w-[60%] mx-auto">
                {children}
            </div>
        </div>
    )

}