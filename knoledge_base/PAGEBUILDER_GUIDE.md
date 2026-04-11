# PageBuilder Guide

This guide explains how to add new projects ("Works") or "Goodies" to your portfolio using the `PageBuilder` system.

## 1. Where to Add Data

*   **Works (Projects)**: Edit `works_list.json`.
*   **Goodies**: Edit `goodies_list.json`.

## 2. Basic Structure

Each project is a JSON object in the list. Here is the minimal structure:

```json
{
  "id": "my-new-project",
  "visibility": "public",
  "title": "My New Project",
  "date": "2025",
  "categories": ["Motion Design", "Illustration"],
  "origin": "Client Work",
  "type": "case-study",
  "cover": "assets/images/previews/preview-my-project.jpg",
  "description": "A short description of the project.",
  "colors": {
    "accentColor": "#EE204C",
    "accentAlt": "#F7B1BD",
    "smartInvert": false
  },
  "credits": {
    "Client": "Acme Corp",
    "My Role": "Motion Designer"
  }
}
```

### Key Fields
*   **`id`**: Unique identifier (used in URL: `work.html?id=my-new-project`).
*   **`visibility`**: `"visible"` (shown on homepage) or `"hidden"` (accessible via link only).
*   **`colors`**: (Optional) Styling dictionary.
    *   **`accentColor`**: Primary brand color for this project.
    *   **`accentAlt`**: (Optional) Secondary brand color. If omitted, the system will automatically generate a harmonious secondary color.
    *   **`smartInvert`**: (Optional) Set to `true` to invert the primary/secondary colors inside the footer and in content hyperlinks.
*   **`type`**: Controls the header layout.
    *   `"case-study"`: Standard header with cover image.
    *   `"single-video"`: Header with a YouTube video instead of a cover image.
    *   `"case-study-video"`: Header with a YouTube video, but styled like a case study.
*   **`cover`**: Path to the thumbnail image (used on homepage and as header for `case-study`).
*   **`video`**: (Optional) Required if type is `single-video` or `case-study-video`.
    ```json
    "video": {
      "source": "youtube",
      "embedId": "dQw4w9WgXcQ"
    }
    ```

## 3. Content Blocks

You can add a list of content blocks to the `blocks` array to build the page body.

```json
"blocks": [
  { "type": "text", ... },
  { "type": "image", ... }
]
```

### Available Block Types

#### 1. Text Block
Adds a paragraph of text.
```json
{
  "type": "text",
  "title": "Optional Title",
  "content": "Your text goes here. Use \\n\\n for new paragraphs."
}
```

#### 2. Image Block
Adds a full-width image.
```json
{
  "type": "image",
  "title": "Optional Title",
  "src": "assets/works/my-project/image1.jpg",
  "alt": "Description of image"
}
```

#### 3. Video Block
Embeds a video from YouTube, Vimeo, or local files.
```json
{
  "type": "video",
  "title": "Optional Title",
  "source": "youtube", // or "vimeo" or "local"
  "src": "dQw4w9WgXcQ" // YouTube/Vimeo ID or full URL, or path for local
}
```

**Supported formats for YouTube:**
- ID: `"dQw4w9WgXcQ"`
- Short URL: `"https://youtu.be/dQw4w9WgXcQ"`
- Full URL: `"https://youtube.com/watch?v=dQw4w9WgXcQ"`

**Supported formats for Vimeo:**
- ID: `"123456789"`
- Full URL: `"https://vimeo.com/123456789"`

#### 4. Gallery Block
Displays a grid of images.
```json
{
  "type": "gallery",
  "title": "Gallery",
  "src": [
    "assets/works/my-project/img1.jpg",
    "assets/works/my-project/img2.jpg",
    "assets/works/my-project/img3.jpg"
  ]
}
```

#### 5. Slideshow Block
Creates an interactive image slider.
```json
{
  "type": "slideshow",
  "title": "Slideshow",
  "src": [
    "assets/works/my-project/slide1.jpg",
    "assets/works/my-project/slide2.jpg"
  ]
}
```

#### 6. Image + Text Block
Side-by-side layout (image on left, text on right).
```json
{
  "type": "image-text",
  "src": "assets/works/my-project/detail.jpg",
  "content": "Description of this specific detail."
}
```

#### 7. Iframe Block
Embeds external content (like a website or interactive tool).
```json
{
  "type": "iframe",
  "title": "Live Demo",
  "src": "assets/works/my-project/demo/index.html",
  "aspect-ratio": "16/9"
}
```

#### 8. Project Block
Links to another project or goodie with a preview card.
```json
{
  "type": "project",
  "from": "works", // or "goodies"
  "id": "project-id"
}
```

#### 9. Spacer Block
Adds vertical space.
```json
{
  "type": "spacer",
  "size": "medium" // "small", "medium", or "large"
}
```

#### 10. Separator Block
Adds a horizontal line.
```json
{
  "type": "separator",
  "size": "medium" // "small", "medium", or "large"
}
```

#### 11. Tabs Block
Creates a tabbed interface for text content.
```json
{
  "type": "tabs",
  "tabs": [
    { "title": "Tab 1", "content": "Content for tab 1" },
    { "title": "Tab 2", "content": "Content for tab 2" }
  ]
}
```

#### 12. Button Block
Creates one or more action buttons. You can set the kind to "regular" (default) or "download".

Single button:
```json
{
  "type": "button",
  "title": "Visit Website",
  "url": "https://example.com"
}
```

Multiple buttons with download behavior:
```json
{
  "type": "button",
  "kind": "download",
  "title": "Downloads",
  "buttons": [
    { "text": "Download PDF", "url": "assets/files/doc.pdf", "target": "_blank" },
    { "text": "Download Zip", "url": "assets/files/archive.zip", "target": "_self" }
  ]
}
```

### Block-Level Visibility
Individual blocks can be hidden without removing them from the data:
```json
{
  "type": "text",
  "visibility": "hidden",
  "content": "This block won't be rendered."
}
```

## 4. Credits
The `credits` object appears in the sidebar. You can write strings or use markdown formatted URLs `[Text](URL)` for hyperlinks.

```json
"credits": {
  "Role": "Designer",
  "Client": "[Acme Corp](https://acme.com)",
  "Team": "[John Doe](https://johndoe.com)"
}
```

### 5. Dynamic Colors & SVGs

The site automatically recolors specific assets based on your project's `accentColor`.

### How it works:
1.  **CSS Variables**: The colors are injected as `--color3` (Primary) and `--color4` (Secondary).
2.  **SVG Recoloring**: To make an SVG dynamic, add `data-replace-svg`. The system will fetch the SVG and replace specific colors:
    *   Pure Red (`#EE204C` or similar) -> `--color3`
    *   Pink/Light-Red (`#F7B1BD` or similar) -> `--color4`
3.  **Lottie Animations**: The loading logo automatically patches its internal JSON structure to match your project colors during transitions.
