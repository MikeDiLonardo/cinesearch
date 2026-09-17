import Fallback from "./Fallback/Fallback"

export default function ErrorBoundaryFallback() {
    return (
        <Fallback 
            title="An Error Occured" 
            subtitle="Please try again later." 
        />
    )
}

