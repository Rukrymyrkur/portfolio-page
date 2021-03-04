# Personal Portfolio Page

A one-page website created with React, experimenting with react-spring library and using styled-components for style.

## Table of contents

- [Personal Portfolio Page](#personal-portfolio-page)
  - [Table of contents](#table-of-contents)
  - [Notable features:](#notable-features)
  - [Main stack](#main-stack)
  - [Structure](#structure)
  - [Setup](#setup)
  - [Live](#live)

## Notable features:

- react-spring animations
- Parallax animations
- Switch between light and dark mode
- react-router

## Main stack

- react-router-dom 5.2.0
- react 17.0.1
- styled-components 5.2.1

## Structure

```
├───public/
├───src/
│   ├───components/
│   │   ├───About/
│   │   ├───Contact/
│   │   ├───Footer/
│   │   ├───Home/
│   │   ├───Loading/
│   │   ├───ModeButton/
│   │   ├───Navbar/
│   │   ├───Skills/
│   │   ├───TrailsAnimation/
│   │   └───Work/
│   │       ├───WorkTrailAnimation/
│   │       ├───Work.elements.js
│   │       └───Work.js
│   ├───images/
│   ├───App.js
│   ├───globalStyles.js
│   ├───index.js
│   └───useDarkMode.js
├───package.json
└───README.md
```

## Setup

to run,

```
npm install
```
```
npm start
```

## Live

[Live](https://neringa.netlify.app/)
