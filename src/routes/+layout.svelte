<script>
    import { base } from "$app/paths";
    import { page } from "$app/stores";

    let pages = [
        {url: "/", title: "Home"},
        {url: "/projects", title: "Projects"},
        {url: "/curriculum", title: "Curriculum"},
        {url: "/contact", title: "Contact"},
        {url: "/meta", title: "Meta"},
        {url: "https://github.com/PedroPHC25", title: "GitHub"}
    ];

    let localStorage = globalThis.localStorage ?? {};

    // let colorScheme = "light dark";
    let colorScheme = localStorage.colorScheme ?? "light dark";

    let root = globalThis?.document?.documentElement;
    $: root?.style.setProperty("color-scheme", colorScheme);
    $: localStorage.colorScheme = colorScheme;
</script>

<nav>
    {#each pages as p}
        <a 
            href={p.url.startsWith("http") ? p.url: `${base}${p.url}`}
            class:current={$page.route.id === p.url}
            target={p.url.startsWith("http") ? "_blank" : undefined}>
            
            {p.title}
        </a>
    {/each}
</nav>

<label class="color-scheme">
    Theme:
    <select bind:value={ colorScheme }>
        <option value="light dark"> Automatic </option>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
    </select>
</label>

<style>
    nav {
        display: flex;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color:oklch(80% 3% 200);
        margin-bottom: 1em;
    }

    nav a {
        flex: 1;
        text-decoration: none;
        color: inherit;
        text-align: center;
        padding: 0.5em;
    }

    nav .current {
        border-bottom-width: 0.4em;
        border-bottom-style: solid;
        border-bottom-color: oklch(80% 3% 200);
        padding: -0.1em;
        font-weight: bold;
    }

    nav a:hover {
        border-bottom-width: 0.4em;
        border-bottom-style: solid;
        border-bottom-color: var(--color-accent);
        background-color: oklch(from var(--color-accent) h h h / 10%);
        padding-bottom: -0.1em;
    }

    .color-scheme {
        position:absolute;
        top: 1rem;
        right: 1rem;
        display: inline-flex;
        gap: 5px;
    }
</style>

<slot />