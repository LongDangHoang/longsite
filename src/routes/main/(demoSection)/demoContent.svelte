<script lang="ts">
    import './demoStyles.scss';
    import { scrollPosition } from '../pageStore';

    let contentDiv: HTMLElement;
    let divTranslateY = 0;
    let divOpacity = 0;

    let currentScrollPosition = 0;
    scrollPosition.subscribe((value) => {
        currentScrollPosition = value;
    });

    $: if (contentDiv) {
        let diff = currentScrollPosition - contentDiv.offsetTop;
        divOpacity = Math.max(0, 1  - Math.abs(diff) / contentDiv.clientHeight * 2); 
        divTranslateY = diff;
    }
</script>

<div bind:this={contentDiv} class='demo-content' id="demo-content" style="opacity: {divOpacity}; transform: translate(0, {divTranslateY}px)">
    <h1>Section 3</h1>
    <p>Section 3</p>
</div>
