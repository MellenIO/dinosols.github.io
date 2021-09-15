# Dinosols

## Getting started
```
git clone ... dinosols
cd dinosols
npm install
npm run dev
```

This will start up a local server at http://localhost:5000 for you to view. This Svelte site uses live reload for local development so changes take effect immediately.

## Deploying
Pushes to the `master` branch will always initiate a deployment to the Netlify site.

## Building
If you'd like to build a standalone version of the site, run `npm run build`. This will generate everything necessary in the `public/` directory.

## Adding new pages
Adding new pages can be done by copying `public/index.html` and just renaming it as appropriate. You may want to create a new Page component for this too.
