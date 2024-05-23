# Markdown Previewer

This project is a Markdown Previewer built with React 18 and packaged with Vite. It allows you to write markdown text and see the preview in real time.

## Project Structure

The project is structured as follows:

- `src/App.jsx`: This is the main component of the application. It manages the state of the markdown text and the expanded component.
- `src/components/Editor.jsx`: This component provides an interface for writing markdown text.
- `src/components/Previewer.jsx`: This component shows the preview of the markdown text.
- `src/components/Header.jsx`: This component displays the header for both the Editor and Previewer components.

## Getting Started

To get started with this project:

1. Clone the repository
2. Make sure you have Node JS installed.
3. Install the dependencies with `npm install`
4. Start the development server with `npm run dev`

## Usage

Write markdown text in the editor pane. The preview pane will update in real time to reflect your markdown text.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## Notes

If you are trying to use this project for the FCC FrontEnd libraries certification, please be aware that the SVG icons loading method used here will not work as I used the vite-plugin-svgr plugin which only works in, that's right, vite! so please modify the way how the SVG icons are loaded before submitting your project to the test battery.
