<script>
  import "../app.css";
  import Transition from "svelte-class-transition";
  import Typewriter from "svelte-typewriter";
  import Saos from "saos";
  import Icon from "svelte-awesome";
  import {
    envelopeO,
    linkedinSquare,
    instagram,
    githubSquare,
  } from "svelte-awesome/icons";
  let set_title = "My Contact";
  let contact = [
    [envelopeO, "mailto:wino99oniw@gmail.com", "send me an email"],
    [
      linkedinSquare,
      "https://www.linkedin.com/in/winoramaputra",
      "my linkedIn",
    ],
    [instagram, "https://www.instagram.com/winoramaputra", "my instagram"],
    [githubSquare, "https://www.github.com/wxnx", "my github"],
  ];
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

      <div class="flex justify-center items-center py-36">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4"
        >
          {#each contact as item}
            <div>
              <a class="btn btn" style="width:250px" href={item[1]}>
                <Icon data={item[0]} />
                <br />
                <Typewriter scramble={1000}>
                  <span class="h6 text-capitalize">{item[2]}</span>
                </Typewriter>
              </a>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </Saos>
</Transition>
