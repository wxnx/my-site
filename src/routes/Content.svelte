<script>
    import { getContext } from 'svelte';
    import Button from '@smui/button';

    import Profile from './Profile.svelte';
    import Github from './Github.svelte';
    import Contact from './Contact.svelte';

    const { open } = getContext('simple-modal');
	
	let opening = false;
	let opened = false;
	let closing = false;
	let closed = false;

    const showProfile = () => {
		open(Profile);
	};

    const showGithub = () => {
		open(Github);
	};

    const showContact = () => {
		open(Contact);
	};

</script>

<section>
	<Button on:click={showProfile}>Profile</Button>
    <br>
    <Button on:click={showGithub}>Github</Button>
    <br>
    <Button on:click={showContact}>Contact</Button>

	<div id="state">
		{#if opening}
			<p>opening modal...</p>
		{:else if opened}
			<p>opened modal!</p>
		{:else if closing}
			<p>closing modal...</p>
		{:else if closed}
			<p>closed modal!</p>
		{/if}
	</div>
</section>