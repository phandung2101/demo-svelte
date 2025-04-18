<script>
	let email = $state('');
	let password = $state('');
	let repassword = $state('');
	let isLoading = $state(false);

	function handleLogin() {
		console.log({
			email,
			password,
			repassword
		});
	}
</script>

<form onsubmit={handleLogin}>
	<div>
		<label for="email">Email:</label>
		<input
			type="email"
			id="email"
			bind:value={email}
			disabled={isLoading}
			placeholder="Nhập email của bạn"
		/>
	</div>

	<div>
		<label for="password">Mật khẩu:</label>
		<input
			type="password"
			id="password"
			bind:value={password}
			disabled={isLoading}
			placeholder="Nhập mật khẩu"
		/>
	</div>

	<div>
		<label for="repassword">Nhập lại mật khẩu:</label>
		<input
			type="password"
			id="repassword"
			bind:value={repassword}
			disabled={isLoading}
			placeholder="Nhập mật khẩu"
		/>
	</div>
	<button type="submit" disabled={isLoading}>
		{isLoading ? 'Đang xử lý...' : 'Đăng Nhập'}
	</button>
</form>
