<script lang="ts">
	import './demoStyles.scss';
    import { demoTransitionProgress } from '../foregroundTransition';
	import AboutSelectDropdown from '../(aboutSection)/aboutSelectDropdown.svelte';

	let contentDiv: HTMLElement;
	let divOpacity = 0;
    let isDisplayHidden = true;

	let currentTransitionProgress = 1;
	demoTransitionProgress.subscribe((value) => {
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
	class="demo-content foreground"
	id="demo-content"
>
	{#if !isDisplayHidden}
		<div>
			<h1>Section 3</h1>
			<p>Section 3 <AboutSelectDropdown /></p>
		</div>
	{/if}
</div>
