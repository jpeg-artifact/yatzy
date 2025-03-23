<script lang="ts">
    import { game } from "./GameClass.svelte";
    import { RowClass } from "./RowClass.svelte";

    let { player } = $props();

    function homoRow(type: RowClass, addNumber: number) {
        if (!player.isPlaying || type.value != 0 || type.crossed) return;

        let valid = false;

        for (let number of game.getcardnumberarray()) {
            if (number === addNumber) {
                type.value += addNumber;
                valid = true;
            }
        }

        if (!valid) type.crossed = true;

        game.nextturn();
    }

    function onesclick() {
        homoRow(player.ones, 1);
    }

    function twosclick() {
        homoRow(player.twos, 2);
    }

    function threesclick() {
        homoRow(player.threes, 3);
    }

    function foursclick() {
        homoRow(player.fours, 4);
    }

    function fivesclick() {
        homoRow(player.fives, 5);
    }

    function sixesclick() {
        homoRow(player.sixes, 6);
    }

    function onepairclick() {
        if (
            !player.isPlaying ||
            player.onePair.value != 0 ||
            player.onePair.crossed
        )
            return;

        let numbers = game.getcardnumberarray();

        for (let i = 4; i > 1; i--) {
            if (numbers[i] === numbers[i - 1]) {
                if (numbers[i] === 0 || numbers[i - 1] === 0) break;
                player.onePair.value = numbers[i] * 2;
                break;
            }
        }

        if (player.onePair.value === 0) player.onePair.crossed = true;
        game.nextturn();
    }

    function twopairclick() {
        if (
            !player.isPlaying ||
            player.twoPair.value != 0 ||
            player.twoPair.crossed
        )
            return;

        let numbers = game.getcardnumberarray();
        let lastWasPair = 0;
        let pairs = [];
        for (let i = 4; i > 0; i--) {
            if (numbers[i - lastWasPair] === numbers[i - 1 - lastWasPair]) {
                if (numbers[i - lastWasPair] === 0) break;
                pairs.push(numbers[i - lastWasPair]);
                lastWasPair = 1;
                continue;
            }

            lastWasPair = 0;
        }

        if (pairs.length > 0)
            player.twoPair.value = pairs[0] * 2 + pairs[1] * 2;

        if (player.twoPair.value === 0) player.twoPair.crossed = true;
        game.nextturn();
    }

    function threeofakindclick() {
        if (
            !player.isPlaying ||
            player.threeOfAKind.value != 0 ||
            player.threeOfAKind.crossed
        )
            return;

        let numbers = game.getcardnumberarray();

        for (let i = 4; i > 1; i--) {
            if (
                numbers[i] === numbers[i - 1] &&
                numbers[i] === numbers[i - 2]
            ) {
                if (numbers[i] === 0) break;
                player.threeOfAKind.value = numbers[i] * 3;
                break;
            }
        }

        if (player.threeOfAKind.value === 0) player.threeOfAKind.crossed = true;
        game.nextturn();
    }

    function fourofakindclick() {
        if (
            !player.isPlaying ||
            player.fourOfAKind.value != 0 ||
            player.fourOfAKind.crossed
        )
            return;

        let numbers = game.getcardnumberarray();

        for (let i = 4; i > 1; i--) {
            if (
                numbers[i] === numbers[i - 1] &&
                numbers[i] === numbers[i - 2] &&
                numbers[i] === numbers[i - 3]
            ) {
                if (numbers[i] === 0) break;
                player.fourOfAKind.value = numbers[i] * 4;
                break;
            }
        }

        if (player.fourOfAKind.value === 0) player.fourOfAKind.crossed = true;
        game.nextturn();
    }

    function fullhouseclick() {
        if (
            !player.isPlaying ||
            player.fullHouse.value != 0 ||
            player.fullHouse.crossed
        )
            return;

        let numbers = game.getcardnumberarray();

        if (
            (numbers[4] === numbers[3] &&
                numbers[2] === numbers[1] &&
                numbers[2] === numbers[0]) ||
            (numbers[4] === numbers[3] &&
                numbers[4] === numbers[2] &&
                numbers[1] === numbers[0])
        ) {
            for (let number of numbers) {
                player.fullHouse.value += number;
            }
        }

        if (player.fullHouse.value === 0) player.fullHouse.crossed = true;
        game.nextturn();
    }

    function littleladderclick() {
        if (
            !player.isPlaying ||
            player.littleLadder.value != 0 ||
            player.littleLadder.crossed
        )
            return;

        let numbers = game.getcardnumberarray();

        if (
            numbers[4] === 5 &&
            numbers[3] === 4 &&
            numbers[2] === 3 &&
            numbers[1] === 2 &&
            numbers[0] === 1
        ) {
            player.littleLadder.value = 15;
        }

        if (player.littleLadder.value === 0) player.littleLadder.crossed = true;
        game.nextturn();
    }

    function bigladderclick() {
        if (
            !player.isPlaying ||
            player.bigLadder.value != 0 ||
            player.bigLadder.crossed
        )
            return;

        let numbers = game.getcardnumberarray();

        if (
            numbers[4] === 6 &&
            numbers[3] === 5 &&
            numbers[2] === 4 &&
            numbers[1] === 3 &&
            numbers[0] === 2
        ) {
            player.bigLadder.value = 20;
        }

        if (player.bigLadder.value === 0) player.bigLadder.crossed = true;
        game.nextturn();
    }

    function chansclick() {
        if (
            !player.isPlaying ||
            player.chans.value != 0 ||
            player.chans.crossed
        )
            return;

        let numbers = game.getcardnumberarray();

        for (let number of numbers) {
            player.chans.value += number;
        }

        if (player.chans.value === 0) player.chans.crossed = true;
        game.nextturn();
    }

    function yatzyclick() {
        if (
            !player.isPlaying ||
            player.yatzy.value != 0 ||
            player.yatzy.crossed
        )
            return;

        let numbers = game.getcardnumberarray();

        if (
            numbers[4] != 0 &&
            numbers[4] === numbers[3] &&
            numbers[4] === numbers[2] &&
            numbers[4] === numbers[1] &&
            numbers[4] === numbers[0]
        ) {
            player.yatzy.value = 50
        }

        if (player.yatzy.value === 0) player.yatzy.crossed = true;
        game.nextturn();
    }
