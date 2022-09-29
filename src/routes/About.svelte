<script>
  import "../app.css";
  import TabControl from "../lib/TabControl.svelte";
  import Tab from "../lib/Tab.svelte";
  import Transition from "svelte-class-transition";
  import Icon from "svelte-awesome";
  import { graduationCap, book, language } from "svelte-awesome/icons";
  const data = [
    { title: "Experience", content: "Tab 1" },
    { title: "Education", content: "Tab 2" },
    { title: "Publication", content: "Tab 3" },
    { title: "Languages", content: "Tab 4" },
  ];
</script>

<Transition
  transitions="transition transform"
  inTransition="ease-out duration-1000"
  inState="opacity-0 -translate-y-16"
  onState="opacity-100 translate-x-0"
>
  <div class="container mx-auto justify-center items-center">
    <div class="grid flex grid-cols-5 gap-3 text-center pt-36">
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
                <!-- head -->
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
                    Inputting content according to the features available on a WordPress-based
                    website.
                  </td>
                </tbody>
              </table>
            </div>
            <div class="w-full">
              <table class="table-compact w-full">
                <!-- head -->
                <thead>
                  <tr>
                    <th>
                      WEB DEVELOPER PROTOTYPE STETOSKOP DIGITAL, PPM TELKOM
                      UNIVERSITY
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <!-- row 1 -->

                  <td>
                    <span class="badge badge-ghost badge-sm"
                      >MAY 2021 – JANUARY 2022 (CONTRACT)</span
                    >
                    <br />
                    Develop a website to detect heart valve abnormalities using a
                    Laravel-based web framework and to model the detection of heart
                    valve abnormalities using Machine Learning with Python algorithms.
                    The result of this research is a website prototype based on localhost.
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
                  <Icon data={graduationCap} scale={1.5} /> &nbsp; Bachelor of Informatics
                  : Telkom University (2017-2022)
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
                  <Icon data={language} scale={1.5} /> &nbsp; English : Limited working
                  proficiency
                </p>
              </div>
            </div>
          </Tab>
        </TabControl>
      </div>
    </div>
  </div>
</Transition>
