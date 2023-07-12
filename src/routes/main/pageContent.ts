export const opacityByDistanceFromScrollPosition = (contentDiv: HTMLElement, scrollPosition: number) => {
    /* Get the opacity of a div by the distance from it to the scroll position */
    if (contentDiv) {
        const diff = Math.abs(scrollPosition - contentDiv.offsetTop);

        if (diff > contentDiv.clientHeight / 2)
            return 0;
        else 
            return 1 - (diff / contentDiv.clientHeight * 2);
    }
    return 1
};

export const opacityByTopHeight = (top: number, height: number) => {
    /* Get the opacity of a div by the value of its top viewport */
    if (top > height / 2)
        return 0;
    else 
        return 1 - (top / height * 2);
};
