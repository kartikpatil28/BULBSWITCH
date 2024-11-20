







Step1: Create the Vite project

```
npm create vite@latest 
```

Step2: Install Tailwind CSS



```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```


Step3: Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.


```
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

Step4: Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step5: Start your build process
Run your build process with npm run dev.


```
npm run dev
```