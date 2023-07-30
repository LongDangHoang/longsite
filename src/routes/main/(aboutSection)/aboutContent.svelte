<script lang="ts">
	import './aboutStyles.scss';
	import { scrollPosition } from '../pageStore';
	import AboutSelectDropdown from './aboutSelectDropdown.svelte';
	import { onMount } from 'svelte';

	let contentDiv: HTMLElement;
	let divTranslateY = 0;
	let divOpacity = 1;
    let isDisplayHidden = false;

	let currentScrollPosition = 0;
	scrollPosition.subscribe((value) => {
		currentScrollPosition = value;
	});

	$: if (contentDiv) {
		let diff = currentScrollPosition - contentDiv.offsetTop;
		divOpacity = Math.max(0, 1 - (diff / contentDiv.clientHeight) * 2);
		divTranslateY = diff;
        isDisplayHidden = Math.abs(divOpacity) < 0.05

        window.requestAnimationFrame(() => {
            contentDiv.style.setProperty("opacity", divOpacity.toString());
            contentDiv.style.setProperty("transform", `translate(0px, ${divTranslateY}px)`);

            if (isDisplayHidden) 
                contentDiv.style.setProperty("pointer-events", "none");
            else
                contentDiv.style.setProperty("pointer-events", "all");
        })
	}
</script>

<div
	bind:this={contentDiv}
	class="about-me-content foreground"
	id="about-me-content"
>
	{#if !isDisplayHidden}
		<div class="about-me-text-content" id="about-me-text-content">
			<h1>Hi, welcome to my site!</h1>
			<p>I'm a <AboutSelectDropdown /></p>
			<br />
			<p>That means</p>
			<p>
				In my free time, I like to relax by playing games, watching youtube, shooting some arrows,
				chatting with friends, enjoying anime, or typing away on my side projects!
			</p>
		</div>
		<div class="about-me-carousel" id="about-me-carousel" />
	{/if}
</div>
