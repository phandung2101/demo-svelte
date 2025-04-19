<script>
	let email = $state('');
	let password = $state('');

	function handleSignIn() {
        console.log('send this to server');
		console.log({
			email,
			password
		});
	}
</script>

<div class="min-h-screen flex items-center justify-center">
	<form onsubmit={handleSignIn}>
		<fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4">
			<legend class="fieldset-legend">Sign in</legend>

			<label for="email" class="label">Email</label>
			<input type="email" class="input" placeholder="Email" bind:value={email} />

			<label for="password" class="label">Password</label>
			<input type="password" class="input" placeholder="Password" bind:value={password} />

			<button type="submit" class="btn btn-neutral mt-4">Sign in</button>
		</fieldset>
	</form>
</div>
