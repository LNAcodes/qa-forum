# Q&A Forum

A platform where education professionals — teachers, social workers, and school support staff — can ask questions, share experiences, and help each other navigate structural problems in the school system.

---

## Features

### Basic

- Question feed with title, author, and timestamp
- Question detail page with all submitted answers
- Ask a question (title + body)
- Post an answer
- Search questions by keyword
- Update questions and answers

### Additional (coming soon)

- Authentication (sign up, log in, log out)
- Upvote / downvote system with score-based sorting
- Accept an answer as the accepted solution
- Tags system with feed filtering
- Markdown support for questions and answers
- User profiles with reputation score
- Live view count and real-time answer notifications

---

## Tech Stack

- [Hono](https://hono.dev/) — Server, REST API
- [Nunjucks](https://mozilla.github.io/nunjucks/) — Template Engine (later: JSX)
- [TypeScript](https://www.typescriptlang.org/)
- [SQLite](https://www.sqlite.org/) — Database

---

## Getting Started

\```bash
git clone https://github.com/LNAcodes/qa-forum.git
cd qa-forum
bun install
bun run dev
\```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Status

🚧 Work in progress — built as a side project during the Neue Fische / Spiced Academy full-stack web development bootcamp.
