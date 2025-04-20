<script>
    import {LayoutDashboard, Repeat, BarChart2, Settings} from "@lucide/svelte";

    const menuItems = [
        {Icon: LayoutDashboard, label: "Dashboard", href: "/dashboard"},
        {Icon: Repeat, label: "Transaction", href: "/transaction"},
        {Icon: BarChart2, label: "Report", href: "/report"},
        {Icon: Settings, label: "Setting", href: "/setting"}
    ];
</script>


<aside class="w-64 bg-base-100 min-h-screen flex flex-col justify-start border border-gray-200">
    <a class="flex min-h-16 items-center justify-center text-xl font-bold tracking-wide uppercase" href="/"
       data-discover="true">
        Project <span class="text-primary ml-1">ExTr</span>
    </a>

    {#each menuItems as {Icon, label, href}}
        <a href={href}
           class="flex items-center gap-2 h-10 px-3 rounded-md transition-colors duration-200 hover:bg-gray-100 hover:text-primary">
            <Icon size="16"/>
            <span class="grow">{label}</span>
        </a>

    {/each}
</aside>
