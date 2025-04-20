<script>
	import { LayoutDashboard, Repeat, BarChart2, Settings } from "@lucide/svelte";
</script>

<aside class="w-64 bg-base-100 min-h-screen p-4 flex flex-col justify-start space-y-2">
	<a href="/dashboard" class="flex items-center gap-2">
		<LayoutDashboard size="16" />
		<span class="grow">Dashboard</span>
	</a>

	<a href="/transaction" class="flex items-center gap-2">
		<Repeat size="16" />
		<span class="grow">Transaction</span>
	</a>

	<a href="/report" class="flex items-center gap-2">
		<BarChart2 size="16" />
		<span class="grow">Report</span>
	</a>

	<a href="/setting" class="flex items-center gap-2">
		<Settings size="16" />
		<span class="grow">Setting</span>
	</a>
</aside>
