<script>
    let { number, selected = $bindable() } = $props();

    function onclick() {
        selected = false
    }
</script>

<button {onclick} class="aspect-[287/400] w-40 -mb-60 transition-transform duration-300 transform shadow-md {selected ? "translate-y-96" : ""}">
    <img class="w-[100%] h-[100%]" src="{selected ? "clubs-2.png" : "card-back.png"}" alt="card">
</button>