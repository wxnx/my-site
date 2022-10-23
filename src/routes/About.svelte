<script>
  import "../app.css";
  import Transition from "svelte-class-transition";
  import Typewriter from "svelte-typewriter";
  import Saos from "saos";
  import TabControl from "../lib/TabControl.svelte";
  import Tab from "../lib/Tab.svelte";
  import Icon from "svelte-awesome";
  import { graduationCap, book, language } from "svelte-awesome/icons";

  const aboutData = [
    { title: "Experience", content: "Tab 1" },
    { title: "Education", content: "Tab 2" },
    { title: "Publication", content: "Tab 3" },
    { title: "Languages", content: "Tab 4" },
  ];

  let set_title = "About Me";
  const description =
    "\
  Hello! I'm Wino Rama Putra. I am an adaptable person and have an\
  interest in technological advances. Primarily interested in programming,\
  I'm working with <span class='font-bold'>Python, PHP, HTML+CSS, SQL, and a little bit JavaScript</span>.\
  Also I'm familiar with the frameworks like <span class='font-bold'>Laravel, CodeIgniter, Flask, and Svelte</span>.\
  I also know about <span class='font-bold'>Machine Learning with Python</span>.\
  Oh, I almost forgot! I also know bit about <span class='font-bold'>Linux</span> too!";
</script>

<!-- About -->
<Transition
  transitions="transition transform"
  inTransition="ease-out duration-1000"
  inState="opacity-0 -translate-y-16"
  onState="opacity-100 translate-x-0"
>
  <Saos animation={"load 2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
    <div
      class="container mx-auto min-h-screen justify-center items-center pt-24 sm:pt-32"
      id="About"
    >
      <Typewriter interval={100}>
        <h1 class="text-4xl text-gray-800 font-bold text-center">
          {set_title}
        </h1>
      </Typewriter>
      <div class="grid flex grid-cols-5 gap-3 text-center py-6">
        <div class="col-start-2 col-span-3">
          <Typewriter scramble={900}>
            <!-- Intro -->
            <p>
              {@html description}
            </p>
          </Typewriter>
        </div>
        <div class="col-start-2 col-span-3">
          <TabControl let:isTitle let:isContent>
            <Tab id="0" {isTitle} {isContent}>
              <span slot="title"> Experience </span>
              <!-- Experience -->
              <div
                class="card relative bg-class-content hover:scale-110 transition duration-300 ease-in-out"
              >
                <div class="card w-full">
                  <div class="card-body">
                    <table class="table-compact w-full">
                      <thead>
                        <tr>
                          <th>
                            WEB DEVELOPER PROTOTYPE STETOSKOP DIGITAL, PPM
                            TELKOM UNIVERSITY
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span
                              class="lg:badge lg:badge-ghost badge-sm badge-ghost"
                            >
                              MAY 2021 – JANUARY 2022 (CONTRACT)</span
                            >
                            <br />
                            <Typewriter scramble={900}>
                              <p>
                                Develop a website to detect heart valve
                                abnormalities using a <span class="font-bold"
                                  >Laravel-based</span
                                >
                                web framework and to model the detection of heart
                                valve abnormalities using
                                <span class="font-bold">Machine Learning</span>
                                with <span class="font-bold">Python</span>
                                algorithms. The result of this research is a website
                                prototype based on localhost.
                              </p>
                            </Typewriter>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="table-compact w-full">
                      <thead>
                        <tr>
                          <th>
                            WEB CONTENT ADMINISTRATOR, TELKOM UNIVERSITY
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <td>
                          <span
                            class="lg:badge lg:badge-ghost badge-sm badge-ghost"
                          >
                            MAY 2020 – AUGUST 2020 (INTERNSHIP)
                          </span>
                          <br />
                          <Typewriter scramble={900}>
                            <p>
                              Inputting content according to the features
                              available on a
                              <span class="font-bold">WordPress-based </span> website.
                            </p>
                          </Typewriter>
                        </td>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab id="1" {isTitle} {isContent}>
              <span slot="title"> Education </span>
              <!-- Education -->
              <div
                class="card relative bg-class-content hover:scale-110 transition duration-300 ease-in-out"
              >
                <div class="card w-full">
                  <div class="card-body">
                    <p>
                      <Icon data={graduationCap} scale={1.5} /> &nbsp; Bachelor of
                      Informatics : Telkom University (2017-2022)
                    </p>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab id="2" {isTitle} {isContent}>
              <span slot="title"> Publication </span>
              <!-- Publication -->
              <div
                class="card relative bg-class-content hover:scale-110 transition duration-300 ease-in-out"
              >
                <div class="card w-full">
                  <div class="card-body">
                    <p>
                      <a
                        class="link link-hover"
                        href="https://ieeexplore.ieee.org/document/9689119"
                        ><Icon data={book} scale={1.5} /> &nbsp; Study of Feature
                        Extraction Methods to Detect Valvular Heart Disease (VHD)
                        Using a Phonocardiogram</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab id="3" {isTitle} {isContent}>
              <span slot="title"> Languages </span>
              <!-- Languages -->
              <div
                class="card relative bg-class-content hover:scale-110 transition duration-300 ease-in-out"
              >
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
              </div>
            </Tab>
          </TabControl>
        </div>
      </div>
    </div>
  </Saos>
</Transition>
