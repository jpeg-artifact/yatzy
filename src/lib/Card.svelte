<script>
    let { card, cardPile } = $props()

    function onclick() {
        if (card.locked || card.cooldown) return
        if (card.selected) {
            cardPile.shuffle = true
            setTimeout(() => (cardPile.shuffle = false), 400);
        }
        card.selected = false
    }
</script>

<button {onclick} class="aspect-[287/400] w-40 -mb-60 transition-transform duration-300 transform shadow-md {card.selected ? "translate-y-80" : ""}">
    <img class="w-[100%] h-[100%]" src="{card.selected ? card.getcardimg() : "card-back.png"}" alt={card.number}>
</button>