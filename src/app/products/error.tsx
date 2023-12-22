"use client"
//Error handling in Layouts
export default function Errorboundary({
    error,
    reset
}: {
    error: Error;
    reset: () => void
}) {
    return (
        <div>
            {error.message} 
            <button onClick={reset}>
                Try Again
            </button>
        </div>
    )
}