</script>

<div class="bg-yellow-50 p-4 float-right transition-transform duration-1000 shadow-md mt-120 -mb-292 -ml-4 {player.isPlaying ? "-translate-y-112" : ""}">
    <table class="bg-yellow-50 border-4">
        <tbody>
            <tr class="border-4">
                <td>
                    <h1 class="text-1xl">SPELARE</h1>
                </td>
                <td>
                    <input type="text" />
                </td>
                <td></td>
            </tr>
            <tr>
                <td> Ettor </td>
                <td>
                    <button
                        class={player.isPlaying &&
                        player.ones.value == 0 &&
                        !player.ones.crossed
                            ? "hover:bg-emerald-200 cursor-pointer"
                            : ""}
                        onclick={onesclick}
                    >
                        {player.ones.display}
                    </button>
                </td>
                <td></td>
            </tr>
            <tr>
                <td> Tvåor </td>
                <td>
                    <button
                        class={player.isPlaying &&
                        player.twos.value == 0 &&
                        !player.twos.crossed
                            ? "hover:bg-emerald-200 cursor-pointer"
                            : ""}
                        onclick={twosclick}
                    >
                        {player.twos.display}
                    </button>
                </td>
                <td></td>
            </tr>
            <tr>
                <td> Treor </td>
                <td>
                    <button
                        class={player.isPlaying &&
                        player.threes.value == 0 &&
                        !player.threes.crossed
                            ? "hover:bg-emerald-200 cursor-pointer"
                            : ""}
                        onclick={threesclick}
                    >
                        {player.threes.display}
                    </button>
                </td>
                <td></td>
            </tr>
            <tr>
                <td> Fyror </td>
                <td>
                    <button
                        class={player.isPlaying &&
                        player.fours.value == 0 &&
                        !player.fours.crossed
                            ? "hover:bg-emerald-200 cursor-pointer"
                            : ""}
                        onclick={foursclick}
                    >
                        {player.fours.display}
                    </button>
                </td>
                <td></td>
            </tr>
            <tr>
                <td> Femmor </td>
                <td>
                    <button
                        class={player.isPlaying &&
                        player.fives.value == 0 &&
                        !player.fives.crossed
                            ? "hover:bg-emerald-200 cursor-pointer"
                            : ""}
                        onclick={fivesclick}
                    >
                        {player.fives.display}
                    </button>
                </td>
                <td></td>
            </tr>
            <tr>
                <td> Sexor </td>
                <td>
                    <button
                        class={player.isPlaying &&
                        player.sixes.value == 0 &&
                        !player.sixes.crossed
                            ? "hover:bg-emerald-200 cursor-pointer"
                            : ""}
                        onclick={sixesclick}
                    >
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
                <td> Bonus </td>
                <td>
                    {player.bonus}
                </td>
                <td>
                    <p class="text-xs">50 poäng</p>
                </td>
            </tr>
            <tr>
                <td> Ett par </td>
                <td>
                    <button
                        class={player.isPlaying &&
                        player.onePair.value == 0 &&
                        !player.onePair.crossed
                            ? "hover:bg-emerald-200 cursor-pointer"
                            : ""}
                        onclick={onepairclick}
                    >
                        {player.onePair.display}
                    </button>
                </td>
                <td></td>
            </tr>
            <tr>
                <td> Två par </td>
                <td>
                    <button
                        class={player.isPlaying &&
                        player.twoPair.value == 0 &&
                        !player.twoPair.crossed
                            ? "hover:bg-emerald-200 cursor-pointer"
                            : ""}
                        onclick={twopairclick}
                    >
                        {player.twoPair.display}
                    </button>
                </td>
                <td></td>
            </tr>
            <tr>
                <td> Tretal </td>
                <td>
                    <button
                        class={player.isPlaying &&
                        player.threeOfAKind.value == 0 &&
                        !player.threeOfAKind.crossed
                            ? "hover:bg-emerald-200 cursor-pointer"
                            : ""}
                        onclick={threeofakindclick}
                    >
                        {player.threeOfAKind.display}
                    </button>
                </td>
                <td></td>
            </tr>
            <tr>
                <td> Fyrtal </td>
                <td>
                    <button
                        class={player.isPlaying &&
                        player.fourOfAKind.value == 0 &&
                        !player.fourOfAKind.crossed
                            ? "hover:bg-emerald-200 cursor-pointer"
                            : ""}
                        onclick={fourofakindclick}
                    >
                        {player.fourOfAKind.display}
                    </button>
                </td>
                <td></td>
            </tr>
            <tr>
                <td> Kåk </td>
                <td>
                    <button
                        class={player.isPlaying &&
                        player.fullHouse.value == 0 &&
                        !player.fullHouse.crossed
                            ? "hover:bg-emerald-200 cursor-pointer"
                            : ""}
                        onclick={fullhouseclick}
                    >
                        {player.fullHouse.display}
                    </button>
                </td>
                <td></td>
            </tr>
            <tr>
                <td> Liten stege </td>
                <td>
                    <button
                        class={player.isPlaying &&
                        player.littleLadder.value == 0 &&
                        !player.littleLadder.crossed
                            ? "hover:bg-emerald-200 cursor-pointer"
                            : ""}
                        onclick={littleladderclick}
                    >
                        {player.littleLadder.display}
                    </button>
                </td>
                <td></td>
            </tr>
            <tr>
                <td> Stor stege </td>
                <td>
                    <button
                        class={player.isPlaying &&
                        player.bigLadder.value == 0 &&
                        !player.bigLadder.crossed
                            ? "hover:bg-emerald-200 cursor-pointer"
                            : ""}
                        onclick={bigladderclick}
                    >
                        {player.bigLadder.display}
                    </button>
                </td>
                <td></td>
            </tr>
            <tr>
                <td> Chans </td>
                <td>
                    <button
                        class={player.isPlaying &&
                        player.chans.value == 0 &&
                        !player.chans.crossed
                            ? "hover:bg-emerald-200 cursor-pointer"
                            : ""}
                        onclick={chansclick}
                    >
                        {player.chans.display}
                    </button>
                </td>
                <td></td>
            </tr>
            <tr>
                <td> Yatzy </td>
                <td>
                    <button
                        class={player.isPlaying &&
                        player.yatzy.value == 0 &&
                        !player.yatzy.crossed
                            ? "hover:bg-emerald-200 cursor-pointer"
                            : ""}
                        onclick={yatzyclick}
                    >
                        {player.yatzy.display}
                    </button>
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
