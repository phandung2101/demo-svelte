<script>
	import { goto } from '$app/navigation';
	import { signin } from '$lib/services/authService';

	let username = $state('');
	let password = $state('');

	async function handleSignIn() {
		const res = await signin(username, password);
		console.log(res.data);
	}

	function onClickSignUp() {
		goto('/sign-up');
	}
</script>

<div class="min-h-screen flex items-center justify-center">
	<form onsubmit={handleSignIn}>
		<fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4">
			<legend class="fieldset-legend">Sign in</legend>

			<label for="text" class="label">Username</label>
			<input type="text" class="input" placeholder="Enter your username" bind:value={username} />

			<label for="password" class="label">Password</label>
			<input
				type="password"
				class="input"
				placeholder="Enter your password"
				bind:value={password}
			/>

			<button type="submit" class="btn btn-primary mt-4">Sign in</button>
			<button
				type="button"
				class="btn bg-white text-black border-[#e5e5e5]"
				onclick={onClickSignUp}
			>
				<svg
					aria-label="Email icon"
					width="16"
					height="16"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					><g
						stroke-linejoin="round"
						stroke-linecap="round"
						stroke-width="2"
						fill="none"
						stroke="black"
						><rect width="20" height="16" x="2" y="4" rx="2"></rect><path
							d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
						></path></g
					></svg
				>
				Sign up with email
			</button>
		</fieldset>
	</form>
</div>
