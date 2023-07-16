<script lang="ts">
    import './aboutStyles.scss';
    import { opacityByDistanceFromScrollPosition } from '../pageContent';
    import { onMount } from 'svelte';
    import { scrollPosition } from '../pageStore';

    let contentDiv: HTMLElement;
    let divOpacity = 1;

    onMount(() => {
        let div = document.getElementById("about-me-background");
        if (div) contentDiv = div;
    });

    let currentScrollPosition = 0;
    scrollPosition.subscribe((value) => {
        currentScrollPosition = value;
    });

    // $: divOpacity = opacityByDistanceFromScrollPosition(contentDiv, currentScrollPosition);
    divOpacity = 1;
</script>

<div class='about-me-content' id="about-me-content" style="opacity: {divOpacity}">
    <h1>Hi, welcome to my site</h1>
    <p>I'm a</p>
    <br>
    <p>That means</p>
    <p>In my free time, I like to relax by playing games, watching youtube, shooting some arrows, chatting with friends, enjoying anime, or typing away on my side projects!</p>
</div>
