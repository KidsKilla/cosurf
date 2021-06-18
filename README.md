# Surfly programming assignment for WebCompat Engineers

Your task for today is to create a prototype of a collaborative text editing web app, that allows two or more people to work on the same text in realtime.

## Required functionality:

1. As a minimum text editor itself should provide basic functionality of adding or deleting multiline text content.
2. Multiple users should be able to connect to the editor and be able to concurrently work on the same document.
3. Each user should see the current caret positions of all other users connected. To be able to distinguish users make those carets of different color.

## Technical requirements:

The proposed solution should:

- Be a Web application
- Work in the latest desktop versions of Chrome and Firefox
- Be available for review on GitHub, GitLab, BitBucket, or similar. The repository can be private or public, as long as we can access it.

You can use external libraries, but try to avoid unnecessary JS dependencies on the client side.
Preferably, it should be written in Javascript/Go/Python, but it's absolutely fine to use any other language.

Ideally, also deploy it so we can interactively test it together.

## Side notes:

For text editor you can use `textarea` or `contenteditable` or any other approach that you like.

The solution doesn't have to be looking good in terms of visual design, as long as it is functional.
