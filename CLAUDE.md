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
bun dev                  # Start dev server with hot reload + GeoGebra watcher
bun run build               # Build for production
bun preview             # Preview production build
bun serve               # Serve built files locally
bun lint --fix                # Run ESLint
bun run test                # Run tests with Vitest
bun run test --ui          # Run tests with UI
bun run test --reporter=verbose # Verbose test output
```

### Environment Variables
- `VITE_DEPLOY_TARGET=github-pages` - Configure for GitHub Pages deployment
- Default: local development with root path

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
│   ├── MarkdownRenderer.jsx  # Enhanced markdown rendering
│   └── ui/               # shadcn-ui components
├── [lesson-name]/        # Individual lesson pages
│   ├── config.jsx        # Schema-based configuration
│   └── [Component].jsx   # React component
├── lib/
│   ├── marked.js         # Markdown processing
│   ├── hljsRenderer.js   # Code block enhancements
│   └── utils.js          # Utility functions
├── plugins/              # Vite plugins for virtual modules
├── scripts/              # Build-time scripts (GeoGebra code collection)
├── promptDisplay/        # LLM prompt generation tools
└── mathBlog/            # Blog system components
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

### Build System Architecture
- **Vite Plugins**: Custom virtual modules for prompt display, README display, and blog data
- **Asset Processing**: Automatic GeoGebra code collection via `src/scripts/geogebra-src-code-collect.js`
- **Static Assets**: README and `docs/blogs` assets automatically copied to dist folder
- **Path Resolution**: Dynamic base path handling for GitHub Pages vs local development

### Testing Strategy
- **Unit Tests**: Vitest for utility functions and build scripts
- **Snapshot Testing**: GeoGebra source code collection validation
- **Mock Strategy**: File system and module mocking for build-time scripts
- **IDE Integration**: Debug terminal support for VS Code

## Development Notes

### Setup Requirements
1. **GeoGebra Setup**: Download [GeoGebra Math Apps Bundle](https://download.geogebra.org/package/geogebra-math-apps-bundle) to `public/geogebra/`
2. **Asset Structure**: Copy both `web3d/` and `css/` folders from the bundle
3. **Path Fixes**: Modified `web3d.nocache.js` to use `window.GGB_WEB3D_NO_CACHE_BASE_PATH`

### Build System
- **Package Manager**: Bun (faster than npm for this project)
- **Concurrent Tasks**: `bun dev` runs both GeoGebra watcher and Vite dev server
- **Asset Processing**: Automatic README and blog asset copying during build
- **GitHub Pages**: Environment-based path configuration via `VITE_DEPLOY_TARGET`

### Key Configuration Files
- **Vite Config**: `vite.config.js` - Handles path resolution, plugins, and build options
- **JS Config**: `jsconfig.json` - IDE support and path mapping
- **ESLint**: `eslint.config.js` - Code linting rules
- **Test Config**: `vitest.config.js` - Separate config for test environment

## Special Considerations

1. **Asset Loading**: GeoGebra assets are large (~50MB), use local hosting for performance
2. **Browser Compatibility**: GeoGebra has known console-related display issues
3. **Content Generation**: LLM-generated content uses standardized schemas for consistency
4. **Code Blocks**: Custom renderer for enhanced markdown code blocks with copy/expand features
5. **Deployment**: GitHub Pages requires special path handling and 404.html setup