<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<div class="flex h-screen">
    <Sidebar/>
    <div class="flex-1 flex flex-col">
        <Navbar/>
        <main class="p-4 overflow-auto">
            <slot/>
        </main>
    </div>
</div>