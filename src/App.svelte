<script>
  import "./app.css";
  import Transition from "svelte-class-transition";
  // import Typewriter from "svelte-typewriter";
  import TabControl from "./lib/TabControl.svelte";
  import Tab from "./lib/Tab.svelte";
  import Icon from "svelte-awesome";
  import {
    graduationCap,
    book,
    language,
    externalLink,
  } from "svelte-awesome/icons";
  let Profile = "images/profile.JPG";
  let Stats =
    "https://github-readme-stats.vercel.app/api?username=wxnx&show_icons=true&theme=dark&custom_title=Github%20Stats&layout=compact&count_private=true";
  let Used_Language =
    "https://github-readme-stats.vercel.app/api/top-langs/?username=wxnx&langs_count=100&layout=compact&theme=dark&custom_title=Most%20Used%20Languages&card_width=444&count_private=true";
  let Coding_Stats =
    "https://github-readme-stats.vercel.app/api/wakatime?username=wxnx&theme=dark&custom_title=Weekly%20Coding%20Stats&card_width=440";
  let linkedin =
    "https://img.shields.io/badge/-Linkedin-black?style=for-the-badge&logo=Linkedin";
  let instagram =
    "https://img.shields.io/badge/-Instagram-black?style=for-the-badge&logo=Instagram";
  let email =
    "https://img.shields.io/badge/-Gmail-black?style=for-the-badge&logo=Gmail";
  const aboutData = [
    { title: "Experience", content: "Tab 1" },
    { title: "Education", content: "Tab 2" },
    { title: "Publication", content: "Tab 3" },
    { title: "Languages", content: "Tab 4" },
  ];
  const portoData = [
    { title: "Project Experience", content: "Tab 1" },
    { title: "Personal Project", content: "Tab 2" },
    { title: "Personal Statistic", content: "Tab 3" },
  ];
</script>

