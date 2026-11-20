# Geetha M — portfolio

Static personal site. HTML, CSS, and a small script. No build step and no package install.

## Open it

Double-click `index.html`. It also opens from a browser’s File → Open dialog.

From this folder, a local server works the same way:

```bash
python3 -m http.server 8000
```

Then visit http://127.0.0.1:8000

## Publish on GitHub Pages

1. Create a new empty GitHub repository.
2. Put these files at the repository root: `index.html`, `styles.css`, `main.js`, `favicon.svg`, and this README.
3. Push the branch you want to publish (usually `main`).
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select that branch and the folder **`/ (root)`**, then save.

GitHub serves the site at `https://<user>.github.io/<repository>/`. Paths in this project are relative, so the same files also work if the site is served from a domain root.

For a user site at `https://<user>.github.io/`, use a repository named `<user>.github.io` and the same root-folder settings.

Custom domain: add a `CNAME` file with the domain, then set that domain in Pages settings. DNS stays with the domain host.
