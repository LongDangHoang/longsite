import { scrollPosition } from "./pageStore";
import { get } from 'svelte/store';

/** Get the distance from the div element to the scroll position as fraction of  */
export const distFromDivToScrollPosition = (contentDiv: HTMLElement) => {
    const diff = get(scrollPosition) - contentDiv.offsetTop;
    return Math.max(0, 1  - diff / contentDiv.clientHeight * 2);
};
