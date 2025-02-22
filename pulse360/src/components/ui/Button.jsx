export function Button({ children, onClick, className }) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-lg bg-teal-600 text-white ${className} hover:opacity-80`}
        >
            {children}
        </button>
    );
}
