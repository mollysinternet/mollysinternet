# Molly's Internet — Jetsons City Edition

A static GitHub Pages website with a fully clickable illustrated city. No framework or build step needed.

## Preview
Open `index.html` to preview the city. The content JSON on section pages loads when served over HTTP (such as GitHub Pages), not always when opened with `file://`.

## Publish to your existing GitHub Pages repo
1. **Back up** your current repository first (Code → Download ZIP).
2. Extract this ZIP and upload **the contents** (not the enclosing folder) to the root of your `mollysinternet/mollysinternet` repository. Replace the old `index.html` when you're ready.
3. **Keep your existing `CNAME` file** if your custom domain uses one; don't delete it. Keep your existing DNS configuration.
4. In Settings → Pages, confirm deployment from the `main` branch and `/ (root)` folder, if using branch-based publishing.
5. Wait for deployment, then visit your site and test all buildings.

## Edit your content
Edit `content/projects.json` and add an object with `section`, `title`, `description`, and optional `url`. Valid sections: `library`, `playground`, `data-lab`, `recipes`, `home`, `moodboards`, `school`.

Example:
```json
{"section":"data-lab","title":"My first chart","description":"A chart about something interesting.","url":"https://example.com"}
```

For standalone projects, create a folder with an `index.html` and link to it with a relative URL like `../my-project/` from the section page. For entries in `projects.json`, use root-relative URLs (e.g. `/my-project/`) when hosting at mollysinternet.com.

## Notes
- Building hotspots are percentage-positioned over the image, so they scale with it. On very small screens, the directory buttons below the artwork provide an accessible alternative.
- The city illustration is stored at `assets/city.png` and can be replaced later.
- The Google Fonts import is optional; the site falls back to system fonts.
