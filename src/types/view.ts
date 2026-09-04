import type { Person } from "./person";

export interface View {
    page: string;
    person: Person;
}