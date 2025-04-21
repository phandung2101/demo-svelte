<script>
    let {items, currentItem, onClick} = $props();

</script>

<div class="dropdown dropdown-start">
    <div tabindex="0" role="button"
         class="btn btn-ghost bg-base-100">
        <span>{currentItem?.name}</span>
        <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
        >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
    </div>
    <ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        {#each items as item}
            <li>
                <button onclick={() => onClick(item)}>{item.name}</button>
            </li>
        {/each}
    </ul>
</div>