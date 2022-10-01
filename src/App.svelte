<script>
  import "./app.css";
  import Transition from "svelte-class-transition";
  import {
    Router,
    Link,
    Route,
    createHistory,
    createMemorySource,
  } from "svelte-navigator";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
  import Portofolio from "./routes/Portofolio.svelte";
  import Contact from "./routes/Contact.svelte";
  let Profile = "images/profile.JPG";
  const history = createHistory(createMemorySource());
</script>

<Router {history}>
  <Transition
    transitions="transition transform"
    inTransition="ease-out duration-1000"
    inState="opacity-0 -translate-y-16"
    onState="opacity-100 translate-x-0"
  >
    <div class="container mx-auto fixed-top">
      <div class="navbar bg-base-100">
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
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><Link to="/">Home</Link></li>
              <li><Link to="About">About</Link></li>
              <li><Link to="Portofolio">Portofolio</Link></li>
              <li><Link to="Contact">Contact</Link></li>
            </ul>
          </div>
          <div class="avatar">
            <div
              class="w-12 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2"
            >
              <img src={Profile} alt="PhotoProfile" />
            </div>
          </div>
          <a class="btn btn-ghost normal-case text-xl" href="/"
            >Wino Rama Putra</a
          >
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li><Link to="/">Home</Link></li>
            <li><Link to="About">About</Link></li>
            <li><Link to="Portofolio">Portofolio</Link></li>
            <li><Link to="Contact">Contact</Link></li>
          </ul>
        </div>
        <div class="navbar-end">
          <a class="btn" href="mailto:wino99oniw@gmail.com">Hire Me</a>
        </div>
      </div>
    </div>
    <main class="scroll-behavior: smooth; overflow-scroll;">
      <Route path="/" component={Home} />
      <Route path="About" component={About} />
      <Route path="Portofolio" component={Portofolio} />
      <Route path="Contact" component={Contact} />
    </main>
  </Transition>
</Router>
