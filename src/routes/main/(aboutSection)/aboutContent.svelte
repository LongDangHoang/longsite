<script lang="ts">
	import './aboutStyles.scss';
	import { aboutMeTransitionProgress } from '../foregroundTransition';
	import AboutSelectDropdown from './aboutSelectDropdown.svelte';

	let contentDiv: HTMLElement;
	let divOpacity = 1;
    let isDisplayHidden = false;

	let currentTransitionProgress = 1;
	aboutMeTransitionProgress.subscribe((value) => {
		currentTransitionProgress = value;

        if (contentDiv)
            setAnimationStyles()
	});

	const setAnimationStyles = () => {
		divOpacity = currentTransitionProgress;
        isDisplayHidden = Math.abs(divOpacity) < 0.05

        window.requestAnimationFrame(() => {
            contentDiv.style.setProperty("opacity", divOpacity.toString());
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
