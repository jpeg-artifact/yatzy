<script>
    let { chip } = $props()
</script>

{#if chip.visible === true}
    <img class="w-32 drop-shadow-md relative -mb-34" src="poker-chip.png" alt="chip">
{/if}