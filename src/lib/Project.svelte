<script>
    export let data = {};
    export let hLevel = 2;
</script>

<article>
    <svelte:element this = {"h" + hLevel}>{data.title}</svelte:element>
    <img src={data.image} alt="">
    <div>
        <p>{data.description}</p>
        <h3>{data.year}</h3>
    </div>
</article>

<style>
    p {
        font-size: 0.7em;
    }
    img {
        height: 12em;
    }
</style>