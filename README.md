# moodTracker

# React + Vite

# MoodTracker (React Application)

## Overview

This is a simple React application that allows users to log their moods along with optional notes. Users can view a history of all their logged moods. The application uses React’s **useState** hook to manage both the input fields (mood and note) and the array of mood entries.

## Features

1. **Mood Input**: A text input field for users to enter their current mood (e.g., “happy,” “sad,” “excited”).
2. **Optional Note**: A text area for users to provide additional context or notes about their mood.
3. **Mood History**: A list of previously logged moods and their associated notes.
4. **Styling**: A separate CSS file is used for styling to make the interface user-friendly.

## How It Works

- The component **App** maintains two pieces of state using **useState**:
  - `mood` for the mood input
  - `note` for the note input
- There is a third state variable, an array called `moodHistory`, which holds all logged entries.
- When the user clicks **“Log Mood”**, the application:
  1. Creates an object with the current `mood` and `note`.
  2. Appends that object to the `moodHistory` array.
  3. Resets the input fields (mood and note) for the next entry.
- The **moodHistory** is displayed as a list, with each entry showing the mood and its note.

## Installation and Running Locally

> **Note**: If you only need to review the code, you can open the CodeSandbox link (see below).
> https://codesandbox.io/p/sandbox/lz2vzx?file=%2Fsrc%2FApp.js
> Otherwise, to run locally:

1. **Clone the repository** or download the zip.
2. **Install dependencies**:
   ```bash
   npm install
   ```
