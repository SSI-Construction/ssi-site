---
title: "Controlling Your Construction Budget with SSI Construction Manager"
date: 2025-04-25T00:38:42.046Z
category: Finance
layout: layout.njk
tags:
  - construction budget
  - cost control in construction
  - construction project budget
  - cost codes
  - purchase orders
  - construction invoices
  - SSI Construction Manager
description: A practical, step-by-step guide to controlling your construction project budget using SSI Construction Manager. Learn how to set up divisional cost breakdowns, link purchase orders and invoices through cost codes, and report budget vs. actual in seconds.
---

Most construction projects don't lose money in big, dramatic blowups — they bleed it slowly through dozens of small, unmonitored decisions: an unapproved scope add here, a forgotten allowance there, a purchase order that wasn't tied back to the right division. By the time the over/under report finally lands on your desk, the project is already 4% in the hole.

Budget control isn't about creating a perfect estimate up front. It's about **building a single live system** where every dollar you commit and every dollar you pay is connected, in real time, to the line item that authorized it. That's exactly what [SSI Construction Manager](https://app.ssiconstruction.ca) is designed to do, and this guide walks you through using it end to end.

> **TL;DR:** Build your divisional breakdown → transfer to budget → write POs and invoices using the same cost codes → run a project-level over/under report any time. The cost code is the glue.

## Why budget control matters more than ever

Margins in commercial and residential construction are thinner than they have been in a decade. Material price volatility, labour shortages, and longer lead times mean even well-estimated projects can drift quickly if you aren't tracking against the budget weekly.

Strong budget control gives you four concrete benefits:

1. **Early warning of over-runs.** A cost code that's already 80% spent at 50% completion tells you to act *now*, not at closeout.
2. **Defensible change orders.** When you can show the owner exactly what was budgeted versus what's been committed, change orders are conversations instead of arguments.
3. **Cleaner cash flow.** Knowing what's been invoiced versus what's still outstanding lets you forecast draws and pay subs on time.
4. **Better future estimates.** Every closed project becomes a benchmark for the next one.

For the bigger-picture strategy on cost management, see our companion guide on [mastering construction budget and cost management](/posts/2025-06-22-mastering-construction-budget-and-cost-management-strategies-for-profitable-projects/).

## The cost code: the foundation of everything

Before clicking anything in the app, get this concept straight: a **cost code** is the unique identifier that ties a budget line to its purchase orders and invoices. SSI Construction Manager uses **CSI MasterFormat divisions** by default, which means your codes look like `02 — Existing Conditions`, `03 — Concrete`, `26 — Electrical`, and so on.

If a PO or invoice isn't tagged with a cost code, it can't be reported against the budget. Period. That's the discipline that makes the system work.

## Step 1 — Set up your divisional breakdown

Open SSI Construction Manager, select (or create) your project, and click into the **Execute** tab. Inside Execute you'll find the **Divisional Breakdown** sub-tab.

The CSI divisions are pre-loaded, so all you need to do is:

- Enter **unit rates** and **quantities** for each line item under the relevant division.
- Let SSI calculate the line totals and division subtotals automatically.
- Add your **soft costs** (permits, design fees, insurance, temporary services, project management overhead) in the soft cost table.

The summary tab rolls everything up into a single **Total Project Cost** view so you can sanity-check the whole estimate before locking it in.

> Don't manually edit the divisional total table — those values are calculated. Edit the line items and let the totals roll up.

### Use a contingency

A budget without contingency isn't a budget — it's a wish. Add **5–10% for hard cost contingency** on most renovation work, and **3–5% on new construction**. If you're doing complex restoration, structural retrofit, or anything where you can't fully see the conditions, push the contingency higher. Track it as a separate line so you can report drawdowns.

## Step 2 — Transfer to budget

Once your divisional breakdown is solid, click **Transfer to Budget** at the bottom-right of the divisional total table. SSI moves your division numbers into the **Control & Monitor → Budget** tab, where each division becomes a unique **cost code**.

Now you have something powerful: a structured budget where every line is identified by a code that downstream documents can reference.

### Save before switching projects

Click **Save Division Data** before closing the app or moving to another project. Each project's data is isolated, so saving keeps your work cleanly separated.

