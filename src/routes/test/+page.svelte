<script lang="ts">
	import { onMount } from "svelte";

    const array = [1, 2, 3, 4, 6, 7, 8, 9, 10]

    let container: HTMLElement;
    let scrollPosition = 0;
    let h1: HTMLElement;

    onMount(() => {
        container.addEventListener("scroll", () => {
            scrollPosition = container.scrollTop;
        });
    })
</script>

<style>
/* Dropdown Button */
    .dropbtn {
        background-color: #04AA6D;
        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
    }

    /* The container <div> - needed to position the dropdown content */
    .dropdown {
        position: relative;
        display: inline-block;
    }

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    /* Links inside the dropdown */
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    /* Change color of dropdown links on hover */
    .dropdown-content a:hover {background-color: #ddd;}

    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {display: block;}

    /* Change the background color of the dropdown button when the dropdown content is shown */
    .dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>

<div>
    <div bind:this={container} style="overflow-y: scroll; height: 500px">
        <div bind:this={h1} style="position: relative; top: {scrollPosition}px; height: 50px">
            <h1>fixed</h1>
        </div>
        <div class="dropdown" style="position: relative; top: {scrollPosition}px; height: 50px">
            <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
        {#each array as num}
            <p style="height: 100%">test {num}</p>
        {/each}
    </div>
    <div style="overflow-y: scroll; height: 500px; position: absolute">
        {#each array as num, index}
            <div style="height: 100%; background-color: {index % 2 == 0 ? 'red' : 'white'}"></div> 
        {/each}
    </div>
    <!-- <h1 style="position: fixed; top: 0; left: 3">fixed</h1> -->
</div>
