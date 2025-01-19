# Java script notes

- What is What is JavaScript,
- History,
- Setting Up environment:
- CLI command : refers to command line interface and it is a way of communicating with the operating system through writing commands using our keyboard. Using CLI we are telling the computer to do something . In the past this was the only way to interact with the computer. In today’s PC environment users communicate with their computers using graphical user interface. However, CLI is still used by software developers and system administrators to configure computers, install software, and access features that are not available in the graphical interface.
- Variables : variables are containers for data or value. In JS there are four ways of declaring variable. automatically, Var, let, const
- Operators : operators are used to perform operations on variables and values.
  - Group of operators

### JS Practical lesson

How to run JS code

Go to terminal

- cd week1
- ls -la
- data_types.js
- node data_types.js

N.B: **use the console log() to print each variable to the console.**

**use the typeof operator to check the type of each variable and print.**

### Version Control

- Having diffrent versions of the same project with some updated contents or codes.
- it is mandatory for programmers to have diffrent version of the same project in case of losing the original.

### Tools for Version Control

- Git : a system for version control.
- CLI :
  - to creat a folder
    mkdir foldername
- GitHub : creat your own GitHub account.

## How to push to GitHub##

steps

- open in integrated terminal.
- git status
- git add .
- git commit "comment"
- git push origin main

### Teaching Methods

- Monday and Tuesday : lecturing.
- The rest is dedicated for LAB (practical coding).
- _Do not copy and paste codes. It is always better to write ypur own code._

### MAC keyboard short cuts

- Command + shift +3 for all screenshot
- Command + shift + 4 for selected screenshot
- Shift + command + 5 Open the screenshot toolbar for advanced options.
- Command + C copy
- Command + V paste
- Comand + X Cut
- Command + Z undo
- Command + shift + Z redo
- Command + A select all
- Command + F find text with a document or file.
- Command + space search
- Command + Tab. Switch b/n open apps
- Command + Q quite the active app
- Command + W close the active window
- Command + M minimise the active window
- Control + command + Q lock the screen.
- NDA : none disclosable agreement.
- Markdown language is used for creating README files.

### Useful shortcuts for Visual Studio Code

- command + shift + P Open command palette
- Command + , To open settings
- Command + O Open file
- Command + S Save file
- Command + W Close File
- Command + B Boggel hide
- Command + + To increase the font size of the code in VSC
- Command + - To reduce the font size of the codes. VSC
- Option + command + J To open console on the browser ( Chrome)
- checking bgit version on terminal
  - git --version

### Online resources

- Stack overflow
- MDN

### Javascript Practical examples

**Example 1**

First practical example of the JS lesson. That entails creating a folder for `HTML`, `CSS` and `JS` scripts. Then after writing the codes for all and link them to display them on a browser as a unified projedct.

Steps

1. Create a folder for your studies on your pc
2. Folder for JS.
3. Inside JS folder demo folder
4. Inside demo VS folder
5. Inside studio folder
6. Index.htm
7. Style.css
8. main.js
9. Connect files
10. Write a text “Hello world, Your name”
11. Background colour
12. Show in the browser

## How to connect .js files

1. Inside `HTML` File : Not recommended.
   - But it is useful for quick testing.
2. As a separate file.
   - write the path inside the `HTML` script.

### How to open console in chrome

1. right click
2. click on inspect
3. source
4. comsole

# Just trials

- item 2.1
- item 2.2

1. command
2. control

_bold_

**bold**

_italic_

http://www.bc.fi

[readmore](http://www.bc.fi)

How to write `HTML`, `CSS` and `JS` codeds.

```js
it is a code block that recognizes variables.

```

# UI Design and Prototyping

- Teacher
  - Elina Kuutti (KUUEL) elina.kuutti@bc.fi
- _Tool to be used_ :
  - **Figma**, sketch, Adobe family

### What is UI and UX

- UX : Research phase.

  - **User-centered design (UCD)**: is an iterative design process in which designers focus on the users and their needs in each phase of the design process. In UCD, design teams involve users throughout the design process via a variety of research and design techniques, to create highly usable and accessible products for them. [ReadMore](https://www.interaction-design.org/literature/topics/user-centered-design)

  - **Wireframing** is a way to design a website service at the structural level. A wireframe is commonly used to layout content and functionality on a page which takes into account user needs and user journeys.
  - **Information architect.**
  - **User research**
  - **Scenarios**

- UI : Design phase.

### Design Handover

# HTML-CSS Notes

- HTML tree

  - `<!DOCTYPE html>`: Defines document type.
  - `<html>`: Root element.
  - `<head>`: Metadata (title, CSS links, etc.).
  - `<body>`: Visible content.

```
<html>
<head> (information for the browser called meta data)
   <title> <title> (title on the page on the bar and it is mandatory)
   </head>
  <body> (all feaseble parts for the user on the browser)
  <h1> </h1>
  </body>
  </html>
```

### Semantic HTML

- A semantic element clearly describes its meaning to both the browser and the developer.

- Examples of non-semantic elements: `<div>` and `<span>`
  : Tells nothing about its content.

- Examples of semantic elements: `<form>`, `<table>`, and `<article>`: Clearly defines its content.

- Many web sites contain HTML code like: `<div id="nav">` `<div class="header">` `<div id="footer">` to indicate navigation, header, and footer.

- In HTML there are some semantic elements that can be used to define different parts of a web page:

  1. `<article>`
  2. `<aside>`
  3. `<details>`
  4. `<figcaption>`
  5. `<figure>`
  6. `<footer>`
  7. `<header>`
  8. `<main>`
  9. `<mark>`
  10. `<nav>`
  11. `<section>`
  12. `<summary>`
  13. `<time>`
