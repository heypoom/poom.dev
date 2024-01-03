# Poom.dev: Poom's Website and Digital Garden

Welcome!

This is Poom.dev, my personal site and digital garden.

## How does it work?

- The content in my digital garden lives in a private Obsidian vault.
- The sync scripts synchronizes the markdown files in my Obsidian vault to the PostgreSQL database.
  - The sync script can scan local filesystem directory, and content in GitHub repositories by traversing the tarball content.
  - The sync script can be run locally on my Obsidian vault to publish my notes at any time. In addition, the `heypoom/notes` private git repository has a GitHub Actions CI that runs the sync script on each commit to `main`.
  - The `snapshots` table stores the state of my digital garden. It stores the mapping of the file path to the file size and file timestamp. This allows us to quickly diff the filesystem or git repository with the database to determine which files have changed.
  - The `notes` table contains each of my markdown notes. We use the result of the snapshot diffs to insert, update or delete notes in PostgreSQL.
- The frontend is built with [Astro](https://astro.build). This allows the site to be very fast, and we load JavaScript incrementally via [Astro Islands](https://docs.astro.build/en/concepts/islands).

## Principles

- My website is a **filtered subset** of my digital garden.
  - I don't want to separate my website content with my digital garden. The source of truth should be markdown files my digital garden for ease of editing and publishing.
  - Most of the content in my digital garden is private. Therefore, I only publish markdown notes where the frontmatter contains `public: true`.
