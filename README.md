# Ichthyology Quiz Application

A modern, interactive quiz web application for a university pre-test on **Ichthyology: Circulation and Respiration**. Built with Next.js, TypeScript, Tailwind CSS, and Lucide React.

## Features

✨ **Modern UI Design**
- Elegant dark aquatic theme with oceanic accents
- Responsive layout that works on all device sizes
- Smooth animations and transitions

📋 **Quiz Mechanics**
- 18 comprehensive questions on ichthyology
- Short answer (Uraian Singkat) format
- Case-insensitive answer matching
- Free navigation between questions
- Visual progress indicator

🎯 **Question Navigator**
- Grid-based navigation showing all 18 questions
- Visual indicators for answered/unanswered questions
- Current question highlight
- Jump to any question at any time

📊 **Results & Review**
- Detailed score display with percentage
- Complete review section for all questions
- Shows user answer vs. correct answer
- Includes "Pembahasan" (explanation) for each question
- Color-coded results (green for correct, red for incorrect)

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Framer Motion** - Smooth transitions (optional)

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main quiz page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Header component
│   ├── QuestionCard.tsx    # Question display
│   ├── QuizControls.tsx    # Navigation controls
│   ├── QuestionNavigator.tsx # Question grid navigator
│   └── ResultsPage.tsx     # Results and review
├── lib/
│   ├── quizData.ts         # Quiz questions data
│   └── utils.ts            # Utility functions
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Installation & Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Navigate to `http://localhost:3000`

## Usage

1. **Start Quiz** - Begin with question 1 displayed
2. **Navigate** - Use the grid navigator on the left to jump to any question, or use Previous/Next buttons
3. **Answer** - Type your answer in the text field (case-insensitive)
4. **Track Progress** - Green highlighted questions in the navigator show answered questions
5. **Submit** - Click "Submit Quiz" to complete and see results
6. **Review** - View detailed results with explanations for each question
7. **Retake** - Start over with the "Retake Quiz" button

## Answer Matching Logic

- Answers are **case-insensitive**
- **Whitespace is trimmed** at the beginning and end
- Matches against any variation in the `correctAnswers` array
- Example: "Respirasi", "RESPIRASI", "  respirasi  " all match

## Customization

### Adding More Questions
Edit `lib/quizData.ts` and add new questions to the `QUIZ_QUESTIONS` array:

```typescript
{
  id: 19,
  question: 'Your question here?',
  correctAnswers: ['answer1', 'answer2'],
  pembahasan: 'Explanation here.',
}
```

### Changing Theme
Edit `tailwind.config.ts` to modify colors, or update class names in components for different styling.

### Adjusting Typography
Font sizes and weights are in the component files. Modify Tailwind classes like `text-2xl`, `font-bold`, etc.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for educational purposes.

## Author

Created as a university pre-test application for Ichthyology coursework.
