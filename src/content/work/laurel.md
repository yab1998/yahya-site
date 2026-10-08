---
title: "Laurel: a social layer for academic competitions"
order: 4
summary: "LinkedIn meets ESPN for spelling bees, Science Olympiad and debate. I prototyped the social features (live scores, profiles, a network feed) for a startup's CEO using rapid AI build tools."
role: "Product & data analyst · UX prototyping"
lane: "Product · UX · data"
timeline: "Summer 2025"
tools: "Builder.io, Figma, Databricks"
cover: "../../assets/case/laurel-home.jpg"
coverAlt: "Prototype home screen with a live quiz bowl scoreboard, competition categories and a feed of student results"
status: ready
description: "UX case study: prototyping social features for an academic competition platform used by students, parents, teachers and schools."
---

## The context

I joined an EdTech startup building a results and rankings platform for K–12 academic competitions: spelling bees, Science Olympiad, debate, math leagues, quiz bowl. It serves students, parents, teachers and school administrators. My first job was data: crunching and validating school records in Databricks so rankings and results could be trusted.

When the CEO found out I could design, my role grew. I was asked to test rapid AI prototyping tools and use them to show what the platform could become. The product name and brand are left off here; the screens are rebuilt with made-up data.

## The idea

Academic competitors work as hard as athletes, but their wins disappear into PDFs of results. The pitch was **LinkedIn meets ESPN**: live scores and rankings like a sports app, plus profiles and a feed so students, coaches and schools can follow each other and get recognized.

## What I prototyped

<ol class="flow">
  <li><b>Live home</b><span>A scoreboard that updates during events, categories that filter everything, and a feed of results from people and schools you follow.</span></li>
  <li><b>Student profile</b><span>Stats up top (followers, win rate, rank), then achievements, competition history and skills, the "résumé" a coach or college would want.</span></li>
  <li><b>Personal dashboard</b><span>Season stats, score trend and upcoming events with one-tap registration that notifies the coach.</span></li>
</ol>

## Try the prototype

<div class="proto"><iframe src="/proto/laurel/" title="Academic competition platform interactive prototype" loading="lazy"></iframe></div>
<p class="protonote"><a href="/proto/laurel/" target="_blank" rel="noopener">Open full screen ↗</a> · Try following Ava, filtering the feed and registering for an event. Sample data only.</p>

## Design decisions

**Borrow the sports grammar.** Live tags, scores that tick and "rising this week" make academic events feel like something to tune into, not a results PDF you download later.

**Profiles are earned, not filled in.** Most of a profile comes from verified results, which is where the data work mattered. Badges and rank can't be typed in.

**Built for minors.** Messaging between students requires a parent-approved account, and what coaches and schools can see is spelled out on the profile itself.

<img src="/case/laurel-profile.jpg" alt="Student profile with follower count, achievements, competition history and season progress">

## Data + design

Validating school data first shaped the prototypes: I knew which fields were reliable enough to show publicly (results, placements, schools) and which weren't (self-reported stats). That's why rankings and badges come from results, not user input.

## Outcome

[TODO: Yahya: what happened with the prototypes? Did the CEO use them in pitches, did any features get built, and which tools did you recommend?]
