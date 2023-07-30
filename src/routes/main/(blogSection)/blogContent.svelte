<script lang="ts">
	import './blogStyles.scss';
	import { blogTransitionProgress } from '../foregroundTransition';

	let contentDiv: HTMLElement;
	let divOpacity = 0;
    let isDisplayHidden = true;

	let currentTransitionProgress = 1;
	blogTransitionProgress.subscribe((value) => {
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
	class="blog-content foreground"
	id="blog-content"
>
	{#if !isDisplayHidden}
		<div>
			<h1>Section 2</h1>
			<p>Section 2</p>
		</div>
	{/if}
</div>
