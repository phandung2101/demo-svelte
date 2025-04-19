<script>
	const menu = [
		{ label: 'Dashboard' },
		{ label: 'Transactions' },
		{ label: 'Reports' },
		{ label: 'Settings' }
	];
</script>

<aside class="w-60 min-h-screen bg-base-100 border-r border-base-300 p-4 hidden lg:block">
	<nav class="flex flex-col gap-2 text-sm font-medium">
		{#each menu as item}
			<a class="flex items-center gap-3 px-3 py-2 rounded hover:bg-base-200 transition">
				<span>{item.label}</span>
			</a>
		{/each}
	</nav>
</aside>
