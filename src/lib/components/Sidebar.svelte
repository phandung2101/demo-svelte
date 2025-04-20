<script>
	import { LayoutDashboard, Repeat, BarChart2, Settings } from "@lucide/svelte";

	const menuItems = [
		{ Icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
		{ Icon: Repeat, label: "Transaction", href: "/transaction" },
		{ Icon: BarChart2, label: "Report", href: "/report" },
		{ Icon: Settings, label: "Setting", href: "/setting" }
	];
</script>

<aside class="w-64 bg-base-100 min-h-screen p-4 flex flex-col justify-start space-y-2">
	{#each menuItems as { Icon, label, href }}
		<a href={href} class="flex items-center gap-2">
			<Icon size="16" />
			<span class="grow">{label}</span>
		</a>
	{/each}
</aside>
