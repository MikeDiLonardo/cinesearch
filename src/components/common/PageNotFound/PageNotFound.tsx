import Fallback from "../Fallback/Fallback"

export default function PageNotFound() {
    return (
        <Fallback 
            title="Page Not Found" 
            subtitle="We couldn't find the page you're looking for.
                      Please make sure the link was typed correctly." 
        />
    )
}


