<script lang="ts">
	const skills = ['TypeScript', 'PostgreSQL', 'Flutter'];
</script>

<div class="mx-auto grid max-w-3xl items-start gap-12 px-6 py-24 md:grid-cols-[280px,1fr]">
	<!-- Sidebar -->
	<aside class="flex gap-6">
		<img
			src="/headshot.jpg"
			alt="Nikolas Padilla"
			class="h-24 w-24 shrink-0 rounded-full object-cover"
		/>
		<div>
			<h1 class="mb-1 text-2xl font-bold tracking-tight">Nikolas Padilla</h1>
			<p class="mb-4 text-text-secondary">Software Engineer</p>

			<div class="mb-4 flex flex-wrap gap-2">
				{#each skills as skill}
					<span class="rounded border border-border px-2 py-0.5 text-xs text-text-secondary"
						>{skill}</span
					>
				{/each}
			</div>

			<div class="flex flex-wrap gap-2">
				<a
					href="/projects"
					class="rounded border border-accent px-3 py-1.5 text-xs font-medium text-accent hover:bg-accent/10 hover:no-underline"
				>
					View Projects
				</a>
				<a
					href="/resume.pdf"
					target="_blank"
					class="rounded border border-accent px-3 py-1.5 text-xs font-medium text-accent hover:bg-accent/10 hover:no-underline"
				>
					Download Resume
				</a>
			</div>
		</div>
	</aside>

	<!-- Main content -->
	<div>
		<p class="mb-6 leading-relaxed text-text-primary">
			Currently leading software development at AnyBackFlow.com, a backflow services company in
			Arizona. Building the ReportFlow platform — a unified system connecting field technicians and
			office operations. Rewriting the existing mobile app into a full platform with shared database
			architecture.
		</p>
		<p>
			<a href="/projects/sample-project" class="text-accent hover:underline">
				Curious? Read more...
			</a>
		</p>
	</div>
</div>
