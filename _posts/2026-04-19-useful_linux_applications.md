---
layout: post
title: Useful *Linux* Applications
date: 2026-04-19
description: Linux applications that I use commonly
thumbnail: assets/img/projects-thumbnail-desktop_applications.png
tags: software
featured: false
---

Since July 4th, 2024, I have been permanently on GNU/Linux. Over the last couple of
years, I found some highly useful applications. Here are my favorites:

- **btop++**: Task manager, but a lot better and cooler. This uses vim-like
  bindings, so if you feel confused when using it, press `Esc` to read the
  help. Install:
  `bash
sudo apt install btop
    `
- **CopyQ**: Clipboard manager. Retains a history of copied things and allows
  searching. Install:
  `bash
sudo apt install copyq 
    `
- **drawio**: Draw.io supports GNU/Linux!

- **FreeFileSync**: Allows easy file synchronization.

- **Inkscape**: Just like in the Windows version, Inkscape has been great for
  making vector graphics. It is far more user friendly than illustrator, though
  part of it is due to less features. Install:
  `bash
sudo apt install inkscape 
    `
- **Joplin**: This is a note taking application that is cross-platform. If you
  have several small notes that are not inter-connected, then I highly
  recommend this. Use cases include journalling, notetaking for a non-math
  class, todos, etc. Install:
  `bash
wget -O - https://raw.githubusercontent.com/laurent22/joplin/dev/Joplin_install_and_update.sh | bash 
    `
- **KDE Connect**: Allows cross-platform connection between devices. Install:
  `bash
sudo apt install kdeconnect 
    `
- **Kdenlive**: Simple video editing software.
  `bash 
sudo apt install kdenlive 
    `
- **kitty** with **fish** and **atuin** = pretty nice terminal. Setting this up
  was slightly cumbersome, so I will assume you are tech-savvy enough to
  install it yourself.

- **krop**: Allows you to crop PDF documents. Great for extracting figures from
  research papers. You can also use Inkscape for this. Install:
  `bash 
sudo apt install krop 
    `
- **Logseq**: A more powerful note-taking app. Unlike Joplin, notes can be
  inter-connected. This greatly improves note-taking for research, where many
  papers might cite each other, or ideas maybe linked to each other. I
  installed this by downloading their
  [AppImage](https://github.com/logseq/logseq/releases/download/0.10.15/Logseq-linux-x64-0.10.15.AppImage)
  and running it (don't forget to
  grant permissions to run!).

- **Element**: A client for communicating on the federated Matrix universe. This
  actually came pre-installed on Linux Mint. This is cross-platform, and
  considering Discord's ads, better than Discord:
  [download](https://element.io/en/download)

- **NextCloud Desktop Client**: To sync with NextCloud of course. Checkout my
  guide [here](https://turibiusrozario.com/blog/2025/nextcloud_guide/)

- **PDF Arranger**: Great for merging and arranging PDFs. BentoPDF is another
  option, but that is a bit too advanced. Install:
  `bash
sudo apt install pdfarranger
    `
- **Qalculate!**: Literally the best calculator I have ever used! Allows unit
  conversions while performing calculations. Great for using mixed units. Also
  allows plotting and storing variables! Here's their
  [download instructions](https://qalculate.github.io/downloads.html)

- **Syncthing**: Like in Windows, this is great for synchronizing several
  devices.

- **VSCodium**: VSCode, but without the telemetry and AI.

- **Whispering**: Speech to text. Highly recommended when doing experimental
  research so that you don't have to note down your actions!

- **Zathura**: Simple PDF viewer. Install:
  `bash 
sudo apt install zathura 
    `
- **Zotero**: Library for research papers and more. Zotero also has a great note
  taking feature. To install, see their
  [website](https://www.zotero.org/support/installation).

Additional background applications:

- **LaTeX**, but if LaTeX had a child with Markdown, you'd get **Typst**. I have
  been using Typst for a while now, and it is so much more user friendly. Do
  note that not all of LaTeX's feature is present.

- **Typing Booster**: Boosts your typing speed by predicting the next
  word/phrase. Great for non-math and non-code writing, but otherwise, gets in
  the way. Install:
  `bash 
sudo apt install ibus-typing-booster 
    `
- **reveal.js**: Presentations using HTML. I like this since using HTML allows
  me to focus on content. Additionally, it is great at math (like LaTeX
  Beamer) and videos (like Google Slides).

- **fzf**: Allows searcrhing for files and folders very quickly.
