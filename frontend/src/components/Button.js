const Button = ({ className, text, type}) => {
    return (
        <button 
            className={ `button ${className}` }
            type={ type }
        >
            { text }
        </button>
    )
}

export default Button
