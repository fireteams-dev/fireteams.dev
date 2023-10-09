<script lang="ts">
  	const socialLinks = [
		{ title: 'GitHub', href: 'https://github.com/fireteams-dev', icon: 'fa-github', name: 'fireteams.dev' },
    // TODO: change these to fireteams.dev contacts
    { title: 'X (Twitter)', href: 'https://x.com/tompahoward', icon: 'fa-x-twitter', name: "@tompahoward" },
		{ title: 'LinkedIn', href: 'https://www.linkedin.com/in/tomhoward', icon: 'fa-linkedin', name: '/tomhoward' },
    // TODO: create youtube channel
		// { title: 'YouTube', href: 'https://www.youtube.com/@skeletonlabs', icon: 'fa-youtube' }
	];
</script>

<div class="container p-10 space-y-4">
  <h1>Contact</h1>
  <hr />
  <ul class="space-y-4">
    {#each socialLinks as sl}
      <li>
      <a class="opacity-75 hover:opacity-100" href={sl.href} target="_blank" rel="noreferrer" title={sl.title}>
        <i class="fa-brands text-xl {sl.icon} p-2" /> {sl.name}
      </a>
    </li>
    {/each}
</div>

<style lang="postcss">
</style>
