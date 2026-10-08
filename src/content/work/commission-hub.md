---
title: "Sales Commission Hub"
order: 3
summary: "An in-house app that turns a clinical lab's month-end commission spreadsheets into reviewed, encrypted reports for every sales rep, prototyped and pitched to the C-suite."
role: "Product design · UX · prototyping · pitch"
lane: "Product · UX"
timeline: "2022"
tools: "Figma, interactive HTML prototype"
cover: "../../assets/case/commission-dash.jpg"
coverAlt: "Commission Hub dashboard showing the sales team, commission overview, active adjustments and a Generate new reports button"
status: ready
description: "UX case study: designing and pitching an in-house commission reporting app for a clinical lab's finance team."
---

## The ask

At Acutis, a clinical lab, the CTO I reported to asked me to prototype an in-house tool for one of finance's most painful monthly jobs: commission reporting. I designed it, built the prototype and pitched it to the CFO, CEO and the rest of the C-suite. The company name and brand are left off here; the problem is the point.

## The problem

Every month, finance pulled four exports (sales, payments, which rep owns which account, and a log of changes), stitched them together by hand and emailed each rep a report. The hard part wasn't the math. It was the exceptions: reps on leave, reps who left, new hires and accounts moving between people. Those are exactly the cases where a manual process breaks, and where a wrong number costs trust.

## The flow

<ol class="flow">
  <li><b>Sign in</b><span>One admin role. SSO in production.</span></li>
  <li><b>Overview</b><span>Who's active, last month's totals, and every open adjustment, before anything runs.</span></li>
  <li><b>Upload</b><span>A four-file checklist. Generate stays locked until every file is in.</span></li>
  <li><b>Generate</b><span>Matches payments to reps and applies adjustments automatically.</span></li>
  <li><b>Review</b><span>Only the reports with exceptions are flagged, with the reason in plain words.</span></li>
  <li><b>Distribute</b><span>Pick recipients, edit the message, send encrypted PDFs.</span></li>
</ol>

## Try the prototype

<div class="proto"><iframe src="/proto/commission/" title="Commission Hub interactive prototype" loading="lazy"></iframe></div>
<p class="protonote"><a href="/proto/commission/" target="_blank" rel="noopener">Open full screen ↗</a> · Sample data, no real names or figures.</p>

## Design decisions

**Exceptions first.** Adjustments sit on the overview and come back as flags at review, so the 2 reports that need a human aren't buried among the 13 that don't.

**A checklist instead of a drop zone.** Naming each file and where it comes from removes the "did I upload the right export?" question, and it blocks bad runs before they start.

**Review before send.** Nothing goes out until someone has looked at the flagged reports. For money, a confirmation step is worth one extra click.

**Settings stay visible.** The commission rate, PDF, manager CC and encryption are visible on the home screen, because finance needs to see them, not hunt for them.

<img src="/case/commission-review.jpg" alt="Review screen: list of reps with a flagged report explaining a prorated leave of absence">

## Outcome

The CFO loved it, and the app was approved and scheduled to be built. Then the company downsized before development started, so it never shipped. With more time I'd test the review screen with the people who actually run month-end and add an audit log, so finance can show exactly what changed and why.
