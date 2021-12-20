const Button = ({ className, text }) => {
    return (
        <button className={ `button ${className}` }>
            { text }
        </button>
    )
}

export default Button
