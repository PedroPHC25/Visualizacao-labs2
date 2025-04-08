<script>
    import projects from "$lib/projects.json";
    import Project from "$lib/Project.svelte";

    import { onMount } from "svelte";

    let githubData = null;
    let loading = true;
    let error = null;

    onMount(async () => {
        try {
            const response = await fetch("https://api.github.com/users/PedroPHC25");
            githubData = await response.json();
        } catch (err) {
            error = err;
        }
        loading = false;
    });
</script>

<h1> Pedro Henrique Coterli </h1>

<!-- <p> (Paragraph) represents a paragraph of text.-->
<p> Hello everyone! I am almost 20 years old, I was born in Rondonópolis - MT and I am currently living in Rio de Janeiro - RJ, studying Data Science and Artificial Intelligence at FGV. </p>

<!-- <img> (Image) tag is used to display images.-->
<img src="images/my_personal_image.png" alt="Me at the Museu do Amanhã." height="400">

<h1> Latest projects </h1>

<div class = "projects">
    {#each projects.slice(0, 3) as p}
        <Project data = {p} hLevel = "3" />
    {/each}
</div>

{#if loading}
    <p>Loading...</p>
{:else if error}
    <p class="error">Something went wrong: {error.message}</p>
{:else}
    <section>
        <h2>My GitHub Stats</h2>
        <dl>
            <dt>Followers</dt>
            <dd>{githubData.followers}</dd>
            <dt>Following</dt>
            <dd>{githubData.following}</dd>
            <dt>Public Repositories</dt>
            <dd>{githubData.public_repos}</dd>
        </dl>
    </section>
{/if}

<style>
    dl{
        display: grid;
        grid-template-columns: auto;
    }
    dt{
        grid-row: 1;
        font-family: inherit;
        font-weight: bold;
        color: var(--border-gray);
        text-transform: uppercase;
    }
    dd{
        font-family: inherit;
        font-weight: bold;
    }
    section{
        border-width:0.15em;
        border-style:solid;
        border-color:var(--border-gray);
        padding-left: 1em;
        padding-right: 1em;
    }
</style>