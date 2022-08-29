<script>
  import Transition from "svelte-class-transition";
	import Typewriter from "svelte-typewriter";
  import Carousel from 'svelte-carousel';
  import Icon from 'svelte-awesome';
  import { graduationCap, book, fileTextO, language, externalLink } from 'svelte-awesome/icons';
  let Profile = 'images/profile.JPG';
  let Stats = 'https://github-readme-stats.vercel.app/api?username=wxnx&show_icons=true&theme=dark&custom_title=Github%20Stats&layout=compact&count_private=true';
  let Used_Language = 'https://github-readme-stats.vercel.app/api/top-langs/?username=wxnx&langs_count=100&layout=compact&theme=dark&custom_title=Most%20Used%20Languages&card_width=444&count_private=true';
  let Coding_Stats = 'https://github-readme-stats.vercel.app/api/wakatime?username=wxnx&theme=dark&custom_title=Weekly%20Coding%20Stats&card_width=440';
  let linkedin = 'https://img.shields.io/badge/-Linkedin-black?style=for-the-badge&logo=Linkedin';
  let instagram = 'https://img.shields.io/badge/-Instagram-black?style=for-the-badge&logo=Instagram';
  let email = 'https://img.shields.io/badge/-Gmail-black?style=for-the-badge&logo=Gmail';
</script>

