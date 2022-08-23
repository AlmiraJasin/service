import "./style.scss"

export const TextField = ({label, type="text", name, onChange, value}) => {
    return (
        <div className="textField">
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} type={type} value={value} onChange={onChange}/>
        </div>
    )
}