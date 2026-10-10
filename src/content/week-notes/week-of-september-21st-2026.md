---
title: "Week of September 21st, 2026"
date: "2026-09-27"
tags: ["weekly-notes", "ai", "software-engineering"]
author: "Niku Singh"
---

This is my first weekly note—a place to collect the things I watched, read, tried, and found interesting during the week.

## Videos I Watched

1. **[Rails World 2026 Opening Keynote — DHH](https://youtu.be/vDjW_dRyKXY)**

   I have been a fan of DHH since learning Ruby to contribute to GitLab. Hearing him say he had retired from professional programming—and had effectively stopped writing code by hand—was a huge shock. His point is that English may become the primary programming language, with people building software by directing agents. I see that in my own work: I rarely write much code by hand anymore, I prompt Claude and guide it toward the right solution. It is scary for software engineers, but it also offers hope: an era of makers, smaller teams, and people who can turn ideas into working things.

2. **[Can a Local Model Be Useful? — 0xSero](https://youtu.be/iTUNk9XfoGU)**

   Another creator whose videos I really enjoy. I am currently watching this session about using Claude Opus 5.5 and Qwen3.8-27B for kernel optimization and AI work.

3. **[All-In Podcast — Anthropic IPO at Risk, Meta’s Muse Pop, Token Prices Fall](https://youtu.be/cvP_1jmnkmM)**

   One of my favorite podcasts. Smart people discuss tech as investors, as top-level CEOs, and as people who understand how the larger system works. I enjoy that strategic view alongside the more technical conversations I usually follow.

## What I Read

1. **[When AI Writes Almost All Code, What Happens to Software Engineering?](https://newsletter.pragmaticengineer.com/p/when-ai-writes-almost-all-code-what)** — The Pragmatic Engineer

   It connects closely with DHH's keynote. Writing code is becoming less central, while product thinking, architecture, testing, and engineering judgment matter even more.

## Tools I’m Using

1. **Claude Code**

   My main tool for day-to-day coding. I have been using it for a while, but I want to try different agents and harnesses instead of relying on only one.

2. **Pi coding agent**

   Another coding harness I use to compare against Claude Code.

3. **OpenAI Codex**

   I use it alongside its VS Code extension.

4. **Herdr**

   I can spin up multiple agent instances, give each a separate Git worktree, and let them work independently without interrupting one another. [This terminal-native multi-agent setup](https://x.com/poteto/status/2102050467505430555) is close to the workflow I have been exploring.

5. **Omarchy**

   I dual-booted my Windows PC to install it, and the experience has been really good so far. It feels like one of the first Linux setups designed around modern agentic development workflows.

## What I’m Exploring

1. **Code Review Bots**

   I am increasingly interested in them and currently work with KAVIA AI on one. I am also exploring open-source alternatives and want to dive deeper into how their internals are built.

2. **[Entire](https://entire.io/)**

   A startup from former GitHub CEO Thomas Dohmke, and I still need to explore it properly. At a high level, it is rethinking Git infrastructure for an agentic world. The idea that interests me: preserve more than the final code—the prompts, context, reasoning, and decisions behind a change. That history could become as important as the diff itself.
