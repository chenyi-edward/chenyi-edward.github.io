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

## Updating a course page

Each course page has one content file:

- Information Resource Management: `_teaching/IRM.md`
- Big Data Analytics: `_teaching/BDA.md`
- Programming and Data Analysis: `_teaching/PDA.md`
- Survey Research Methods: `_teaching/SRM.md`
- Java Programming: `_teaching/Java.md`
- Cognitive Internship I & II: `_teaching/CI.md`

Open the relevant file on GitHub and click the pencil button. Edit:

- `course_headline`: the main heading; `\n` inside its quoted value creates a line break.
- `course_intro`: the short course description.
- `course_scope_label`: the small label above the overview diagram.
- `course_themes_intro`: the short sentence beside the course-themes heading.
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

All six course pages use the shared design. IRM, BDA, and PDA use the fuller version with the overview diagram. Java, Survey Research Methods, and Cognitive Internship use a simpler version with a short introduction, a compact theme list, and one teaching-approach paragraph.

The simpler pages use `course_style: compact`. Their `course_eyebrow` is the small label above the title; `course_themes_heading` is an optional heading above the theme list. They use the same `course_modules` structure as the fuller pages. A compact page needs no `course_scope_label`, `course_themes_intro`, or `course_approach_keywords`.

To feature a course on the catalog, add `course_featured: true` to its Markdown metadata. This controls both the Featured course label and the dark card style. IRM, BDA, and PDA are featured; the others have standard cards. To remove the feature, remove that line or set it to `false`. The detail-page style is independent of the catalog feature.

Another course can reuse either version by copying a similar course file and replacing its content. Keep or set its own `title`, `permalink`, and other collection metadata.

A new course is another Markdown file in `_teaching/`, with the usual collection metadata and the card fields above. No separate catalog list or JavaScript edit is needed.

## Layout files

Routine content updates do not require changing these files:

- `_layouts/teaching-portfolio.html`: shared page structure.
- `assets/css/teaching-portfolio.css`: visual style.
- `assets/js/teaching-portfolio.js`: course filters.
- `_pages/teaching.html`: teaching catalog route.

The content is rendered by GitHub Pages/Jekyll. It remains readable even when JavaScript is unavailable; JavaScript is used only for the course filters.

## Keeping the pages concise

Use one short introduction, two or three themes with one sentence each, a few topic labels, and a short teaching-approach description. Administrative details such as credits, schedules, assessment rules, and course years are unnecessary here. Keep a neutral course voice. Internship I and II are presented together in `_teaching/CI.md`, with their distinct project focuses retained.

The Big Data Analytics and Programming and Data Analysis drafts retain the supplied syllabi's main methods and tools. AI-related labels, code verification, and reproducibility are modest suggested updates; adjust or remove them to match the course as it develops.

The simpler pages also retain the supplied materials' main focus. AI-assisted debugging in Java and checking AI-suggested claims in Survey Research Methods are modest proposed additions. Internship II's text annotation and machine learning remain optional, as in the project brief.
