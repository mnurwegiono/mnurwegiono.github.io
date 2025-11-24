```markdown
# 🌐 Academic Personal Website Template

A clean and modern GitHub Pages template for academic personal websites, based on the Minimal Mistakes theme.

Showcase your research, publications, and projects with ease.

![License](https://img.shields.io/github/license/mnurwegiono/mnurwegiono.github.io)
![GitHub stars](https://img.shields.io/github/stars/mnurwegiono/mnurwegiono.github.io?style=social)
![GitHub forks](https://img.shields.io/github/forks/mnurwegiono/mnurwegiono.github.io?style=social)
![GitHub issues](https://img.shields.io/github/issues/mnurwegiono/mnurwegiono.github.io)
![GitHub pull requests](https://img.shields.io/github/issues-pr/mnurwegiono/mnurwegiono.github.io)
![GitHub last commit](https://img.shields.io/github/last-commit/mnurwegiono/mnurwegiono.github.io)

<img src="https://img.shields.io/badge/language-JavaScript-yellow.svg" alt="JavaScript">
<img src="https://img.shields.io/badge/platform-GitHub%20Pages-blue.svg" alt="GitHub Pages">
<img src="https://img.shields.io/badge/license-MIT-green.svg" alt="MIT License">

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Demo](#demo)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Testing](#testing)
- [Deployment](#deployment)
- [FAQ](#faq)
- [License](#license)
- [Support](#support)
- [Acknowledgments](#acknowledgments)

## About

This project provides a ready-to-use GitHub Pages template tailored for academics and researchers. It's designed to be clean, responsive, and easy to customize, allowing you to quickly set up a professional online presence.  It is based on the popular Minimal Mistakes Jekyll theme, offering a familiar and well-documented foundation.

The template solves the problem of creating a polished academic website from scratch. It provides a pre-configured structure for showcasing publications, projects, CV, and other relevant information. The target audience includes professors, researchers, graduate students, and anyone in academia who wants to establish a professional online presence.

Key technologies include JavaScript for interactive elements, HTML/CSS for styling, and GitHub Pages for hosting. The architecture leverages the Minimal Mistakes theme, providing a robust and customizable framework. The unique selling point is its focus on academic content and its ease of deployment on GitHub Pages.

## ✨ Features

- 🎯 **Academic Focus**: Pre-built sections for publications, projects, CV, and contact information.
- ⚡ **Performance**: Optimized for fast loading times and smooth browsing experience.
- 🎨 **UI/UX**: Clean and modern design based on the Minimal Mistakes theme.
- 📱 **Responsive**: Fully responsive layout that adapts to different screen sizes.
- 🛠️ **Extensible**: Easy to customize and extend with your own content and styling.
- 🌐 **GitHub Pages Ready**: Designed for seamless deployment on GitHub Pages.

## 🎬 Demo

🔗 **Live Demo**: [https://mnurwegiono.github.io/](https://mnurwegiono.github.io/)

### Screenshots
![Homepage](screenshots/homepage.png)
*Homepage showcasing key information and navigation.*

![Publications Page](screenshots/publications.png)
*Publications page displaying a list of academic publications.*

## 🚀 Quick Start

Clone and run in 3 steps:
```bash
git clone https://github.com/mnurwegiono/mnurwegiono.github.io.git
cd mnurwegiono.github.io
bundle install # If you don't have bundler: gem install bundler
bundle exec jekyll serve
```

Open [http://localhost:4000](http://localhost:4000) to view it in your browser.

## 📦 Installation

### Prerequisites
- Ruby (with Jekyll)
- Git
- Bundler

### Option 1: From Source

```bash
# Clone repository
git clone https://github.com/mnurwegiono/mnurwegiono.github.io.git
cd mnurwegiono.github.io

# Install dependencies
bundle install

# Start development server
bundle exec jekyll serve
```

## 💻 Usage

### Basic Usage

1.  **Edit `_config.yml`**:  Customize your personal information, social media links, and website settings.
2.  **Add Content**:  Create Markdown files in the `_posts`, `_pages`, and `_projects` directories to add your publications, projects, and other content.
3.  **Customize Styles**:  Modify the CSS files in the `assets/css` directory to change the look and feel of your website.

### Example: Adding a New Publication

1.  Create a new Markdown file in the `_posts` directory, e.g., `_posts/2024-10-27-my-new-publication.md`.

2.  Add the following content to the file:

```markdown
---
title: "My New Publication"
date: 2024-10-27
venue: "Journal of Awesome Research"
citation: "Doe, J. (2024). My New Publication. Journal of Awesome Research, 1(1), 1-10."
---

