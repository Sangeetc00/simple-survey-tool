# Simple Survey Tool
A modern, lightweight survey creation tool built with Next.js and TypeScript that allows users to create customizable surveys with multiple question types.

![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)
![Next.js Version](https://img.shields.io/badge/next.js-14.0.0-blue)
![TypeScript](https://img.shields.io/badge/typescript-%5E5.0.0-blue)

## Features

- 📝 Create surveys with multiple question types
  - Text input questions
  - Multiple choice questions
- 🎨 Clean, modern UI with dark/light mode support
- 🔄 Real-time question management
- 📱 Fully responsive design
- ⚡ Built with performance in mind

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [shadcn/ui](https://ui.shadcn.com/) - UI components

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/simple-survey-tool.git
```

2. Install dependencies:
```bash
cd simple-survey-tool
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Usage

1. Click on "Create Survey" to start a new survey
2. Add a title and description
3. Create questions by:
   - Entering question text
   - Selecting question type (Text or Multiple Choice)
   - For multiple choice, add/edit/remove options
4. Review your survey
5. Click "Create Survey" to finish

## Project Structure

```
simple-survey-tool/
├── src/
│   ├── app/                 # Next.js app router
│   ├── components/          # Reusable components
│   ├── context/            # React context
│   ├── types/              # TypeScript types
│   └── utils/              # Utility functions
├── public/                 # Static files
└── package.json           # Project dependencies
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
Feel free to add more questions types like scale ratings, multi selects etc. 
Feel free to add a separate section for users to go through the survey questions by storing the survey created.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
