# React Code Challenge: Bot Battlr

Welcome to **Bot Battlr**, the one and only spot in the known universe where you can custom build your own Bot Army! This is our app:

Here's the scenario: a galactic overlord has hired you, a galactic web developer, to develop a galactic web app that will allow them to browse through a list of robots, view a robot's details, and, enlist a bot into their army.

# Author
This project was created by Mark Nyanjui. (https://github.com/MarkNyanjui)
 
## Instructions

For this project, you’ll build a React application that displays a list of available bots, among other features. 

# Installation Requirements
Git

# Installation Instructions
1. Clone the repository using the following command:
git clone https://github.com/MarkNyanjui/Phase2Week2CodeChallenge.git

## Setup

After cloning down the project:

1. Run `npm install` in your terminal
2. Run `json-server --watch db.json` for the backend
3. Run `npm run dev` to get the browser link to view the application

## Endpoints

The base URL for your backend is: `http://localhost:3000`

These are the endpoints you might need:

- GET: `/bots`
- POST: `/bots`
- DELETE: `/bots/:id`

## Core Deliverables

As a user, I should be able to:

- See profiles of all bots rendered in `BotCollection`.
- Add an individual bot to my army by clicking on it. The selected bot should render in the `YourBotArmy` component. The bot can be enlisted only **once**. The bot **does not** disappear from the `BotCollection`.
- Release a bot from my army by clicking on it. The bot disappears from the `YourBotArmy` component.
- Discharge a bot from their service forever, by clicking the red button marked "x", which would delete the bot both from the backend and from the `YourBotArmy` on the frontend.

# Technologies Used
1. React
2. Javascript(JSX)
3. CSS
4. HTML
5. JSON Server

# License
The content of this site is licensed under the MIT license Copyright (c) 2024.















