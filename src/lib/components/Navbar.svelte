<script>
    import {getUserGroups} from "$lib/services/groupService.js";
    import {onMount} from "svelte";
    import Dropdown from "$lib/components/Dropdown.svelte";

    let groups = $state([]);
    let currentGroup = $state(null);

    onMount(async () => {
        try {
            const res = await getUserGroups();
            groups = res.data;
            if (groups.length > 0) currentGroup = groups[0];
        } catch (e) {
            console.error("Failed to load groups:", e);
        }
    });

    function onChangeGroup(group) {
        currentGroup = group;
    }
</script>

<div class="navbar bg-base-100 border-b border-gray-200">
    <div class="navbar-start">
        <div role="button" class="btn btn-ghost btn-circle">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
            >
                <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h7"
                />
            </svg>
        </div>
    </div>
    <div class="navbar-center">
        <Dropdown onClick={onChangeGroup} items={groups} currentItem={currentGroup}></Dropdown>
    </div>
    <div class="navbar-end">
        <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                    <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                </div>
            </div>
            <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
                <li>
                    <a class="justify-between">
                        Profile
                        <span class="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
        </div>
    </div>
</div>
