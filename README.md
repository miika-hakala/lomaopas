# Lomaopas.fi

Suomenkielinen matkaopas suosittuihin lomakohteisiin.

## Documentation

- [Workflow](docs/workflow.md) – PR-käytännöt ja gate-säännöt
- [QA workflow](docs/qa-workflow.md) – Definition of Done ja testaus
- [Roadmap](docs/roadmap.md) – Projektin vaiheet ja status

---

*Powered by SvelteKit.*

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv create --template minimal --types ts --no-install .
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Roadmap & Tracks (SSOT)

This repository uses a single roadmap: docs/roadmap.md.
LomaSihteeri is a separate mobile app (Android/iOS) planned for post-launch.
It is not part of the Lomaopas.fi website.
