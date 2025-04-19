<script>
	import { goto } from '$app/navigation';
	import { signup } from '$lib/services/authService';

	let email = $state('');
	let username = $state('');
	let password = $state('');
	let repassword = $state('');
	let isLoading = $state(false);

	async function handleSignUp() {
		const res = await signup(email, username, password);
		if (res.status == 201) goto('sign-in');
	}
</script>

<div class="min-h-screen flex items-center justify-center">
	<form onsubmit={handleSignUp}>
		<fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4">
			<legend class="fieldset-legend">Sign up</legend>
			<label for="email" class="label">Email</label>
			<input
				class="input"
				type="email"
				bind:value={email}
				disabled={isLoading}
				placeholder="Enter your email"
			/>

			<label for="username" class="label">Username</label>
			<input
				class="input"
				type="text"
				bind:value={username}
				disabled={isLoading}
				placeholder="Enter your username"
			/>

			<label for="password" class="label">Password</label>
			<input
				class="input"
				type="password"
				bind:value={password}
				disabled={isLoading}
				placeholder="Enter your password"
			/>

			<label for="repassword" class="label">Re-enter your password</label>
			<input
				class="input"
				type="password"
				bind:value={repassword}
				disabled={isLoading}
				placeholder="Re-enter your password"
			/>
			<button type="submit" class="btn btn-neutral mt-4" disabled={isLoading}>
				{isLoading ? '...' : 'Sign up'}
			</button>
		</fieldset>
	</form>
</div>
