
### Frontend README (Next.js)

# Frontend - Next.js Application

## Project Overview

This frontend application is built using Next.js. It interacts with the backend NestJS service to display the latest 30 posts from Hacker News.

## Project Structure

- `pages/` - Contains Next.js pages.
  - `index.js` - The homepage that displays the latest posts.
- `components/` - Reusable components.
  - `Header.js` - Header component.
  - `Post.js` - Component to display individual posts.
- `public/` - Static files like images and favicon.
- `styles/` - Global styles and CSS modules.

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Running the Application**:
    ```bash
    npm run dev
    ```