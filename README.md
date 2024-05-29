
## What is this TailwindCSS?

Tailwind CSS is a helper class-based CSS framework that allows you to quickly create modern websites without leaving JSX. This framework allows you to build any design directly within the markup structure with a set of classes including classes such as flex, pt-4, text-center and rotate-90. It is customisable, adaptable to any design and has a very small build size


## What is this SASS and SCSS?


Sass and SCSS are both CSS preprocessor languages that make CSS more powerful and manageable. Here are the differences between them:

#### Sass (Syntactically Awesome Style Sheets):

    - It has more flexible syntax.
    - Works with white spaces and semicolons.
    - The code is easier to read.
    - It uses indentation to edit the syntax.
    - The file extension is .sass.
    - Incompatible with CSS.
    - CSS supports variables, but not as well as preprocessor variables.




#### SCSS (Sassy Cascaded Style Sheets):
    - Uses traditional CSS syntax.
    - It is more compatible with CSS.
    - The file extension is .scss.
    - All valid CSS is valid SCSS (with some minor exceptions)
    - You can use CSS variables and preprocessor variables.


SCSS is more widely used because it is more compatible with existing CSS, while the more flexible syntax of Sass may be more attractive to some developers




## Installation

If you have created a NextJS project, nextjs will automatically ask you whether to download tailwindcss, but for Vite projects it needs to be downloaded manually


1.Step:

```bash
  pnpm add -D tailwindcss postcss autoprefixer
```

```bash
  yarn add -D tailwindcss postcss autoprefixer
```

```bash
  npm add -D tailwindcss postcss autoprefixer
```

```bash
  pnpm add sass
```


After installation you need run:

```bash
  npx tailwindcss init -p
```

2.Step: Add this code on tailwind.config.js || tailwind.config.ts file


```bash
    /** @type {import('tailwindcss').Config} */

    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
```


3.Step: Add tailwind Atrebutties on global css or scss file


/ src / style / index.scss

```bash
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

if you using default CSS file `VsCode` gives rule error on this code, you can fix that here:


![Ekran Resmi 2024-05-28 14 19 41](https://github.com/thekinv21/tailwind-css-scss/assets/92122363/aa976eb6-866b-46ad-8da9-e4779e3c8b95)



[TailwindCSS Rule Error Fix](https://stackoverflow.com/questions/47607602/how-to-add-a-tailwind-css-rule-to-css-checker)


4.Step: Start project


```bash
  pnpm run dev
```

```bash
  yarn run dev
```

```bash
  npm run dev
```



5.Step: Create Your First TailwindCSS styles


```bash

  export default function App() {
    return (
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    )
  }
  
```

If you want to see suggestions in code

`Install Vscode Extensition: Tailwind CSS IntelliSense `



`Custom colors, fontSize and another properties style for TailwindCSS`

![tailiwind colors](https://github.com/thekinv21/tailwind-css-scss/assets/92122363/78a17ec8-d975-4cf0-8689-1580e804a748)



`Custom utilities style for TailwindCSS`

![utilities](https://github.com/thekinv21/tailwind-css-scss/assets/92122363/f829108f-f612-4873-b3ae-6ab5bb06f031)



`Custom components style for TailwindCSS`

![add componnets](https://github.com/thekinv21/tailwind-css-scss/assets/92122363/f1927cf2-bfef-43d8-aeee-aaaeb0e5c40a)


`Custom screens size TailwindCSS`

![code](https://github.com/thekinv21/tailwind-css-scss/assets/92122363/53d3bbd0-3d46-4dd9-838a-9978e6f9ba90)






`Practical Login Page with TailwindCSS`

![Ekran Resmi 2024-05-29 20 12 06](https://github.com/thekinv21/tailwind-css-scss/assets/92122363/0958d6de-6acd-4141-9196-46a1a57c0da2)

