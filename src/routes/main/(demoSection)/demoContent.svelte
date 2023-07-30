<script lang="ts">
	import './demoStyles.scss';
	import { scrollPosition } from '../pageStore';
	import AboutSelectDropdown from '../(aboutSection)/aboutSelectDropdown.svelte';

	let contentDiv: HTMLElement;
	let divTranslateY = 0;
	let divOpacity = 0;
    let isDisplayHidden = true;

	let currentScrollPosition = 0;
	scrollPosition.subscribe((value) => {
		currentScrollPosition = value;
	});

	$: if (contentDiv) {
		let diff = currentScrollPosition - contentDiv.offsetTop;
		divOpacity = Math.max(0, 1 - (Math.abs(diff) / contentDiv.clientHeight) * 2);
		divTranslateY = diff;
        isDisplayHidden = Math.abs(divOpacity) < 0.05;

		window.requestAnimationFrame(() => {
			contentDiv.style.setProperty('opacity', divOpacity.toString());
			contentDiv.style.setProperty('transform', `translate(0px, ${divTranslateY}px)`);

            if (isDisplayHidden) 
                contentDiv.style.setProperty("pointer-events", "none");
            else
                contentDiv.style.setProperty("pointer-events", "all");
		});
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
