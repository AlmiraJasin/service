import "./style.scss"

export const Button = ({ children, variant="primary", onClick}) => {
    
    return (
        <button className={`btn ${variant}`} onClick={onClick}>
            {children}
        </button>
    )
}