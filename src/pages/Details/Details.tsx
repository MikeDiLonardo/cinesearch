import MediaItem from "../../components/cards/MediaItem/MediaItem"
import FavoriteIcon from "../../components/icons/FavoriteIcon"
// import styles from "./Details.module.css";

export default function Details() {
    return (<>
        <div className="media-info">
            <MediaItem view="grid" />
            <p>Hell House LLC</p>
            <p>2019 - DIrected by Stephen Cognetti</p>
            <p>96 mins</p>
            <FavoriteIcon width={18} height={18} className="rating" strokeWidth={1}/>
            <FavoriteIcon width={18} height={18} className="rating" strokeWidth={1}/>
            <FavoriteIcon width={18} height={18} className="rating" strokeWidth={1}/>
            <FavoriteIcon width={18} height={18} className="rating" strokeWidth={1}/>
            <FavoriteIcon width={18} height={18} className="rating" strokeWidth={1}/>
            <ul>
                <li>Horror</li>
                <li>Mystery</li>
                <li>Thriller</li>
                <li>Supernatural</li>
                <li>Found Footage</li>
            </ul>
        </div>
        <div className="media-summary">
            <p>New York's Scariest Haunted House Tour</p>
            <p>Five years after 15 people died on a Halloween attraction's opening night, a documentary crew uncovers footage revealing the truth. The tapes follow a haunt team into the abandoned Abaddon Hotel, documenting their descent from eerie technical glitches into a violent, supernatural massacre. This raw evidence proves the "malfunction" in the basement was something far more sinister.</p>
        </div>
        <div className="cast-crew">
            <p>Cast</p>
        </div>
    </>)    
}