<script lang="ts">
	import { onMount } from "svelte";
	import "./styles.css";

	import AboutBackground from "./(aboutSection)/aboutBackground.svelte";
	import BlogBackground from "./(blogSection)/blogBackground.svelte";
	import DemoBackground from "./(demoSection)/demoBackground.svelte";
	import AboutContent from "./(aboutSection)/aboutContent.svelte";
	import BlogContent from "./(blogSection)/blogContent.svelte";
	import DemoContent from "./(demoSection)/demoContent.svelte";

    let containerScroll = 0;
    let innerHeight = 0;

    onMount(() => {
        // bind container scroll to state
        let sectionsContainer = document.getElementById("sections-container");
        sectionsContainer?.addEventListener("scroll", () => {
            if (sectionsContainer)
                containerScroll = sectionsContainer.scrollTop;
        });
    });

</script>

<svelte:window bind:innerHeight/>

<div class="background-container" dir="ltr">
    <AboutBackground />
    <BlogBackground />
    <DemoBackground />
</div>
<div class="contents-container">
    <AboutContent />
    <BlogContent />
    <DemoContent />
</div>
