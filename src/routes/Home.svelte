<script>
  import "../app.css";
  import Typewriter from "svelte-typewriter";
  import Transition from "svelte-class-transition";
  import Saos from "saos";

  const description =
    "\
  Hello! I am Wino Rama Putra. I am an adaptable person and have an\
  interest in technological advances. Interested in programming,\
  especially in  <span class='font-bold'>Website Development, Mobile Apps Development,</span>\
  and also related to <span class='font-bold'>Machine Learning</span>. For my interest in \
  <span class='font-bold'>Mobile Developer</span> is still in\
  the early stages of learning and for <span class='font-bold'>Machine Learning Engineer</span>\
  is quite advanced. And now I want to apply my interest as\
  a <span class='font-bold'>Web Developer</span> to something that has value.\
  It is not impossible that one day I will apply all my interests to a real value.";
</script>

<!-- Hero -->
<Transition
  transitions="transition transform"
  inTransition="ease-out duration-1000"
  inState="opacity-0 -translate-y-16"
  onState="opacity-100 translate-x-0"
>
  <div class="py-20 md:py-0" id="Home">
    <div class="hero min-h-screen">
      <div class="hero-content text-center">
        <div class="md:max-w-2xl">
          <Saos animation={"load 2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
            <Typewriter interval={100}>
              <h2 class="text-4xl text-gray-800 font-bold">Hello!</h2>
            </Typewriter>
            <h2 class="text-4xl text-gray-800 font-bold">
              <Typewriter interval={100} delay={900}>
                <h2>I'm a Creative</h2>
              </Typewriter>
              <Typewriter loop={2000} delay={3500} interval={100}>
                <span> Coder </span>
                <span> Web Developer </span>
                <span> Python Developer. </span>
              </Typewriter>
            </h2>
            <Typewriter scramble={900}>
              <!-- Intro -->
              <p class="p-8">
                {@html description}
              </p>
            </Typewriter>
            <Typewriter scramble={900}>
              <a
              class="btn btn hover:btn-ghost hover:text-base-content"
              href="https://drive.google.com/uc?id=1Do1zZA-COMqyzGTPFPtig7L09O5enzbl&export=download"
              >Download Resume</a
            >
            </Typewriter>
          </Saos>
        </div>
      </div>
    </div>
  </div>
</Transition>
