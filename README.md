# The Last Ember Throne — Light Novel Site

A simple static website for reading your light novel online, free to host on GitHub Pages.

## Structure

```
index.html            → homepage (title, synopsis, table of contents)
chapters/chapter-01.html ... chapter-05.html  → one page per chapter
css/style.css          → all styling
js/main.js              → reading progress bar on chapter pages
```

## Editing content

- **Novel title, tagline, synopsis:** edit the `<section class="hero">` block in `index.html`.
- **Chapter list:** edit the `.toc` block in `index.html` — one `.toc-item` per chapter.
- **Chapter text:** open the matching `chapters/chapter-0X.html` file and replace the
  paragraphs inside `<article class="chapter-text">`.
- **Adding a new chapter:** copy `chapter-05.html`, rename it (e.g. `chapter-06.html`),
  update its title/text, fix the previous/next links at the bottom, and add a new
  `.toc-item` link to it on the homepage.

## Publishing with GitHub Pages (from this Codespace)

1. Commit and push these files to your GitHub repository.
2. On GitHub.com, go to your repo → **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch".
4. Choose your branch (e.g. `main`) and folder `/ (root)`, then **Save**.
5. GitHub will give you a live URL (usually `https://<username>.github.io/<repo-name>/`)
   within a minute or two — that's the link you can share with anyone.

## Previewing locally in the Codespace

Right-click `index.html` in the file explorer and choose **"Open with Live Server"**,
or run a quick local server:

```bash
python3 -m http.server 8080
```

Then open the forwarded port 8080 in the Codespace's "Ports" tab.

## Adding manhwa later

There's already a "Coming Next" teaser section on the homepage (`#manhwa`). When you're
ready, you can turn it into a full section or a separate `manhwa.html` page with an
image-based reader, following the same layout patterns used here.