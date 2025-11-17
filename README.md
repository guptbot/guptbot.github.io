# Personal Portfolio Website

Visit the live site at: **[guptbot.github.io](https://guptbot.github.io)**

## Technical Stack

Built with [Jekyll](https://jekyllrb.com/) using a heavily customized version of the [Academic Pages](https://github.com/academicpages/academicpages.github.io) template.

## Running Locally

### Prerequisites
- Ruby (with development headers)
- Bundler
- Node.js

### Setup

**macOS:**
```bash
brew install ruby node
gem install bundler
bundle install
```

**Linux/WSL:**
```bash
sudo apt install ruby-dev ruby-bundler nodejs
bundle install
```

If you encounter permission errors, install gems locally:
```bash
bundle config set --local path 'vendor/bundle'
bundle install
```

### Run the development server
```bash
bundle exec jekyll serve -l -H localhost
```

The site will be available at `http://localhost:4000`. Changes to Markdown and HTML files will auto-reload. Configuration changes require restarting the server.

## Using Docker

Alternatively, use Docker to avoid installing dependencies:

```bash
chmod -R 777 .
docker compose up
```

Access the site at `http://localhost:4000`.

### VS Code DevContainer

If using VS Code, open the repository and select **F1 → DevContainer: Reopen in Container**. The site will automatically be hosted at `http://localhost:4000` with live reloading.

## Project Structure

```
├── _pages/          # Main content pages (about, research, projects, etc.)
├── _layouts/        # Page templates
├── _includes/       # Reusable components (navigation, profile, etc.)
├── _sass/           # Styling
├── assets/          # JavaScript and static assets
├── images/          # Images and media
├── files/           # PDFs and downloadable files
└── _config.yml      # Site configuration
```

## Acknowledgments

Uses pieces of the Academic Pages template, maintained by [Robert Zupko](https://github.com/rjzupkoii) and originally forked by [Stuart Geiger](https://github.com/staeiou).
