import { CSSProperties } from "react";


// available windows
export type WindowType = "profile" | "terminal" | "settings";



/**
 *   DESKTOP ICONS
 *
 */

export interface DIStyle {
  areabox: CSSProperties;
  icon: CSSProperties;
  label: CSSProperties;
}

export interface DIProps {
  icon: WindowType;
}



