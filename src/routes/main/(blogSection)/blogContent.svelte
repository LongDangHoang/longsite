<script lang="ts">
    import './blogStyles.css';
    import { opacityByDistanceFromScrollPosition } from '../pageContent';
    import { onMount } from 'svelte';
    import { scrollPosition } from '../pageStore';

    let contentDiv: HTMLElement;

    onMount(() => {
        let div = document.getElementById("blog-background");
        if (div) contentDiv = div;
    });

    let currentScrollPosition = 0;
    scrollPosition.subscribe((value) => {
        currentScrollPosition = value;
    });

    $: divOpacity = opacityByDistanceFromScrollPosition(contentDiv, currentScrollPosition);
</script>

<div class='blog-content' id="blog-content" style="opacity: {divOpacity}">
    <h1>Section 2</h1>
    <p>Section 2</p>
</div>