<main class="scroll-behavior: smooth; overflow-scroll;">
  <!-- NavBar -->
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
              <li><a href="#Home">Home</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#Portofolio">Portofolio</a></li>
              <li><a href="#Contact">Contact</a></li>
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
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Portofolio">Portofolio</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>
        <div class="navbar-end">
          <a class="btn" href="mailto:wino99oniw@gmail.com">Hire Me</a>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Hero -->
  <Transition
    transitions="transition transform"
    inTransition="ease-out duration-1000"
    inState="opacity-0 -translate-y-16"
    onState="opacity-100 translate-x-0"
  >
    <div
      class="container mx-auto justify-center items-center py-20 md:py-0"
      id="Home"
    >
      <div class="hero min-h-screen">
        <div class="hero-content text-center">
          <div class="md:max-w-2xl">
            <h1 class="text-4xl text-gray-800 font-bold">
              <span class="block xl:inline">Hello!</span>
              <br />
              <!-- <span class="block xl:inline">
                I'm a Creative <Typewriter loopRandom
                  ><span>Web Developer.</span><span>Coder.</span></Typewriter
                >
              </span> -->
            </h1>
            <p class="p-8">
              I am an adaptable person and have an interest in technological
              advances. Interested in programming, especially in Website
              Development, Mobile Apps Development, and also related to Machine
              Learning. For my interest in Mobile Developer is still in the
              early stages of learning and for Machine Learning Engineer is
              quite advanced. And now I want to apply my interest as a Web
              Developer to something that has value. It is not impossible that
              one day I will apply all my interests to a real value.
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

  <!-- About -->
  <Transition
    transitions="transition transform"
    inTransition="ease-out duration-1000"
    inState="opacity-0 -translate-y-16"
    onState="opacity-100 translate-x-0"
  >
    <div
      class="container mx-auto min-h-screen justify-center items-center pt-20"
      id="About"
    >
      <h1 class="text-4xl text-gray-800 font-bold text-center">About</h1>
      <div class="grid flex grid-cols-5 gap-3 text-center py-6">
        <div class="col-start-2 col-span-3">
          <!-- Intro -->
          <p>
            Hello! I'm Wino Rama Putra. I am an adaptable person and have an
            interest in technological advances. Interested in programming,
            especially in Website Development, Mobile Apps Development, and also
            related to Machine Learning. For my interest in Mobile Developer is
            still in the early stages of learning and for Machine Learning
            Engineer is quite advanced. And now I want to apply my interest as a
            Web Developer to something that has value. It is not impossible that
            one day I will apply all my interests to a real value.
          </p>
        </div>
        <div class="col-start-2 col-span-3">
          <TabControl let:isTitle let:isContent>
            <Tab id="0" {isTitle} {isContent}>
              <span slot="title"> Experience </span>
              <!-- Experience -->
              <div class=" w-full">
                <table class="table-compact w-full">
                  <thead>
                    <tr>
                      <th> WEB CONTENT ADMINISTRATOR, TELKOM UNIVERSITY </th>
                    </tr>
                  </thead>
                  <tbody>
                    <td>
                      <span class="badge badge-ghost badge-sm"
                        >MAY 2020 – AUGUST 2020 (INTERNSHIP)</span
                      >
                      <br />
                      Inputting content according to the features available on a
                      WordPress-based website.
                    </td>
                  </tbody>
                </table>
              </div>
              <div class="w-full">
                <table class="table-compact w-full">
                  <thead>
                    <tr>
                      <th>
                        WEB DEVELOPER PROTOTYPE STETOSKOP DIGITAL, PPM TELKOM
                        UNIVERSITY
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <td>
                      <span class="badge badge-ghost badge-sm"
                        >MAY 2021 – JANUARY 2022 (CONTRACT)</span
                      >
                      <br />
                      Develop a website to detect heart valve abnormalities using
                      a Laravel-based web framework and to model the detection of
                      heart valve abnormalities using Machine Learning with Python
                      algorithms. The result of this research is a website prototype
                      based on localhost.
                    </td>
                  </tbody>
                </table>
              </div>
            </Tab>
            <Tab id="1" {isTitle} {isContent}>
              <span slot="title"> Education </span>
              <!-- Education -->
              <div class="card w-full">
                <div class="card-body">
                  <p>
                    <Icon data={graduationCap} scale={1.5} /> &nbsp; Bachelor of
                    Informatics : Telkom University (2017-2022)
                  </p>
                </div>
              </div>
            </Tab>
            <Tab id="2" {isTitle} {isContent}>
              <span slot="title"> Publication </span>
              <!-- Publication -->
              <div class="card w-full">
                <div class="card-body">
                  <p>
                    <a
                      class="link link-hover"
                      href="https://ieeexplore.ieee.org/document/9689119"
                      ><Icon data={book} scale={1.5} /> &nbsp; Study of Feature Extraction
                      Methods to Detect Valvular Heart Disease (VHD) Using a Phonocardiogram</a
                    >
                  </p>
                </div>
              </div>
            </Tab>
            <Tab id="3" {isTitle} {isContent}>
              <span slot="title"> Languages </span>
              <!-- Languages -->
              <div class="card w-full">
                <div class="card-body">
                  <p>
                    <Icon data={language} scale={1.5} /> &nbsp; Indonesia : Native
                    or bilingual proficiency <br />
                    <Icon data={language} scale={1.5} /> &nbsp; English : Limited
                    working proficiency
                  </p>
                </div>
              </div>
            </Tab>
          </TabControl>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Portofolio -->
  <Transition
    transitions="transition transform"
    inTransition="ease-out duration-1000"
    inState="opacity-0 -translate-y-16"
    onState="opacity-100 translate-x-0"
  >
    <div
      class="container mx-auto min-h-screen justify-center items-center pt-20"
      id="Portofolio"
    >
      <h1 class="text-4xl text-gray-800 font-bold text-center">Portofolio</h1>
      <div class="grid flex grid-cols-6 gap-4 text-center py-6">
        <div class="col-start-2 col-span-4">
          <TabControl let:isTitle let:isContent>
            <Tab id="0" {isTitle} {isContent}>
              <span slot="title"> Project Experience </span>
              <!-- Project Experience -->
              <p>
                These are some of the projects I have worked on. These include
                the Build Feature Extraction project (as a college final project
                and also for PPM Telkom University) and Web Development (PPM
                Telkom University).
              </p>
              <div
                class="flex grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2"
              >
                <div>
                  <div
                    class="card relative bg-base-100 shadow-xl hover:scale-110 transition duration-300 ease-in-out"
                  >
                    <figure class="px-10 pt-10">
                      <img
                        src="https://github-readme-stats.vercel.app/api/pin/?username=wxnx&repo=Data_Program&theme=dark"
                        alt="Build Feature Extraction Model with Python"
                        class="rounded-xl"
                      />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">
                        Build Feature Extraction Model with Python
                      </h2>
                      <p class="text-gray-800">
                        <a
                          href="https://colab.research.google.com/drive/1rB2JgCGDUaXdUvT-sW3KScLdk9DYKbpW?usp=sharing"
                        >
                          <Icon data={externalLink} scale={1.2} /> &nbsp; Find out
                          more
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    class="card relative bg-base-100 shadow-xl hover:scale-110 transition duration-300 ease-in-out"
                  >
                    <figure class="px-10 pt-10">
                      <img
                        src="https://github-readme-stats.vercel.app/api/pin/?username=wxnx&repo=stetoskop_digital&theme=dark"
                        alt="Web Development with Laravel Framework"
                        class="rounded-xl"
                      />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">
                        Web Development with Laravel Framework
                      </h2>
                      <p class="text-gray-800">
                        <a href="https://github.com/wxnx/stetoskop_digital.git">
                          <Icon data={externalLink} scale={1.2} /> &nbsp; Find out
                          more
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab id="1" {isTitle} {isContent}>
              <span slot="title"> Personal Project </span>
              <!-- Personal Project -->
              <p>This is a project I'm still working on.</p>
              <div
                class="flex grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2"
              >
                <div>
                  <div
                    class="card relative bg-base-100 shadow-xl hover:scale-110 transition duration-300 ease-in-out"
                  >
                    <figure class="px-10 pt-10">
                      <img
                        src="https://github-readme-stats.vercel.app/api/pin/?username=wxnx&repo=my-site&theme=dark"
                        alt="Development My Portfolio Site"
                        class="rounded-xl"
                      />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">Development My Portfolio Site</h2>
                      <p class="text-gray-800">
                        <a href="https://github.com/wxnx/my-site.git">
                          <Icon data={externalLink} scale={1.2} /> &nbsp; Find out
                          more
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    class="card relative bg-base-100 shadow-xl hover:scale-110 transition duration-300 ease-in-out"
                  >
                    <figure class="px-10 pt-10">
                      <img
                        src="https://github-readme-stats.vercel.app/api/pin/?username=wxnx&repo=twitter-bot&theme=dark"
                        alt="Twitter Bot"
                        class="rounded-xl"
                      />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">Twitter Bot</h2>
                      <p class="text-gray-800">
                        <a href="https://github.com/wxnx/twitter-bot.git">
                          <Icon data={externalLink} scale={1.2} /> &nbsp; Find out
                          more
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab id="2" {isTitle} {isContent}>
              <span slot="title"> Personal Statistic </span>
              <!-- Personal Statistic -->
              <div
                class="flex grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2"
              >
                <div>
                  <h3 class="text-2xl font-bold">Github Statistic</h3>
                  <p>
                    These are some statistic from <a
                      class="link link-hover"
                      href="https://github.com/wxnx">my github</a
                    > .
                  </p>
                </div>
                <div>
                  <div
                    class="lg:mx-36 card relative bg-base-100 shadow-xl hover:scale-110 transition duration-300 ease-in-out"
                  >
                    <figure>
                      <img
                        src={Stats}
                        class="w-full rounded-xl"
                        alt="Git Stats"
                      />
                    </figure>
                  </div>
                </div>
                <div>
                  <div
                    class="lg:mx-36 card relative bg-base-100 shadow-xl hover:scale-110 transition duration-300 ease-in-out"
                  >
                    <figure>
                      <img
                        src={Used_Language}
                        class="w-full rounded-xl"
                        alt="Languages Stats"
                      />
                    </figure>
                  </div>
                </div>
                <div class="mt-10">
                  <h3 class="text-2xl font-bold">Coding Statistic</h3>
                  <p>
                    These are some statistic from my coding activity by <a
                      class="link link-hover"
                      href="https://wakatime.com/@wxnx">Wakatime</a
                    > .
                  </p>
                </div>
                <div class="lg:mx-36">
                  <div
                    class="card relative bg-base-100 shadow-xl hover:scale-110 transition duration-300 ease-in-out"
                  >
                    <figure>
                      <img
                        src={Coding_Stats}
                        class="w-full rounded-xl"
                        alt="Coding Activity"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </Tab>
          </TabControl>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Contact -->
  <Transition
    transitions="transition transform"
    inTransition="ease-out duration-1000"
    inState="opacity-0 -translate-y-16"
    onState="opacity-100 translate-x-0"
  >
    <div class="container mx-auto min-h-screen py-20" id="Contact">
      <h1 class="text-4xl text-gray-800 font-bold text-center">Contact</h1>
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
  </Transition>
</main>
