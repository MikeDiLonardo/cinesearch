import { createContext } from "react";
import type { LayoutContextType } from "../../../../types/layout-context-type";

export const LayoutContext = createContext<LayoutContextType | null>(null);
