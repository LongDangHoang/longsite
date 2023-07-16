<script lang="ts">
    import './aboutStyles.scss';
    import { scrollPosition } from '../pageStore';

    let contentDiv: HTMLElement;
    let divTranslateY = 0;
    let divOpacity = 1;
    
    let currentScrollPosition = 0;
    scrollPosition.subscribe((value) => {
        currentScrollPosition = value;
    });

    $: if (contentDiv) {
        let diff = currentScrollPosition - contentDiv.offsetTop;
        divOpacity = Math.max(0, 1  - diff / contentDiv.clientHeight * 2); 
        divTranslateY = diff;
    }
</script>

<div bind:this={contentDiv} class='about-me-content' id="about-me-content" style="opacity: {divOpacity}; transform: translate(0, {divTranslateY}px)">
    <h1>Hi, welcome to my site</h1>
    <p>I'm a</p>
    <br>
    <p>That means</p>
    <p>In my free time, I like to relax by playing games, watching youtube, shooting some arrows, chatting with friends, enjoying anime, or typing away on my side projects!</p>
</div>
