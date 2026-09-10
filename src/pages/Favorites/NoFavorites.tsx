import Fallback from "../../components/common/Fallback/Fallback"

export default function NoFavorites() {
    return (
        <Fallback 
            title="Favorites" 
            subtitle="You haven't saved any favorites yet!
                      Click the star icon on any movie to get started."
        />               
    )    
}

