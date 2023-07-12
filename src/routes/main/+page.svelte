<script lang="ts">
	import { onMount } from "svelte";
	import "./styles.css";

	import AboutBackground from "./(aboutSection)/aboutBackground.svelte";
	import BlogBackground from "./(blogSection)/blogBackground.svelte";
	import DemoBackground from "./(demoSection)/demoBackground.svelte";
	import AboutContent from "./(aboutSection)/aboutContent.svelte";
	import BlogContent from "./(blogSection)/blogContent.svelte";
	import DemoContent from "./(demoSection)/demoContent.svelte";

    import { scrollPosition } from "./pageStore";

    onMount(() => {
        // bind container scroll to state
        let sectionsContainer = document.getElementById("background-container");
        sectionsContainer?.addEventListener("scroll", () => {
            if (sectionsContainer)
                scrollPosition.set(sectionsContainer.scrollTop);
        });
    });

    scrollPosition.subscribe((value) => {
        console.log(value);
    })

</script>

<div class="background-container" dir="ltr" id="background-container">
    <AboutBackground />
    <BlogBackground />
    <DemoBackground />
</div>
<div class="contents-container">
    <AboutContent />
    <BlogContent />
    <DemoContent />
</div>
