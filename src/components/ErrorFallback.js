export default function ErrorFallback({error, resetErrorBoundary}) {
    return (
        <div role="alert">
            <p>Please provide a valid github username</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}