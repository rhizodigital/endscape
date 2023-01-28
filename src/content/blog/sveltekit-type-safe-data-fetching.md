---
title: How SvelteKit makes type-safe data fetching easier and better!
description: It's been around a month since SvelteKit v1 was released and I fortunately got enough time to play around with it. In this blog post.
pubDate: "2023-01-01"
tags: 
- JavaScript
- SvelteKit
- Hello World
authors:
- Michael Sables
heroImage: '../../../public/images/blog/jignesh-bosamia-tOoNt1XkJ-Y-unsplash.jpg'
---

First of all I created a +page.ts file inside my todo route and created a load function of the type PageLoad . I have fetched the json response from dummyjson inside the function and returned an array of todos from the response. The type t at the beginning is optional and you may not use it but the type todo is important if you want end-to-end type-safety (also it’s a good practice to keep all the types in a separate file and import them, instead of cluttering the main file).

SvelteKit then generates the types for the load function which could be used in our +page.svelte. In the src/routes/todo/+page.svelte , we first need to import the generated types and then export it as data . The next part is pretty easy if you already know Svelte syntax, we just need to iterated over the array of list and list them down.

If you do everything correctly and then head over to localhost:5173/todo, you would be able to see something like this -