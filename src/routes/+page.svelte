<script>
    import projects from "$lib/projects.json";
    import Project from "$lib/Project.svelte";
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