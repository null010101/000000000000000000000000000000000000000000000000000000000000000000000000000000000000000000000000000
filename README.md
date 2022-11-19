# A simple counter

Hello, welcome to this overstack tech project, here you'll learn how to start a "big" project with Sveltekit, Tailwind, Prisma and Railway.

*Creating a "fullstack" project was never so easy.*

## Create the Sveltekit project

Open your terminal and go to the path of your choice and run the following commands:

> Note: You can use another package manager like npm or yarn

```bash
pnpm create svelte@latest <your project name>

# After selecting your project configuration
cd <your project name>

pnpm install
```

## Add Tailwind to the project

In the terminal, and run the following commands:

```bash
pnpm install -D tailwindcss postcss autoprefixer svelte-preprocess

pnpx tailwindcss init tailwind.config.cjs -p
```

In `svelte.config.js`, put `true` to the `postcss` property in the `preprocess` function:

```javascript
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({ // here
    postcss: true 
  }),

  kit: {
    adapter: adapter()
  }
};

export default config;
```

In `tailwind.config.cjs`, add the templates paths in the `content` property and the character of your choice in the `separator` property:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  separator: '_', // here
  // and below
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Create a `./src/app.css` file and add the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* more code below */ 
```

Create a `./src/routes/+layout.svelte` file and import the the newly-created `app.css` file:

```html
<script>
  import "../app.css"
</script>

<slot />
```

And run the following command in your terminal:

```bash
pnpm run dev
```

## Initialize the database

> Recomendation: Log in with your Github account

Go to [Railway](https://railway.app/) and start a new project, the database.

![Railway page screenshot](/static/railway-screenshot.PNG "Railway home page")

Choose the database provision you want.

![Railway templates screenshot](/static/railway-templates-screenshot.PNG "Railway templates")

Create your tables, and finally, go to the "connect" section and copy the connection URL.

![Railway connect section](/static/railway-database-connect-section.PNG)

## Start with prisma

Go to this [Prisma documentation](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project) and choose the option according to the database you created before.

Follow the guide, and, if you didn't mess with anything, you're ready to start with your project.
