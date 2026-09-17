import type { LayoutContextType } from "../../../../types/layout-context-type";
import { createContext } from "react";


export const LayoutContext = createContext<LayoutContextType | null>(null);
