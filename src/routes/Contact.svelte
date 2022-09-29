<script>
  import "../app.css";
  import Transition from "svelte-class-transition";
  let linkedin =
    "https://img.shields.io/badge/-Linkedin-black?style=for-the-badge&logo=Linkedin";
  let instagram =
    "https://img.shields.io/badge/-Instagram-black?style=for-the-badge&logo=Instagram";
  let email =
    "https://img.shields.io/badge/-Gmail-black?style=for-the-badge&logo=Gmail";
</script>

<Transition
  transitions="transition transform"
  inTransition="ease-out duration-1000"
  inState="opacity-0 -translate-y-16"
  onState="opacity-100 translate-x-0"
>
  <div class="container mx-auto">
    <div class="flex justify-center mt-0 space-x-6 pt-36">
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
</Transition>
