# Main

Client is running on vite

# src

## Assets

Contains the svgs for the types

## Components

Contains all components to be used in the app including:

- Navbar
- Footer
- Type
- Types

## Context

Contains context files for state that need to be available to multiple components

## Pages

Components used in the router. Only there so I learn about router.

# Code explanation

- Main file runs the app file
- App has routes for the main page and the about page AND uses the provider from context folder to use typeView
- From components, the types is the main part that is displayed on the index route. It loops around all the types and displays each using the type component.
- The types shows the list of types, but the main page also has a typeView which shows the type that was selected from that list
- The search bar simply uses the onChange event and looks for matching types in the array already available then loops it and hides the ones that dont match
- Navbar & Footer are around all the parts, however it uses the typeView context to change the bg color to whatever type is chosen.
