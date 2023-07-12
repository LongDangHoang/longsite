<script lang="ts">
    import './aboutStyles.css';
    import { opacityByDistanceFromScrollPosition } from '../pageContent';
    import { onMount } from 'svelte';
    import { scrollPosition } from '../pageStore';

    let contentDiv: HTMLElement;

    onMount(() => {
        let div = document.getElementById("about-me-background");
        if (div) contentDiv = div;
    });

    let currentScrollPosition = 0;
    scrollPosition.subscribe((value) => {
        currentScrollPosition = value;
    });

    $: divOpacity = opacityByDistanceFromScrollPosition(contentDiv, currentScrollPosition);
</script>

<div class='about-me-content' id="about-me-content" style="opacity: {divOpacity}">
    <h1>Section 1</h1>
    <p>Section 1</p>
</div>
