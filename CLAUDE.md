# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React-based interactive mathematics teaching plan generator that integrates GeoGebra for interactive geometry visualization. The project explores AI-generated educational content with interactive components.

## Key Technologies

- **Frontend**: React 19 + React Router + Tailwind CSS 4
- **Math Rendering**: KaTeX for formulas, GeoGebra for interactive geometry
- **Markdown**: Marked.js with custom KaTeX and syntax highlighting support
- **Styling**: SCSS modules + Tailwind CSS
- **Build**: Vite 7 with custom plugins
- **Testing**: Vitest

## Development Commands

```bash
# Development
bun dev                  # Start dev server with hot reload
bun build               # Build for production
bun preview             # Preview production build
bun serve               # Serve built files locally
bun lint                # Run ESLint
bun test                # Run tests with Vitest
```

## Project Architecture

### Core Components

- **StandardPage.jsx**: Main page template using schema-based configuration
- **Geogebra.jsx**: React wrapper for GeoGebra integration
- **TeachingPlanList.jsx**: Homepage with searchable/filterable lesson plans
- **Layout.jsx**: Main layout with navigation

### Page Structure Pattern

Each lesson follows a standardized structure defined in `StandardPageStructure.d.ts`:

```typescript
PageStructure {
  title: string
  header: Header
  welcome: Welcome
  knowledgePointSection: KnowledgePointSection
  geogebraSection: GeoGebraSection
  quizSection: QuizSection
  summary: Summary
  footer: Footer
}
```

### File Organization

```
src/
├── component/
│   ├── teachingPlan/     # Reusable lesson plan components
│   ├── Geogebra.jsx      # GeoGebra integration
│   ├── layout/           # Layout components
│   └── MarkdownRenderer.jsx
├── [lesson-name]/        # Individual lesson pages
│   ├── config.jsx        # Schema-based configuration
│   └── [Component].jsx   # React component
├── lib/
│   ├── marked.js         # Markdown processing
│   ├── hljsRenderer.js   # Code block enhancements
│   └── utils.js          # Utility functions
└── promptDisplay/        # LLM prompt generation tools
```

## Key Features

### GeoGebra Integration
- Self-hosted GeoGebra with custom path resolution
- Interactive geometry applets with custom drawing commands
- Real-time math visualization

### AI-Generated Content
- Schema-based lesson generation from LLM prompts
- Standardized component system for consistency
- Prompt templates in `docs/新课件提示词/`

### Enhanced Markdown
- Syntax highlighting with line numbers
- Expandable/collapsible code blocks
- Copy-to-clipboard functionality
- KaTeX formula rendering

## Configuration Patterns

### Lesson Configuration
Each lesson uses a `config.jsx` file that exports a `PageStructure` object:

```javascript
export const config = {
  title: "Lesson Title",
  header: { content: "..." },
  welcome: { title: "...", content: "..." },
  knowledgePointSection: {
    title: "...",
    points: [...],
    thinks: [...]
  },
  geogebraSection: {
    title: "...",
    geogebraList: [...]
  },
  quizSection: {
    title: "...",
    description: "...",
    quiz: [...],
    link: { url: "...", text: "..." }
  },
  summary: { title: "...", content: "..." },
  footer: { info: "..." }
};
```

### Custom GeoGebra Commands
Interactive elements use `appletOnLoad` functions:

```javascript
appletOnLoad: (applet) => {
  applet.evalCommand('ellipse: x^2/25 + y^2/9 = 1');
  applet.setColor('ellipse', 255, 0, 0);
  applet.setCoordSystem(-6, 6, -4, 4);
}
```

## Development Notes

- **GeoGebra Setup**: Requires manual download of GeoGebra Math Apps Bundle to `public/geogebra/`
- **Path Resolution**: Modified GeoGebra's `web3d.nocache.js` for correct asset paths
- **Styling**: Uses SCSS modules with Tailwind CSS utility classes
- **Testing**: Vitest for unit tests, includes snapshot testing for code generation
- **Build**: Uses bun as package manager and runtime

## Special Considerations

1. **Asset Loading**: GeoGebra assets are large (~50MB), use local hosting for performance
2. **Browser Compatibility**: GeoGebra has known console-related display issues
3. **Content Generation**: LLM-generated content uses standardized schemas for consistency
4. **Code Blocks**: Custom renderer for enhanced markdown code blocks with copy/expand features