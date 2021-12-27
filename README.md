# Navidrome Embed
An attempt at a simple site for a navidrome share. 

Check out the **[example version](https://navidrome-embed.netlify.app/)**

Required url parameters:
- `u` - subsonic user
- `t` - subsonic token
- `s` - subsonic salt
- `playlist_id` navidrome playlist id

[![Netlify Status](https://api.netlify.com/api/v1/badges/5a7fa4fc-d6fa-465e-b731-3fbbe21dffa0/deploy-status)](https://app.netlify.com/sites/navidrome-embed/deploys)


![image](https://user-images.githubusercontent.com/1159009/147438049-05aa5ccc-76d8-41e1-8d2f-3d916f4a3ff5.png)


#Development

## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```
### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)
