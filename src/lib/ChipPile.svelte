<script>
    import Chip from "./Chip.svelte";

    let { chipPile } = $props();
</script>

<div class="m-auto">
    {#each chipPile.chips as chip (chip)}
        <Chip {chip}></Chip>
    {/each}
</div>
