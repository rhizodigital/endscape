<script>
    import { menuOpen } from "@utils/stores";
    import { slide, fly } from 'svelte/transition';
    import { quintOut, expoIn } from 'svelte/easing';
    import Logo from "./Logo.svelte";

    const menuItems = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Blog",
            href: "/blog"
        },
        {
            name: "Services",
            href: "/services"
        },
        {
            name: "Case Studies",
            href: "/case-studies"
        },
    ]
</script>

<div class="flex items-center justify-between h-20 text-white md:text-gray-900 transition-all">
    <Logo />
    <nav class="hidden md:flex md:items-center md:gap-4">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
    </nav>
    <button class="md:hidden" on:click={() => $menuOpen = true}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        </svg>
    </button>
</div>

{#if $menuOpen}
<div class="absolute w-full top-0 left-0 bg-gray-100 rounded-b-3xl overflow-hidden text-gray-800 md:hidden shadow-lg" transition:slide="{{delay: 50, duration: 300, easing: quintOut }}">
    <div class="px-4 w-full">
        <div class="flex items-center justify-between h-20">
            <Logo />
            <button class="md:hidden" on:click={() => $menuOpen = false}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>
    <div class="bg-white rounded-3xl p-4 flex-grow-1 flex-grow">
        <div class="flex flex-col gap-4">
            <div>
                {#each menuItems as item, index}
                <a href="{item.href}" class="py-2 block" in:fly="{{x: -200,duration: 500,delay:index*100 }}" >{item.name}</a>
                {/each}
            </div>

            <a href="" class="bg-orange-400 py-2 px-3 rounded-2xl text-center text-white font-semibold">Get in touch</a>
        </div>
    </div>

</div>
{/if}