This is a brief description of my new publication.
```

## ⚙️ Configuration

### `_config.yml`

This file contains the main configuration settings for your website.  Here are some key options:

```yaml
title: Your Name
email: your.email@example.com
description: >- # this means to ignore newlines until "baseurl:"
  A brief description of your research interests and expertise.
baseurl: "" # the subpath of your site, e.g. /blog
url: "https://your-username.github.io" # the base hostname & protocol for your site, e.g. http://example.com
twitter_username: your_twitter_handle
github_username:  your-github-username

# Build settings
theme: minimal-mistakes
plugins:
  - jekyll-feed
```

### Front Matter

Each Markdown file (e.g., posts, pages, projects) uses front matter to define metadata.  Here's an example:

```yaml
---
title: "Project Title"
date: 2024-10-27
categories: [project]
tags: [research, development]
---
```

## 📁 Project Structure

```
mnurwegiono.github.io/
├── _data/                # Data files (e.g., navigation menus)
├── _includes/            # Reusable HTML snippets
├── _layouts/             # Page layouts
├── _posts/               # Blog posts
├── _pages/               # Static pages (e.g., about, contact)
├── _projects/            # Project pages
├── assets/                # Assets (CSS, images, fonts)
├── _config.yml           # Configuration file
├── Gemfile                # Ruby dependencies
├── README.md              # Project documentation
└── LICENSE                # License file
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) (Placeholder - create this file) for details.

### Quick Contribution Steps
1. 🍴 Fork the repository
2. 🌟 Create your feature branch (git checkout -b feature/AmazingFeature)
3. ✅ Commit your changes (git commit -m 'Add some AmazingFeature')
4. 📤 Push to the branch (git push origin feature/AmazingFeature)
5. 🔃 Open a Pull Request

### Development Setup
```bash
# Fork and clone the repo
git clone https://github.com/yourusername/mnurwegiono.github.io.git

# Install dependencies
bundle install

# Create a new branch
git checkout -b feature/your-feature-name

# Make your changes and test
bundle exec jekyll serve

# Commit and push
git commit -m "Description of changes"
git push origin feature/your-feature-name
```

### Code Style
- Follow existing code conventions
- Run `bundle exec jekyll serve` to preview changes
- Add tests for new features (if applicable)
- Update documentation as needed

## Testing

To test your changes locally, run:

```bash
bundle exec jekyll serve
```

This will start a local development server at [http://localhost:4000](http://localhost:4000).

## Deployment

This template is designed for easy deployment on GitHub Pages.

1.  **Configure GitHub Pages**:  In your repository settings, enable GitHub Pages and select the `main` branch as the source.
2.  **Set `baseurl`**:  If you are deploying to a subdirectory (e.g., `your-username.github.io/my-website`), set the `baseurl` in `_config.yml` accordingly.
3.  **Push Changes**:  Push your changes to the `main` branch, and GitHub Pages will automatically build and deploy your website.

## FAQ

**Q: How do I change the theme?**

A: This template uses the Minimal Mistakes theme.  You can customize the theme by modifying the CSS files in the `assets/css` directory or by overriding the default layouts in the `_layouts` directory.  Refer to the Minimal Mistakes documentation for more advanced customization options.

**Q: How do I add a new page?**

A: Create a new Markdown file in the `_pages` directory and add the following front matter:

```yaml
---
title: "Page Title"
permalink: /page-url/
---
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### License Summary
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ❌ Liability
- ❌ Warranty

## 💬 Support

- 📧 **Email**: your.email@example.com (Placeholder)
- 🐛 **Issues**: [GitHub Issues](https://github.com/mnurwegiono/mnurwegiono.github.io/issues)
- 📖 **Documentation**: [Minimal Mistakes Documentation](https://mmistakes.github.io/minimal-mistakes/)

## 🙏 Acknowledgments

- 🎨 **Minimal Mistakes Theme**: [Michael Rose](https://github.com/mmistakes) for the excellent Minimal Mistakes theme.
- 📚 **Libraries used**:
  - [Jekyll](https://jekyllrb.com/) - Static site generator.
- 👥 **Contributors**: Thanks to all [contributors](https://github.com/mnurwegiono/mnurwegiono.github.io/contributors)
```