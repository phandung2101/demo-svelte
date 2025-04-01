<script>
    export let data;

    $: title = data.title;
</script>

<h1>About this site</h1>
<p>{title}</p>
<a href="/">Home</a>