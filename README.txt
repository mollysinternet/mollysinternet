MOLLY'S DIARY — INSTALLATION

1. Open your existing GitHub repository: mollysinternet/mollysinternet
2. Add diary.html to the repository root (beside index.html).
3. Create a folder named posts, and add both JSON files inside it:
   posts/index.json
   posts/2026-10-14.json
4. Commit your changes. After GitHub Pages deploys, visit:
   https://www.mollysinternet.com/diary.html
5. To link the homepage to your diary, edit index.html and add:
   <a href="diary.html">my diary</a>
   in the navigation area.

ADDING A NEW ENTRY

1. In GitHub, open the posts folder and create a new file named YYYY-MM-DD.json
   (for example, 2026-10-15.json). If posting twice in one day, add a suffix,
   such as 2026-10-15-2.json.
2. Copy the structure of the sample JSON file, then edit date/title/preview/more.
   Keep double quotes around the text; use \\" for literal quotation marks.
3. Edit posts/index.json and add the new filename to the list, separated by a comma:
   ["2026-10-15.json", "2026-10-14.json"]
4. Commit both files. Newest dates appear first automatically.

NOTES
- Posts are publicly visible to everyone who visits the website.
- The diary uses plain text for posts (no HTML injection).
- This is a free static GitHub Pages solution; it doesn't need a CMS or database.
- To preview fetch-based posts locally, use a local web server rather than double-clicking diary.html.