<main class="bg-body text-indigo-600 font-Montserrat pb-12 scroll-behavior: smooth; overflow-scroll;">
  <!-- Header -->
  <header class="py-6"> 
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 -translate-x-16"
      onState="opacity-100 translate-x-0"
    >
      <!-- <div class="container mx-auto  max-w-8xl flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-indigo-600 mb-4 md:mb-0" href="/">
          <span class="ml-3 text-xl font-bold">wxnx</span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="#home" class="mr-5 font-bold lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">Home</a>
          <a href="#about" class="mr-5 font-bold lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">About Me</a>
          <a href="#portofolio" class="mr-5 font-bold lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">My Portfolio</a>
          <a href="#contact" class="mr-5 font-bold lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">My Contacts</a>
        </nav>
        <button class="btn btn-primary px-6 py-2 bg-base font-bold  mt-4 md:mt-0"><a href="mailto:wino99oniw@gmail.com">Hire Me</a></button>
      </div> -->
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <!-- <div class="dropdown ">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content absolute relative mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#portofolio">My Portofolio</a></li>
            <li><a href="#contact">My Contacts</a></li>
            </ul>
          </div> -->
          <a class="btn btn-ghost normal-case text-xl" href="/">wxnx'site</a>
        </div>
        <!-- <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#portofolio">My Portofolio</a></li>
            <li><a href="#contact">My Contacts</a></li>
          </ul>
        </div> -->
        <div class="navbar-end">
          <a class="btn btn-primary" href="mailto:wino99oniw@gmail.com">Hire Me</a>
        </div>
      </div>
    </Transition>

    <!-- Home -->
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 -translate-y-16"
      onState="opacity-100 translate-x-0"
    >
      <div class="container mx-auto mt-10 md:mt-8 md:space-x-8 md:py-20 md:grid grid-cols-3 justify-center lg:px-20" id="home">
        <div class="grid justify-center items-center order-1 col-span-1">
          <img class="block lg:h-80 md:h-64 h-40 rounded-full" src={Profile} alt="" />
        </div>
        <div class="mt-8 md:mt-0 lg:justify-end col-span-2">
          <h1 class="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">
            <span class="block xl:inline text-indigo-600">Hi, I’m Wino Rama Putra.</span><br>
            <span class="block text-indigo-600 xl:inline">Creative <Typewriter loopRandom><span>Web Developer.</span><span>Coder.</span></Typewriter></span>
          </h1>
          <p class="text-xl text-gray-500 text-center font-medium md:text-left">
            I'm a Fresh Graduate Bachelor of Informatics.
          </p>
          <button class="block mt-8 mx-auto md:mx-0 text-2xl py-2 px-6 text-red-50 font-semibold rounded bg-indigo-500 hover:bg-indigo-800"><a href="https://drive.google.com/uc?id=1Do1zZA-COMqyzGTPFPtig7L09O5enzbl&export=download">Download Resume</a></button>
        </div>
      </div>
    </Transition>
  </header>

  <!-- About -->
  <section class="py-20" id="about">
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 translate-x-16"
      onState="opacity-100 translate-x-0"
    >   
      <div class="max-w-5xl px-6 mx-auto text-center">
        <h1 class="secondary-title text-4xl font-bold mb-6">About Me</h1>
        <p class="text-gray-500 mt-4">
        I am an adaptable person and have an interest in technological advances. Interested in programming, especially in Website Development, Mobile Apps Development, and also related to Machine Learning. For my interest in Mobile Developer is still in the early stages of learning and for Machine Learning Engineer is quite advanced. And now I want to apply my interest as a Web Developer to something that has value. It is not impossible that one day I will apply all my interests to a real value.
        </p>
        <Carousel
          autoplay
          autoplayDuration={5000}
          autoplayProgressVisible
          pauseOnFocus
        >
          <div class="max-w-5xl px-6 py-5 mx-auto text-center">
            <h2 class="text-2xl font-semibold text-indigo-600">Education</h2>
            <p class="text-gray-500 mt-4">
              <Icon data={graduationCap} scale={1.5}/> &nbsp; Bachelor of Informatics : Telkom University (2017-2022)
            </p>
        </div>
        <div class="max-w-5xl px-6 py-5 mx-auto text-center">
          <h2 class="text-2xl font-semibold text-indigo-600">Publication</h2>
          <p class="text-gray-500 mt-4">
            <a href="https://ieeexplore.ieee.org/document/9689119"><Icon data={book} scale={1.5}/> &nbsp; Study of Feature Extraction Methods to Detect Valvular Heart Disease (VHD) Using a Phonocardiogram</a>
          </p>
        </div>
        <div class="max-w-5xl px-6 py-5 mx-auto text-center">
          <h2 class="text-2xl font-semibold text-indigo-600">Test Scores</h2>
          <p class="text-gray-500 mt-4">
            <Icon data={fileTextO} scale={1.5}/> &nbsp; English Proficiency Test (EPrT) : 450 out of 677 (Dec 2021)
          </p>
        </div>
        <div class="max-w-5xl px-6 py-5 mx-auto text-center">
          <h2 class="text-2xl font-semibold text-indigo-600">Languages</h2>
          <p class="text-gray-500 mt-4">
            <Icon data={language} scale={1.5}/> &nbsp; Indonesia : Native or bilingual proficiency <br>
            <Icon data={language} scale={1.5}/> &nbsp; English : Limited working proficiency
          </p>
        </div>
        </Carousel>
    </div>
  </Transition>
  </section>

  <!-- Project -->
  <div class="container mt-20 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full" id="projects"> 
    <Transition 
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 -translate-x-16"
      onState="opacity-100 translate-x-0"
    > 
      <section class="w-full text-center">
        <h2 id="work" class="secondary-title md:text-left text-4xl font-bold mb-6">Projects</h2>
        <p class="section-paragraph md:text-left text-gray-500">
        These are some of the projects I have worked on. These include the Build Feature Extraction project (as a college final project and also for PPM Telkom University) and Web Development (PPM Telkom University).
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div class="card relative bg-base-100 shadow-xl hover:scale-110 transition duration-300 ease-in-out">
            <figure class="px-10 pt-10">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=wxnx&repo=Data_Program&theme=dark" alt="" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Build Feature Extraction Model with Python</h2>
              <p class="text-gray-800">
                <a href="https://colab.research.google.com/drive/1rB2JgCGDUaXdUvT-sW3KScLdk9DYKbpW?usp=sharing">
                  <Icon data={externalLink} scale={1.2} /> &nbsp; Find out more
                </a>
              </p>
            </div>
          </div>
          <div class="card relative bg-base-100 shadow-xl hover:scale-110 transition duration-300 ease-in-out">
            <figure class="px-10 pt-10">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=wxnx&repo=stetoskop_digital&theme=dark" alt="" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Web Development with Laravel Framework</h2>
              <p class="text-gray-800">
                <a href="https://github.com/wxnx/stetoskop_digital.git">
                  <Icon data={externalLink} scale={1.2}/> &nbsp; Find out more
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Transition>
  </div>

  <!-- Github Stats -->
  <div class="container mt-10 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24">
    <section class="w-full">
      <h2 id="" class="secondary-title md:text-left text-4xl font-bold mb-6">My Github Stats</h2>
      <p class="section-paragraph md:text-left text-gray-500">
      These are some stats from my github.
      </p>
      <div class="space-y-12 my-5 lg:px-72 justify-items-stretch">
        <Carousel
          autoplay
          autoplayDuration={5000}
          autoplayProgressVisible
          pauseOnFocus
        >
          <img src={Stats} class="w-full rounded-xl" alt="">
          <img src={Used_Language} class="w-full rounded-xl" alt="">
          <img src={Coding_Stats} class="w-full rounded-xl" alt="">
        </Carousel>
      </div>
    </section>
  </div>

  <!-- Ongoing Projects -->
  <div class="container mt-10 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
    <section class="w-full text-center">
      <h2 id="" class="secondary-title md:text-left text-4xl font-bold mb-6">Ongoing Projects</h2>
      <p class="section-paragraph md:text-left text-gray-500">
      This is a project I'm still working on.
      </p>
      <div class="space-y-12 my-5">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div class="items-center relative">
            <div class="card relative bg-base-100 shadow-xl hover:scale-110 transition duration-300 ease-in-out">
              <figure class="px-10 pt-10">
                <img src="https://github-readme-stats.vercel.app/api/pin/?username=wxnx&repo=my-site&theme=dark" alt="" class="rounded-xl" />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">Development My Portfolio Site</h2>
                <p class="text-gray-800">
                  <a href="https://github.com/wxnx/my-site.git">
                    <Icon data={externalLink} scale={1.2} /> &nbsp; Find out more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>  

  <!-- Contact -->
  <div class="container mt-40 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full" id="contact">
    <section class="w-full">
      <h2 id="" class="secondary-title md:text-left mb-6 font-bold text-4xl">My Contacts</h2>
      <div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-0">
        <div class="mt-0">
          <div class="flex mt-0 space-x-6">
            <a href="mailto:wino99oniw@gmail.com">
              <img class="contact1" src={email} alt="">
            </a>
            <a href="https://www.linkedin.com/in/winoramaputra/">
              <img class="contact2" src={linkedin} alt="">
            </a>
            <a href="https://www.instagram.com/winoramaputra/">
              <img class="contact3" src={instagram} alt="">
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Footer -->
  <div class="container mt-5 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
    <section class="w-full text-center text-gray-500">
      <p>Copyright © 2022 - All right reserved</p>
    </section>
  </div>

</main>


<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  a .contact1 .contact2 .contact3{
    width: 42px;
    height: 42px;
  }
</style>