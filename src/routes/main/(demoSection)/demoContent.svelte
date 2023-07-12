<script lang="ts">
    import './demoStyles.css';
    import { opacityByDistanceFromScrollPosition } from '../pageContent';
    import { onMount } from 'svelte';
    import { scrollPosition } from '../pageStore';

    let contentDiv: HTMLElement;

    onMount(() => {
        let div = document.getElementById("demo-background");
        if (div) contentDiv = div;
    });

    let currentScrollPosition = 0;
    scrollPosition.subscribe((value) => {
        currentScrollPosition = value;
    });

    $: divOpacity = opacityByDistanceFromScrollPosition(contentDiv, currentScrollPosition);
</script>

<div class='demo-content' id="demo-content" style="opacity: {divOpacity}">
    <h1>Section 3</h1>
    <p>Section 3</p>
</div>
