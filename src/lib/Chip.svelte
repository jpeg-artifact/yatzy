<script>
    let { chip } = $props()
</script>

<img style="rotate: {chip.rotation}deg; translate: {chip.offsetX}px {chip.offsetY}px;" class="w-32 drop-shadow-md relative -mb-34 transform transition-opacity-transform duration-700 {chip.visible ? "opacity-100 scale-100" : "opacity-0 scale-125"}" src="poker-chip.png" alt="chip">