<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Kort Yatzy</title>
	<meta name="description" content="Klassisk yatzy med en twist. Det är kort! Känn dig som en card dealer när du satsar allt (din värdighet) på att få yatzy.">
</svelte:head>

{@render children()}