## Step 3 — Write purchase orders against cost codes

Go to the **Purchase Orders** tab. Each PO captures:

- **Cost code** (use the same code from your budget — this is the link!)
- **Vendor name**
- **PO amount**
- **Description / scope**
- **Attachments** (quotes, supplier confirmations, drawings)

When you attach a file, SSI creates a **link to the file in your project folder** — it doesn't copy or embed it. **Don't move or rename the file after attaching**, or the link will break. We recommend creating a `Project XYZ / Purchase Orders / [Vendor]` folder structure and dropping files there before linking.

### Write POs early

Issue a PO as soon as a quote is accepted, not when the supplier asks for it. The PO is what commits the budget. Writing them late means your "remaining budget" report lies to you — it shows headroom that's already promised.

## Step 4 — Log invoices against POs

When invoices arrive, log them in the **Invoices** tab. Match each invoice to its PO by using the same cost code. SSI tracks:

- Total invoiced to date per PO
- Outstanding balance per PO
- Total invoiced and remaining per cost code (across multiple POs)

Attach the invoice PDF the same way you attached the PO. Now your project's full financial chain — budget → PO → invoice — is visible in one place, line by line.

## Step 5 — Run reports

At any point, click **Generate PDF Report** to produce:

- **From Execute tab:** the divisional breakdown, division summary, soft cost table, and total project cost
- **From Control & Monitor:** budget, PO list, invoice list, and the **over/under and cost-to-finish summary**

Send these to the owner monthly with your draw, or use them internally for your weekly project review. They're already formatted — no Excel cleanup required.

### What to look for in the over/under report

- **Cost codes that are over-spent** — investigate immediately. Was there a missed allowance? An unauthorized scope add?
- **Cost codes that are under-spent at near-completion** — likely an unrecognized credit or a scope that got skipped. Confirm with the field.
- **High commitment, low invoicing** — POs are out but money hasn't moved yet. Forecast the cash impact for next month.

## Step 6 — Update weekly

A budget is a living document. Set a recurring 30-minute window every Monday to:

1. Add any POs issued the previous week.
2. Log any invoices received.
3. Adjust forecasts on cost codes that are trending over.
4. Generate the over/under report and review it with your project team.

Projects don't go off the rails in a week — they drift. Weekly discipline is what catches drift before it becomes a problem.

## Common budget control mistakes

- **Skipping the cost code on a "small" PO.** It's never small once it's added to twenty other "small" ones.
- **Combining multiple scopes into one PO.** Split it. One cost code per PO keeps the reporting honest.
- **Not tracking contingency drawdowns.** Contingency disappears the same way budget disappears: one decision at a time. Document each use.
- **Ignoring soft costs.** Permits, insurance, and PM time are real costs. Budget them and track them.
- **Treating the budget as estimate-only.** The estimate is what you priced. The budget is what you'll spend. They're different documents and the budget needs to be live.

## Where the schedule fits in

Cost and time are linked. A delayed schedule almost always burns budget through extended general conditions, idle crews, and re-mobilization. As you control your budget, control your schedule alongside it — see our [step-by-step master schedule guide](/posts/2026-05-02-how-to-create-a-construction-master-schedule-with-ssi-construction-manager/) for the workflow.

When changes start eating into both your schedule and your budget, that's when [structured change control](/posts/2025-08-17-how-to-control-changes-in-construction-projects-ssi/) becomes the most important system on the project.

## Why use SSI Construction Manager for budget control

- **Cost codes are built in** — CSI MasterFormat divisions ready to use.
- **Budget, POs, and invoices live in one project.** No more reconciling three spreadsheets.
- **Attachments stay organized** in your file system, linked to the financial record.
- **Reports are one click.** PDF for the owner, internal review, or audit trail.
- **Affordable.** No enterprise per-seat pricing — built for builders.

## Get started

[Open SSI Construction Manager](https://app.ssiconstruction.ca) and set up your first project's divisional breakdown today. Need a fuller orientation? The [Getting Started guide](/getting-started.html) covers projects, schedules, POs, invoices, and reports in about ten minutes.

Have a question or feature request? [Contact us](/#contact) — we ship updates based on what real builders ask for.
