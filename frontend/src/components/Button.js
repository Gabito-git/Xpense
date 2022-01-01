const Button = ({ className, text, type, onClick}) => {
    return (
        <button 
            className={ `button ${className}` }
            type={ type }
            onClick={ onClick }
        >
            { text }
        </button>
    )
}

export default Button
