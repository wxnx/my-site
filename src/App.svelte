<script lang="ts">
	import Content from './routes/Content.svelte';
	import Modal from './routes/Modal.svelte';
	import { modal } from './routes/store.js';	

	import Copyright from 'svelte-copyright';
</script>

<main>
	<div class="content">
		<Modal show={$modal}>
			<Content />
		</Modal>
	</div>

	<!-- <footer>
		<Copyright>
		  Wino Rama Putra
		</Copyright>
	  </footer> -->
</main>

<style>
	main {
		height: 100%;
		display: grid;
	}

	.content{
		margin: auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<svelte:head>
  <!-- Fonts -->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
  />

  <!-- Material Typography -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/@material/typography@13.0.0/dist/mdc.typography.css"
  />

  <!-- SMUI -->
  <link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css" />
</svelte:head>

