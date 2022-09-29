<script>
  import Transition from "svelte-class-transition";
  import Typewriter from "svelte-typewriter";
  import "../app.css";
</script>

<!-- Hero -->
<Transition
  transitions="transition transform"
  inTransition="ease-out duration-1000"
  inState="opacity-0 -translate-y-16"
  onState="opacity-100 translate-x-0"
>
  <div class="container mx-auto justify-center items-center">
    <div class="hero min-h-screen">
      <div class="hero-content text-center">
        <div class="md:max-w-2xl">
          <h1 class="text-4xl text-gray-800 font-bold">
            <span class="block xl:inline">Hello!</span>
            <br />
            <!-- <span class="block xl:inline">
                        I'm a Creative <Typewriter loopRandom><span>Web Developer.</span><span>Coder.</span></Typewriter>
                    </span>  -->
          </h1>

          <p class="p-8">
            I am an adaptable person and have an interest in technological
            advances. Interested in programming, especially in Website
            Development, Mobile Apps Development, and also related to Machine
            Learning. For my interest in Mobile Developer is still in the early
            stages of learning and for Machine Learning Engineer is quite
            advanced. And now I want to apply my interest as a Web Developer to
            something that has value. It is not impossible that one day I will
            apply all my interests to a real value.
          </p>
          <a
            class="btn btn"
            href="https://drive.google.com/uc?id=1Do1zZA-COMqyzGTPFPtig7L09O5enzbl&export=download"
            >Download Resume</a
          >
        </div>
      </div>
    </div>
  </div>
</Transition>
