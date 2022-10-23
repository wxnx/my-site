<script>
  import "../app.css";
  import { tabsKey } from "./TabControl.svelte";
  import { getContext, onMount } from "svelte";

  export let id;
  export let isTitle;
  export let isContent;

  const { selectedTab, tabs } = getContext(tabsKey);
  $tabs = $tabs.some((t) => t == id) ? $tabs : [...$tabs, id];

  $: isSelected = id == $selectedTab;
</script>

{#if isTitle}
  <button
    type="button"
    class="btn hover:btn-ghost hover:text-base-content m-2"
    class:selected={isSelected}
    on:click={() => ($selectedTab = id)}
  >
    <slot name="title" />
  </button>
{/if}

{#if isContent && isSelected}
  <slot />
{/if}

<style>
  .selected {
    background: #d8d8f6;
    color: black;
    cursor: default;
  }
</style>
