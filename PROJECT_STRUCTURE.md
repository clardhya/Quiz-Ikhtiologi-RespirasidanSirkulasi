# Project Structure & File Guide

## Directory Layout

```
Quiz-Ikhtiologi-RespirasidanSirkulasi/
├── app/                          # Next.js App Router directory
│   ├── layout.tsx               # Root HTML layout with metadata
│   ├── page.tsx                 # Main quiz page component
│   └── globals.css              # Global Tailwind & custom styles
│
├── components/                   # Reusable React components
│   ├── Header.tsx               # Top header with title & logo
│   ├── QuestionCard.tsx         # Single question display component
│   ├── QuizControls.tsx         # Previous/Next/Submit buttons
│   ├── QuestionNavigator.tsx    # Grid-based question selector
│   └── ResultsPage.tsx          # Results & review component
│
├── lib/                          # Utility functions & data
│   ├── quizData.ts              # All 18 quiz questions data
│   └── utils.ts                 # Helper functions (grading, scoring)
│
├── package.json                  # Dependencies & scripts
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS theme setup
├── next.config.js               # Next.js configuration
├── postcss.config.js            # PostCSS plugins
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore rules
│
├── README.md                     # Project documentation
├── SETUP.md                      # Setup instructions
├── QUICK_START.bat              # Windows quick install script
└── RUN_DEV.bat                  # Windows dev server launcher
```

## Key Files Explanation

### App Directory

**app/page.tsx** - Main Quiz Component
- Manages quiz state (current question, answers, results)
- Handles navigation between questions
- Controls quiz submission and scoring
- Switches between quiz and results view

**app/layout.tsx** - Root Layout
- Sets page metadata (title, description)
- Loads Inter font
- Wraps all pages with consistent styling

**app/globals.css** - Global Styles
- Tailwind directives (@tailwind)
- Custom scrollbar styling
- Background gradient
- Global animations

### Components

**Header.tsx**
- Displays application title
- Shows "Ichthyology Quiz" heading
- Contains Fish icon (from Lucide React)

**QuestionCard.tsx**
- Shows current question number and text
- Provides textarea for user answer
- Character count display
- Responsive input with visual feedback

**QuizControls.tsx**
- Previous button (disabled on Q1)
- Next button (disabled on Q18)
- Question counter display
- Submit Quiz button (always available)

**QuestionNavigator.tsx**
- Grid of all 18 question numbers
- Visual states: answered (green), unanswered (gray), current (cyan)
- Click to jump to any question
- Shows legend of state indicators
- Responsive grid layout

**ResultsPage.tsx**
- Displays final score with percentage
- Performance feedback message
- Retake button
- Complete review of all questions
- Each question shows:
  - Question text
  - User's answer
  - Correct answer(s)
  - Pembahasan (explanation)
  - Visual correctness indicator (✓ or ✗)

### Library Files

**lib/quizData.ts** - Quiz Data
- `QUIZ_QUESTIONS` array with 18 questions
- Each question object contains:
  - `id`: Question number (1-18)
  - `question`: Question text in Indonesian
  - `correctAnswers`: Array of acceptable answers
  - `pembahasan`: Detailed explanation

**lib/utils.ts** - Utility Functions
- `checkAnswer()`: Normalizes and validates answers (case-insensitive)
- `calculateScore()`: Computes total score and percentage

### Configuration Files

**package.json**
- Project metadata and version
- npm scripts: dev, build, start, lint
- Dependencies:
  - next, react, react-dom
  - typescript
  - tailwindcss, postcss, autoprefixer
  - lucide-react, framer-motion

**tsconfig.json**
- TypeScript compiler options
- Path aliases (@/* maps to project root)
- Strict mode enabled

**tailwind.config.ts**
- Content paths for CSS purging
- Extended color palette (aquatic colors)
- Font family configuration

**next.config.js**
- React strict mode enabled
- Standard Next.js configuration

## Component Props & Interfaces

### QuestionCard
```typescript
interface QuestionCardProps {
  question: QuizQuestion
  answer: string
  onAnswerChange: (answer: string) => void
}
```

### QuizControls
```typescript
interface QuizControlsProps {
  currentQuestion: number
  totalQuestions: number
  onPrevious: () => void
  onNext: () => void
  onSubmit: () => void
  isLastQuestion: boolean
}
```

### QuestionNavigator
```typescript
interface QuestionNavigatorProps {
  totalQuestions: number
  currentQuestion: number
  answeredQuestions: Set<number>
  onNavigate: (questionNumber: number) => void
}
```

### ResultsPage
```typescript
interface ResultsPageProps {
  score: number
  total: number
  percentage: number
  questions: QuizQuestion[]
  answers: Record<number, string>
  onRetry: () => void
}
```

## Data Flow

1. **Initialization** → User sees Q1 with empty answer fields
2. **Answering** → User types answer → State updates via `onAnswerChange`
3. **Navigation** → Click grid number or Previous/Next → `currentQuestion` state changes
4. **Tracking** → `answeredQuestions` Set updates when answers are entered/cleared
5. **Submission** → Click Submit → `calculateScore()` runs → `showResults` becomes true
6. **Results** → `ResultsPage` displays with full review
7. **Retry** → Click Retake → All state resets to initial values

## Styling Strategy

### Color Palette
- **Background**: `bg-slate-900`, `bg-slate-800` (deep blues)
- **Accents**: `bg-cyan-500`, `text-cyan-300`, `border-cyan-900/30` (aquatic)
- **Success**: `text-emerald-500`, `bg-emerald-600` (green)
- **Error**: `text-red-500`, `bg-red-500` (red)
- **Text**: `text-white`, `text-slate-300`, `text-slate-400` (light)

### Responsive Design
- Single column on mobile
- Grid layout on larger screens
- Sidebar collapses on mobile devices
- Touch-friendly button sizes

## How to Extend

### Add More Questions
1. Edit `lib/quizData.ts`
2. Add new object to `QUIZ_QUESTIONS` array
3. Update `currentQuestion` state if needed
4. No other files require changes

### Change Theme
1. Modify `tailwind.config.ts` colors
2. Update component Tailwind classes
3. Custom CSS in `app/globals.css`

### Add Features
- Timer: Add `useEffect` hook in `page.tsx`
- Progress bar: Add progress component
- Categories: Extend question data with category field
- Leaderboard: Add backend/database integration

## Performance Considerations

- All components are client-side rendered (`'use client'`)
- No external API calls (quiz data is hardcoded)
- Minimal re-renders using React state management
- Tailwind CSS is tree-shaken in production
- Next.js automatic code splitting for routes
- Lucide icons are lightweight SVGs

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 15+
- Edge 90+

All modern browsers with ES2020 support.
