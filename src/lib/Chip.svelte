<script>
    let { chip } = $props()

    let rotation = Math.random() * 360
    let offsetX = Math.random() * 20 - 10
    let offsetY = Math.random() * 10 - 5
</script>

<img style="rotate: {rotation}deg; translate: {offsetX}px {offsetY}px;" class="w-32 drop-shadow-md relative -mb-34 transform transition-opacity-transform duration-700 {chip.visible ? "opacity-100 scale-100" : "opacity-0 scale-125"}" src="poker-chip.png" alt="chip">