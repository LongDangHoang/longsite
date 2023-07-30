import { get, writable } from "svelte/store";
import { scrollPosition, elementHeight } from "./pageStore";

const sectionOrdering = {
    "about-me": 0,
    "blog": 1,
    "demo": 2
}

export const aboutMeTransitionProgress = writable(1);
export const blogTransitionProgress = writable(0);
export const demoTransitionProgress = writable(0);


scrollPosition.subscribe((position: number) => {
    aboutMeTransitionProgress.set(
        Math.max(
            0,
            1 - Math.abs(
                (position - sectionOrdering["about-me"] * get(elementHeight))
                / get(elementHeight) * 2
            )
        )
    )

    blogTransitionProgress.set(
        Math.max(
            0,
            1 - Math.abs(
                (position - sectionOrdering["blog"] * get(elementHeight))
                / get(elementHeight) * 2
            )
        )
    )

    demoTransitionProgress.set(
        Math.max(
            0,
            1 - Math.abs(
                (position - sectionOrdering["demo"] * get(elementHeight))
                / get(elementHeight) * 2
            )
        )
    )
});
