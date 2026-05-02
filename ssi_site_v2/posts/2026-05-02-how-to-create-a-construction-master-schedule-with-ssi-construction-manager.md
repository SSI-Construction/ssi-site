---
title: "How to Create a Construction Master Schedule with SSI Construction Manager (Step-by-Step Guide)"
date: 2026-05-02T12:00:00.000Z
category: Scheduling
tags:
  - construction master schedule
  - construction scheduling software
  - project schedule
  - critical path method
  - gantt chart
  - look ahead schedule
  - construction project management
  - SSI Construction Manager
description: A step-by-step guide to creating a construction master schedule in SSI Construction Manager. Build tasks, set dependencies, auto-calculate dates around weekends and company holidays, generate Gantt charts, look-ahead schedules, and the critical path — then export to Excel or PDF.
layout: layout.njk
---

A construction master schedule is the single most important planning document on any project. Done well, it tells the owner when the building will open, tells the trades when to mobilize, tells procurement when materials must be on site, and tells the project manager which delays will move the finish date and which won't. Done poorly — or not at all — it guarantees missed milestones, claims, and cost overruns.

This guide walks you through building a master schedule from scratch in **[SSI Construction Manager](https://app.ssiconstruction.ca)** — including dependencies, working-day calculations, the critical path, look-ahead filtering, and Gantt chart export. No Microsoft Project license needed.

> **TL;DR:** Open your project → Schedule tab → enter tasks with durations and `dependsOn` IDs → SSI auto-calculates start and finish dates around weekends and company holidays → review the Critical Path → publish a Look-Ahead or Gantt PDF for the field.

## What is a construction master schedule?

A **master schedule** is the top-level project schedule that covers the entire job from notice-to-proceed through closeout. It identifies:

- All major work activities (tasks)
- How long each one takes (duration in working days)
- Which tasks must finish before another can start (dependencies)
- Who is responsible (resource assignment)
- Which tasks are on the **critical path** — the sequence that drives the project end date

A good master schedule is **realistic**, **logically linked**, and **maintained**. SSI Construction Manager is designed around those three principles.

## Before you start: what you need

1. A list of major activities, broken down by phase (sitework, foundations, structure, envelope, MEP rough-in, finishes, commissioning, closeout). 20–80 line items is typical for a master schedule; subcontractors add their own detail.
2. A duration estimate for each activity in **working days** (not calendar days — SSI handles the calendar math for you).
3. The logical sequence: which activities depend on which.
4. An SSI Construction Manager account. [Sign up here](https://app.ssiconstruction.ca) if you don't have one.

## Step 1 — Open or create your project

Each project in SSI has its own isolated schedule, budget, POs, and invoices. From the dashboard, **create a new project** (project ID + name) or open an existing one, then click the **Schedule** tab.

If this is a new project you'll see a default starter task — replace it with your real activities.

## Step 2 — Set your working calendar (once per company)

SSI calculates finish dates by adding **working days** to the start, automatically skipping weekends and company-defined holidays. To make sure that math is right:

- Go to **Company Settings → Workdays per week** and set 5 or 6.
- Go to **Company Settings → Holidays** and add your statutory and company-observed dates.

Now every duration you enter on the schedule is interpreted as actual on-site working days. A 10-day task starting on a Friday won't finish on a Sunday.

## Step 3 — Enter your tasks

In the **Schedule** sub-tab, add a row for each major activity. The core columns are:

| Column | What to enter |
|---|---|
| **Task** | Short, action-based name (e.g. "Pour foundation walls") |
| **Duration** | Working days |
| **Start Date** | First task only — leave blank on dependent tasks |
| **Depends On** | The ID of the predecessor task (see Step 4) |
| **Status** | Not Started / In Progress / Complete |
| **Priority** | High / Medium / Low |
| **% Complete** | 0–100 |
| **Resource Assigned** | Trade or person responsible |

There are also advanced columns (notification email, CC email, lead time) that let SSI email reminders before tasks start — useful for trade coordination. Toggle **Show Advanced Columns** to expose them.

### Naming convention tip

Use verbs and a noun: **"Excavate footings"**, **"Install roof membrane"**, **"Energize main switchgear"**. Avoid vague names like "Site work" — they make the critical path harder to read.

## Step 4 — Link tasks with dependencies

Dependencies are the heart of a master schedule. In SSI you create them by entering the **predecessor task's ID** in the **Depends On** column.

- Leave **Depends On** blank → task is scheduled manually from its Start Date.
- Enter `5` → this task starts the working day after task 5 finishes (finish-to-start).
- Enter `5,7,12` → this task starts the working day after **all** of tasks 5, 7, and 12 finish.

Examples:

| ID | Task | Duration | Depends On |
|----|------|----------|------------|
| 1  | Mobilize site | 2 | _(blank — anchored to start date)_ |
| 2  | Excavate footings | 5 | 1 |
| 3  | Form & rebar footings | 4 | 2 |
| 4  | Pour footings | 1 | 3 |
| 5  | Cure & strip | 3 | 4 |
| 6  | Backfill | 2 | 5 |

Whenever a predecessor's date or duration changes, SSI cascades the change forward automatically. Click **Auto Schedule** to recalculate everything in dependency order.

## Step 5 — Review the Critical Path

Switch to the **Critical Path** sub-tab. SSI walks the dependency network and highlights the longest chain from start to finish — the activities that **cannot slip without slipping the project end date**.

Two practical rules:

1. **Protect critical-path tasks.** Assign your best crews, order long-lead items first, and watch them in every weekly meeting.
2. **If you need to pull in the schedule, you have two options:**
   - **Fast-track:** overlap critical-path tasks that were originally sequential (more risk).
   - **Crash:** add resources to a critical task to shorten its duration (more cost).

If you want a deeper explanation of these techniques, see our companion post: [Construction Management Scheduling Techniques: Achievable, Fast-Tracking, and Crashing](/posts/2025-10-05-construction-management-scheduling-techniques-achievable-fast-tracking-and-crashing/).

## Step 6 — Generate a Look-Ahead schedule for the field

Master schedules are too dense for daily field use. Switch to the **Look Ahead** sub-tab and choose a window — typically **7, 14, or 21 days**. SSI filters the master schedule to just the tasks that are active or starting in that window.

From here you can:

- Export the look-ahead as a PDF for the toolbox talk or weekly trade meeting.
- Trigger **lead-time email notifications** to assigned resources so trades know they're up next.
- Mark tasks as started directly from the look-ahead view.

Re-publishing the look-ahead every Friday for the following two weeks is a strong field discipline.

## Step 7 — Publish the Gantt chart

Switch to the **Gantt Chart** sub-tab to see the schedule as bars on a calendar timeline. Click **Export Gantt to PDF** and SSI generates a landscape PDF (A4) suitable for emailing to the owner, posting in the trailer, or attaching to a monthly report.

The PDF includes the project name, export date, and the full task list with their bars positioned on the timeline.

## Step 8 — Export to Excel for owner / consultant review

Owners, lenders, and consultants often want the schedule in Excel so they can sort, comment, or import into their own systems. Click **Export to Excel** and SSI produces an `.xlsx` with every column, including dependencies and dates. Round-trip editing in Excel is not supported (always treat SSI as the source of truth), but it's perfect for review and distribution.

## Step 9 — Save and update weekly

Click **Save Schedule** before switching projects or tabs — SSI stores your schedule per project so each job is isolated. Then make schedule updates a weekly ritual:

1. Walk the site (or get reports from supers).
2. Update **Status** and **% Complete** for each task in flight.
3. Adjust durations on tasks that are slipping.
4. Run **Auto Schedule** to cascade the impact.
5. Re-export the look-ahead and Gantt for distribution.

A schedule that isn't updated isn't a schedule — it's a wish.

## Bonus — Reuse a schedule across projects

When you build a similar project type (e.g. a chain of retail fit-outs or identical townhouse units), open a finished project's Schedule tab and click **Copy to Project**:

- **Replace** wipes the target's schedule and copies your task list with reset dates.
- **Append** adds your tasks to whatever already exists in the target.

After copying, run **Auto Schedule** in the target project to recalculate dates against its actual start.

## Common mistakes to avoid

- **No dependencies.** A list of tasks with hardcoded dates is a calendar, not a schedule. It can't tell you the impact of a delay.
- **One giant task.** "Build superstructure — 90 days" hides the critical path. Break it into pours, deliveries, and trade hand-offs.
- **Calendar days instead of working days.** Your schedule will silently slip every weekend and holiday.
- **No buffer on long-lead procurement.** Add explicit "Submit shop drawings", "Approve", and "Fabricate & deliver" tasks for major equipment — they're often the real critical path.
- **Forgetting commissioning and closeout.** They always take longer than estimated. Put them in the schedule from day one.

## Why use SSI Construction Manager for scheduling?

- **Built for builders.** Working-day math, company holidays, dependencies, and the critical path — without the licensing cost or learning curve of enterprise tools.
- **Integrated with your budget, POs, and invoices.** Your schedule lives in the same project as your divisional cost breakdown and procurement, so the team works from one source.
- **Fast field outputs.** PDF look-ahead, PDF Gantt, and Excel exports are one click away.
- **Email reminders.** Notify trades before their tasks start so the field stays ahead of you.
- **Affordable.** No per-seat enterprise pricing.

## Get started

[Open SSI Construction Manager](https://app.ssiconstruction.ca) and build your first master schedule today. If you're new to the platform, our [Getting Started guide](/getting-started.html) walks through projects, budgets, POs, invoices, and reports in about ten minutes.

Have a question or a feature request? [Send us a note](/#contact) — SSI is built by builders, for builders, and we ship updates based on what real users ask for.
