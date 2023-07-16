<script lang="ts">
    import './demoStyles.scss';
    import { opacityByDistanceFromScrollPosition } from '../pageContent';
    import { onMount } from 'svelte';
    import { scrollPosition } from '../pageStore';

    let contentDiv: HTMLElement;
    let divOpacity = 0;

    onMount(() => {
        let div = document.getElementById("demo-background");
        if (div) contentDiv = div;
    });

    let currentScrollPosition = 0;
    scrollPosition.subscribe((value) => {
        currentScrollPosition = value;
    });

    // $: divOpacity = opacityByDistanceFromScrollPosition(contentDiv, currentScrollPosition);
    divOpacity = 1;
</script>

<div class='demo-content' id="demo-content" style="opacity: {divOpacity}">
    <h1>Section 3</h1>
    <p>Section 3</p>
</div>
