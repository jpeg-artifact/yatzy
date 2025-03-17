<script lang="ts">
    import Comp from "$lib/Comp.svelte";

    let bo : string = $state("1.1")
    let reber : string = "bo"
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<h3 class="w-1/2 text-right text-xl font-bold">{#if bo === "1.1"} meow meow {/if}</h3>
<input type="text" bind:value={bo}>
<Comp></Comp>