<script>
  import "../app.css";
  import Transition from "svelte-class-transition";
  import Typewriter from "svelte-typewriter";
  import Saos from "saos";
  let linkedin =
    "https://img.shields.io/badge/-Linkedin-black?style=for-the-badge&logo=Linkedin";
  let instagram =
    "https://img.shields.io/badge/-Instagram-black?style=for-the-badge&logo=Instagram";
  let email =
    "https://img.shields.io/badge/-Gmail-black?style=for-the-badge&logo=Gmail";
  let set_title = "My Contact";
</script>

<!-- Contact -->
<Transition
  transitions="transition transform"
  inTransition="ease-out duration-1000"
  inState="opacity-0 -translate-y-16"
  onState="opacity-100 translate-x-0"
>
  <Saos animation={"load 2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
    <div class="container mx-auto min-h-screen py-20" id="Contact">
      <Typewriter interval={100}>
        <h1 class="text-4xl text-gray-800 font-bold text-center">
          {set_title}
        </h1>
      </Typewriter>

      <div class="flex justify-center mt-0 md:space-x-6 lg:space-x-6 py-36">
        <a href="mailto:wino99oniw@gmail.com">
          <img class="contact1" src={email} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/winoramaputra/">
          <img class="contact2" src={linkedin} alt="" />
        </a>
        <a href="https://www.instagram.com/winoramaputra/">
          <img class="contact3" src={instagram} alt="" />
        </a>
      </div>
    </div>
  </Saos>
</Transition>
