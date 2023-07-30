const foregroundComponents: Element[] = [];

const initializeForegroundComponents = () => {
    if (foregroundComponents.length == 0)
        Array.from(document.getElementsByClassName("foreground")).forEach(element => {
            foregroundComponents.push(element);
        });
    else {
        console.log("Foreground components already initialized!")
    }
}


