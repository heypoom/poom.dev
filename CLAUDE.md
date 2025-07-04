# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Poom.dev, a personal website and digital garden built with Astro. The site syncs content from a private Obsidian vault to a MongoDB Atlas database and publishes only notes marked with `public: true` in frontmatter.

## Architecture

- **Frontend**: Astro with hybrid rendering, deployed on Vercel
- **Database**: MongoDB Atlas for storing notes and snapshots
- **Content Source**: Private Obsidian vault synced via GitHub repository
- **Sync Process**: Command scripts that parse tarballs or scan local filesystem to sync markdown files to database
- **Key Components**:
  - `src/prepare/` - Core sync logic, snapshot diffing, and database operations
  - `cmd/` - Command line scripts for various sync operations
  - `src/pages/[note].astro` - Dynamic note pages
  - `src/content/` - Static content collections (events, talks)

## Development Commands

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run tests
pnpm test

# Sync from GitHub repository
pnpm sync:repo

# Sync from local filesystem
pnpm sync:local

# Silent local sync (no output)
pnpm sync:local:silent

# Run local sync daemon
pnpm sync:local:daemon

# Work with tarballs
pnpm sync:tarball
pnpm save:tarball
```

## Sync System

The sync system maintains snapshots of file states and performs diff-based updates:

1. **Snapshot Creation**: Creates fingerprints of files (path, size, timestamp)
2. **Diff Calculation**: Compares current state with last known snapshot
3. **Database Sync**: Inserts/updates/deletes notes based on diffs
4. **Collections**:
   - `notes` - Processed markdown content with metadata
   - `snapshots` - File state snapshots for diffing

## Key Files

- `src/prepare/sync.ts` - Main sync logic and database operations
- `src/prepare/snapshot.ts` - Snapshot creation and diffing
- `src/prepare/tarball.ts` - GitHub tarball parsing
- `cmd/sync-repo.ts` - GitHub repository sync command
- `astro.config.mjs` - Astro configuration with Vercel adapter

## Content Processing

Notes are processed to extract:

- Frontmatter metadata (title, public status, tags)
- Wiki-style links and references
- Image handling and uploads to R2 storage
- Reference verification between notes

## Testing

Uses Vitest for testing. Key test files include:

- `src/prepare/images.test.ts`
- `src/prepare/links.test.ts`
- `src/prepare/tags.test.ts`
