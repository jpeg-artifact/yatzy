<script lang="ts">
    import { game } from "./GameClass.svelte";
    import { RowClass } from "./RowClass.svelte";

    let { player } = $props()
    
    function homoRow(type : RowClass, addNumber : number) {
        if (!player.isPlaying || type.value != 0 || type.crossed) return

        let valid = false

        for (let number of game.getcardnumberarray()) {
            if (number === addNumber) {
                type.value += addNumber
                valid = true
            }
        }
        
        if (!valid) type.crossed = true

        game.nextturn()
    }

    function onesclick() {
        homoRow(player.ones, 1)
    }

    function twosclick() {
        homoRow(player.twos, 2)
    }

    function threesclick() {
        homoRow(player.threes, 3)
    }

    function foursclick() {
        homoRow(player.fours, 4)
    }
    
    function fivesclick() {
        homoRow(player.fives, 5)
    }

    function sixesclick() {
        homoRow(player.sixes, 6)
    }

    function bonusclick() {
        if (player.samesSum < 63) return
            player.bonus.value = 50
    }

    function onepairclick() {
        if (!player.isPlaying || player.onePair.value != 0 || player.onePair.crossed) return

        let numbers = game.getcardnumberarray()

        for (let i = 5; i > 1; i--) {
            console.log(i, numbers[i], numbers[i - 1])
            if (numbers[i] == numbers[i - 1]) {
                player.onePair.value = numbers[i] * 2

                break
            }
        }
    }
</script>

<style>
    td {
        border-style: var(--tw-border-style);
        border-width: 2px;
        padding: 4px;
        padding-left: 8px;
        padding-right: 32px;
        min-width: 128px;
    }
    h1 {
        font-weight: bold;
    }
    button {
        width: 100%;
        height: 100%;
        text-align: left;
    }
</style>

<div class="bg-yellow-50 p-4 float-right shadow-md mt-8">
    <table class="bg-yellow-50 border-4">
        <tbody>
            <tr class="border-4">
                <td>
                    <h1 class="text-1xl">SPELARE</h1> 
                </td>
                <td>
                    <input type="text">
                </td>
                <td></td>
            </tr>
            <tr>
                <td>
                    Ettor 
                </td>
                <td>
                    <button class="{player.isPlaying && player.ones.value == 0 && !player.ones.crossed ? "hover:bg-emerald-200" : ""}" onclick={onesclick}>
                        {player.ones.display}
                    </button>
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Tvåor
                </td>
                <td>
                    <button class="{player.isPlaying && player.twos.value == 0 && !player.twos.crossed ? "hover:bg-emerald-200" : ""}" onclick={twosclick}>
                        {player.twos.display}
                    </button>
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Treor
                </td>
                <td>
                    <button class="{player.isPlaying && player.threes.value == 0 && !player.threes.crossed ? "hover:bg-emerald-200" : ""}" onclick={threesclick}>
                        {player.threes.display}
                    </button>
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Fyror
                </td>
                <td>
                    <button class="{player.isPlaying && player.fours.value == 0 && !player.fours.crossed ? "hover:bg-emerald-200" : ""}" onclick={foursclick}>
                        {player.fours.display}
                    </button>
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Femmor
                </td>
                <td>
                    <button class="{player.isPlaying && player.fives.value == 0 && !player.fives.crossed ? "hover:bg-emerald-200" : ""}" onclick={fivesclick}>
                        {player.fives.display}
                    </button>
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Sexor
                </td>
                <td>
                    <button class="{player.isPlaying && player.sixes.value == 0 && !player.sixes.crossed ? "hover:bg-emerald-200" : ""}" onclick={sixesclick}>
                        {player.sixes.display}
                    </button>
                </td>
                <td></td>
            </tr>
        </tbody>
        <tbody>
            <tr class="border-4">
                <td>
                    <h1 class="text-1xl">SUMMA</h1> 
                </td>
                <td>
                    {player.samesSum}
                </td>
                <td>
                    <p class="text-xs">63 eller mer = bonus</p>
                </td>
            </tr>
            <tr>
                <td>
                    Bonus 
                </td>
                <td>
                    <button class="{player.isPlaying && player.bonus.value == 0 && player.samesSum >= 63 ? "hover:bg-emerald-200" : ""}" onclick={bonusclick}>
                        {player.bonus.display}
                    </button>
                </td>
                <td>
                    <p class="text-xs">50 poäng</p>
                </td>
            </tr>
            <tr>
                <td> 
                    Ett par
                </td>
                <td>
                    <button class="{player.isPlaying && player.onePair.value == 0 && !player.onePair.crossed ? "hover:bg-emerald-200" : ""}" onclick={onepairclick}>
                        {player.onePair.display}
                    </button>
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Två par
                </td>
                <td>
                    {player.twoPair.display}
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Tretal
                </td>
                <td>
                    {player.threeOfAKind.display}
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Fyrtal
                </td>
                <td>
                    {player.fourOfAKind.display}
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Kåk
                </td>
                <td>
                    {player.fullHouse.display}
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Liten stege
                </td>
                <td>
                    {player.littleLadder.display}
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Stor stege
                </td>
                <td>
                    {player.bigLadder.display}
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Chans
                </td>
                <td>
                    {player.chans.display}
                </td>
                <td></td>
            </tr>
            <tr>
                <td> 
                    Yatzy
                </td>
                <td>
                    {player.yatzy.display}
                </td>
                <td>
                    <p class="text-xs">50 poäng</p>
                </td>
            </tr>
            <tr class="border-4">
                <td>
                    <h1 class="text-1xl">SUMMA</h1> 
                </td>
                <td>
                    {player.totalSum}
                </td>
                <td></td>
            </tr>
        </tbody>
    </table>
</div>
