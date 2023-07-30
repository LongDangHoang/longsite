<script lang="ts">
	import { onMount } from "svelte";

    const array = [1, 2, 3];
    const topPerct = [5, 35, 65];
    const p_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    onMount(() => {
        for (let element of document.getElementsByClassName("inner")) {
            element.addEventListener("scroll", (event) => {
                console.log(element.scrollTop);
            });
        }

        document.getElementById("out")?.addEventListener("scroll", () => console.log("Scroll on outer"));

        document.getElementById("overlay")?.addEventListener("wheel", (event) => {
            event.preventDefault();

            for (let element of document.getElementsByClassName("inner")) {
                element.scrollTop += event.deltaY;
                // element.dispatchEvent(new CustomEvent("scroll", { detail: { deltaY: event.deltaY }}));
            }
        });
    });
</script>

<style>
.outer {
    height: 95vh;
    width: 95vw;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.inner {
    height: 30%;
    width: 100%;
    background-color: red;
    border-bottom: 2px;
    border-color: black;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    scroll-snap-type: y proximity;
}

.inner > p {
    scroll-snap-align: start;
}
</style>

<div class="outer" id="out">
    {#each array as value}
        <div class="inner" id="in-{value}" style="top: {topPerct[value - 1]}%">
            {#each p_array as index}
                <p>test {value}-{index}</p>
            {/each}
        </div>
    {/each}
    <!-- <div style="width: 100%; height: 100%; position: absolute; top: 0" id="overlay"></div> -->
</div>
