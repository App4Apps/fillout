# The Repo
[Live Demo](https://fillout-zeta.vercel.app/)

This project contains code for the Fillout frontend takehome assessment which asks for some basic functionality regarding drag and drop pages. Below, I'll outline what I used as well as some notes I have for what I would do different/better if I had more time to spend.

## What I Used
- [Typescript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [@dnd-kit](https://dndkit.com/)
- [react-icons](https://react-icons.github.io/react-icons/icons/md/)

## Notes
This was done quickly with the goal of keeping the node modules small and getting an MVP for the assessment. With that in mind I didn't import a design system like MUI because it would bloat the project size for such a small surface of features.

### Project Structure
Right now, everything is shoved into a components folder. If this were a larger project with other people, I would have a `UI` or similarly named folder that contained our base components like the DraggableItem and ClickAwayListener. The components would also be split up more, the AddButton would be composed of a base Button component that followed a design system with a relevant typography component and a button for the ContextMenu.

### Code
The big thing that could be improved greatly would be the developer experience of using the design language. I have classes in the index.css that handle a lot of the styling but I also just inlined a bunch of styling. Utilizing Material UI, tailwind, or some other structured way of defining the general look of components would be needed to keep the codebase readable and consistent. There's also no testing since this is a demo project, I would use react testing library or vitest for mocking pages and confirming basic components continue to work/display things we need from them.

### Accessibility
I didn't do any work to make the page accessible or mobile friendly. A design system with pre-built components could take care of some of that and I felt like the assessment made no mention of accessibility so it was deep in the "nice to have" category for the reviewers. There's a lot of considerations around intended user flows and if this is even intended to be used from a mobile browser or if we would be pushing the mobile app when a screensize is too small.
