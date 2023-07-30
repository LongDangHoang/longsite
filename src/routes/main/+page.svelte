<script lang="ts">
	import { onMount } from "svelte";
    import { get } from "svelte/store";
	import "./main.scss";

	import AboutBackground from "./(aboutSection)/aboutBackground.svelte";
	import BlogBackground from "./(blogSection)/blogBackground.svelte";
	import DemoBackground from "./(demoSection)/demoBackground.svelte";
	import AboutContent from "./(aboutSection)/aboutContent.svelte";
	import BlogContent from "./(blogSection)/blogContent.svelte";
	import DemoContent from "./(demoSection)/demoContent.svelte";

    import { scrollPosition, elementHeight } from "./pageStore";

    let scrollContainer: HTMLElement;

    onMount(() => {
        // bind container scroll to state
        scrollContainer.addEventListener("scroll", () => {
            scrollPosition.set(scrollContainer.scrollTop);
        });

        // Hook element height
        elementHeight.set(scrollContainer.clientHeight);

        // log for debug
        console.log(`Element height: ${get(elementHeight)}`)
    });

</script>

<div bind:this={scrollContainer} class="scroll-container" dir="ltr" id="scroll-container">
    <div id="about-me-section" class="section-container">
        <AboutBackground />
        <AboutContent />
    </div>
    <div id="blog-section" class="section-container">
        <BlogBackground />
        <BlogContent />
    </div>
    <div id="demo-section" class="section-container">
        <DemoBackground />
        <DemoContent />
    </div>
</div>
