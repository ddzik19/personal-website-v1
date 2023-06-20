export const Subheader = ({ className, children }) => {
    return (
        <h4 className={`text-damo-bright-orange text-[20px] leading-[50px] ${className}`}>
            {children}
        </h4>
    )
}