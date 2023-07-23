import { writable  } from "svelte/store";

export const enum AboutMeTarget {
    DATA_SCIENCE = "data-science",
    SOFTWARE_ENG = "software-eng",
}

export const scrollPosition = writable(0);
export const aboutMeTarget = writable(AboutMeTarget.DATA_SCIENCE);
