export interface CastCrew {
    id: number; // for entire database
    credit_id: string; // per movie
    name: string;
    profile_path: string;
    character?: string;
    job?: string;    
}