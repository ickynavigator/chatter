<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>

## About The Project

This is a simple chat app powered by realtime database connections from firestore. I do plan to add video but that is for later. This is just to practice working with realtime data.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [![Next][next.js]][next-url]
- [![React][react.js]][react-url]

## Getting Started

### Prerequisites

You need to do these before installation

- Install Yarn
- Setup a firebase account

### Installation

- Clone this repository
  ```sh
  git clone https://github.com/ickynavigator/shatter.git
  ```
- Fill in the .env file with the items located in the `.env.example` file
- Then run
  ```sh
  yarn install
  ```
- Start the app with
  ```sh
  yarn dev
  ```
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Roadmap

- [ ] Add Realtime text
- [ ] Add Video chat

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
