# Editing the teaching pages

Each course stays in its existing Markdown file under `_teaching/`. Course text and summaries are separate from layout and styling. Existing course URLs are preserved.

## Updating a course card

Open the course file on GitHub, click the pencil button and edit:

```yaml
course_level: "Undergraduate"
course_order: 1
course_theme: "Information content · IT projects · Enterprise information"
course_summary: "One short sentence describing the scope of the course."
course_display_title: "Information Resource Management"
```

Use `Undergraduate` or `Postgraduate` for the filters. `course_order` controls card order. `course_display_title` changes the card title without changing its existing CV title. Other metadata such as `date`, `venue` and `permalink` can remain; dates are not displayed in the teaching catalog.

Commit the edit and wait for the GitHub Pages deployment to finish, then refresh the website.

## Updating the Information Resource Management page

Edit `_teaching/IRM.md`:

- `course_headline`: the main heading; `\n` inside its quoted value creates a line break.
- `course_intro`: the short course description.
- `course_modules`: module titles, one-sentence descriptions and topic lists.
- `course_approach_heading`: the heading beside the teaching-approach text.
- `course_approach_keywords`: the short principle labels.
- The ordinary Markdown paragraphs below the closing `---`: the teaching-approach description.

A module has this form:

```yaml
course_modules:
  - title: "Information systems & IT project management"
    description: "Managing the IT project lifecycle, from initiation and planning to risk, change, quality, and implementation."
    topics:
      - "Project lifecycle"
      - "Risk & change"
      - "Quality management"
      - "AI project evaluation"
      - "Human–AI coordination"
```

Use spaces, not tabs, and preserve indentation. AI-related terms are listed like all other topics. Add or remove topic lines as needed. Modules can be renamed, reordered, added or removed; numbering and the overview diagram update automatically.

## Reusing the detail-page design

Another course can use the same design by adding `layout: teaching-portfolio`, `teaching_view: course`, and the `course_*` fields from IRM to its Markdown file. Keep its original `title`, `permalink` and other metadata. Replace its body with its own concise teaching-approach description. The other course detail pages retain their existing content until you choose to adapt them.

A new course is another Markdown file in `_teaching/`, with the usual collection metadata and the card fields above. No separate catalog list or JavaScript edit is needed.

## Layout files

Routine content updates do not require changing these files:

- `_layouts/teaching-portfolio.html`: shared page structure.
- `assets/css/teaching-portfolio.css`: visual style.
- `assets/js/teaching-portfolio.js`: course filters.
- `_pages/teaching.html`: teaching catalog route.

The content is rendered by GitHub Pages/Jekyll. It remains readable even when JavaScript is unavailable; JavaScript is used only for the course filters.
