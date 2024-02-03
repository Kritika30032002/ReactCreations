export function Button({ children, onClick }) {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
}
