<script>
  import "./app.css";
  import Transition from "svelte-class-transition";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
  import Portofolio from "./routes/Portofolio.svelte";
  import Contact from "./routes/Contact.svelte";

  let Profile = "images/profile.webp 1024w";

  const pages = [
    { name: "Home", component: Home },
    { name: "About", component: About },
    { name: "Portofolio", component: Portofolio },
    { name: "Contact", component: Contact },
  ];

  let selectedPage = pages[0];
  $: console.dir(selectedPage);

  const loadPage = (obj) => (selectedPage = obj);
</script>

<main class="font-Montserrat scroll-behavior: smooth;">
  <!-- NavBar -->
  <Transition
    transitions="transition transform"
    inTransition="ease-out duration-1000"
    inState="opacity-0 -translate-y-16"
    onState="opacity-100 translate-x-0"
  >
    <div class="container mx-auto fixed-top">
      <div class="navbar bg-class-nav sm:rounded-full sm:mt-6">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden" for="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                /></svg
              >
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow-xl bg-navbar rounded-box w-52"
            >
              <li>
                {#each pages as page}
                  <button
                    class="hover:btn m-2"
                    title={page.name}
                    on:click={() => loadPage(page)}
                  >
                    {page.name}</button
                  >
                {/each}
              </li>
            </ul>
          </div>
          <div class="avatar m-2">
            <div
              class="w-12 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2"
            >
              <picture>
                <source type="image/webp" srcset={Profile} />
                <source srcset={Profile} />
                <img alt="Profile" />
              </picture>
            </div>
          </div>
          <a class="btn btn-ghost normal-case text-xl m-2 xl:hidden" href="/">
            Wino
          </a>
          <a
            class="btn btn-ghost normal-case text-xl m-2 hidden xl:flex"
            href="/"
          >
            Wino Rama Putra
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              {#each pages as page}
                <button
                  class="hover:btn m-2"
                  title={page.name}
                  on:click={() => loadPage(page)}
                >
                  {page.name}</button
                >
              {/each}
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <a
            class="btn hover:btn-ghost hover:text-base-content m-2"
            href="mailto:wino99oniw@gmail.com">Hire Me</a
          >
        </div>
      </div>
    </div>
  </Transition>
  <svelte:component this={selectedPage.component} />
</main>
