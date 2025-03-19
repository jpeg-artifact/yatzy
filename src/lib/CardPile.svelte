<script lang="ts">
    import Card from "./Card.svelte";

    let cards = $state([
        { number: 1, selected: false },
        { number: 2, selected: false },
        { number: 3, selected: false },
        { number: 4, selected: false },
        { number: 5, selected: false },
        { number: 6, selected: false }
    ])

    function onclickcapture() {
        for (let card of cards) {
            if (card.selected) {
                return
            }
        }

        let card = cards[Math.floor(Math.random() * 6)]
        card.selected = true
    }
</script>

<button {onclickcapture} class="flex flex-col">
     {#each cards as card (card.number)}
        <Card number={card.number} bind:selected={card.selected}/>
     {/each}
</button>