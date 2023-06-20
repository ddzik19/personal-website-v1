export const Layout = ({ children, className }) => {
    return (
        <div className={`flex justify-center items-center flex-col ${className}`}>
            <div className="w-[600px] md:w-[900px] lg:w-[1300px] text-left py-[200px] grid md:grid-cols-2">
                {children}
            </div>
        </div>
    )
}
