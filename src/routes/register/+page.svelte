<script>
  let form = $state({
    username: "",
    email: "",
    password: "",
    repassword: "",
  });

  function submitForm() {
    console.log($state.snapshot(form));
  }
</script>

<p>Username</p>
<input type="text" value={form.username} onchange={event => {form.username = event.target.value}}/>
<p>Email</p>
<input type="email" value={form.email} />
<p>Password</p>
<input type="password" value={form.password} />
<p>Re-enter password</p>
<input type="password" value={form.repassword} />

<button onclick={() => submitForm()}>Register</button>
