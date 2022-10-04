<script>
  import "../app.css";
  import Transition from "svelte-class-transition";
  import Typewriter from "svelte-typewriter";
  import Saos from "saos";
  import TabControl from "../lib/TabControl.svelte";
  import Tab from "../lib/Tab.svelte";
  import Icon from "svelte-awesome";
  import { externalLink } from "svelte-awesome/icons";
  let Profile = "images/profile.JPG";
  let Stats =
    "https://github-readme-stats.vercel.app/api?username=wxnx&show_icons=true&theme=dark&custom_title=Github%20Stats&layout=compact&count_private=true";
  let Used_Language =
    "https://github-readme-stats.vercel.app/api/top-langs/?username=wxnx&langs_count=100&layout=compact&theme=dark&custom_title=Most%20Used%20Languages&card_width=444&count_private=true";
  let Coding_Stats =
    "https://github-readme-stats.vercel.app/api/wakatime?username=wxnx&theme=dark&custom_title=Weekly%20Coding%20Stats&card_width=440";
  const portoData = [
    { title: "Project Experience", content: "Tab 1" },
    { title: "Personal Project", content: "Tab 2" },
    { title: "Personal Statistic", content: "Tab 3" },
  ];
  let set_title = "My Portofolio";
</script>

<!-- Portofolio -->
<Transition
  transitions="transition transform"
  inTransition="ease-out duration-1000"
  inState="opacity-0 -translate-y-16"
  onState="opacity-100 translate-x-0"
>
  <Saos animation={"load 2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
    <div
      class="container mx-auto min-h-screen justify-center items-center pt-20"
      id="Portofolio"
    >
      <Typewriter interval={100}>
        <h1 class="text-4xl text-gray-800 font-bold text-center">
          {set_title}
        </h1>
      </Typewriter>

      <div class="grid flex grid-cols-6 gap-4 text-center py-6">
        <div class="col-start-2 col-span-4">
          <TabControl let:isTitle let:isContent>
            <Tab id="0" {isTitle} {isContent}>
              <span slot="title"> Project Experience </span>
              <!-- Project Experience -->
              <Typewriter scramble={900}>
                <p>
                  These are some of the projects I have worked on. These include
                  the <span class="font-bold"
                    >Build Feature Extraction project with Python</span
                  >
                  (as a college final project and also for PPM Telkom University)
                  and
                  <span class="font-bold">Web Development with Laravel</span> (PPM
                  Telkom University).
                </p>
              </Typewriter>
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
              <Typewriter scramble={900}>
                <p>
                  This is a project I'm still working on. I'm working with <span
                    class="font-bold">Svelte</span
                  >
                  to create a portfolio website, and also with
                  <span class="font-bold">Python</span> to make automatic tweets
                  on twitter.
                </p>
              </Typewriter>
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
  </Saos>
</Transition>
