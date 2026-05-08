# DoorWatch Frontend

DoorWatch Frontend is a Vue 3 dashboard built with Vite. The app connects to Firebase for Firestore and Storage data.

## Prerequisites

- Node.js `20.19.0` or newer, or Node.js `22.12.0` or newer
- npm
- Firebase project credentials

## Project Location

The frontend application lives in the `dashboard` directory. Run all npm commands from that folder:

```sh
cd dashboard
```

## Installation

Install the project dependencies:

```sh
npm install
```

## Environment Setup

Download the supplied `.env` file and place it inside the `dashboard` directory:

```text
DoorWatch-Frontend/
  dashboard/
    .env
```

## Run the Project

Start the local development server:

```sh
npm run dev
```

Vite will print the local URL in the terminal, usually:

```text
http://localhost:5173/
```

Open that URL in your browser to view the dashboard.

## Build for Production

Create a production build:

```sh
npm run build
```

The built files are generated in `dashboard/dist`.

## Preview the Production Build

After building, preview the production output locally:

```sh
npm run preview
```
