# Pondco.online Master Production Plan

## Executive Summary
This plan consolidates the project requirements from prior chat content with public Pond materials, the Riverside County Air Traffic Control Tower RFP and award materials, FAA program guidance, the current public state of the selected GitHub repository, and current Google/GitHub platform documentation. The resulting recommendation is to build **Pondco.online** as a **dual-surface platform**: a polished public enterprise site for credibility, portfolio, media, and lead generation, plus a secure SaaS hub for pursuit management, delivery operations, knowledge capture, RAG, AI agents, and client visibility. That recommendation fits both Pond’s public positioning as an integrated engineering, architecture, planning, and construction-management firm and the County/FAA procurement cadence reflected in the ATCT solicitation and award materials.

## Research Baseline and Standards Alignment
The standards and cadence for Pondco.online should be aligned to four source families:
1. **Pond’s Public Corporate Language**: Integrated engineering, architecture, planning, and construction management solutions.
2. **Riverside County Procurement Cadence**: DBE participation, qualifications and past performance review, safety sign-offs, and board approvals.
3. **FAA Program Language**: FAA Order JO 7210.78 replacement processes, and FAA Order 6480.4B for site location/height specifications.
4. **Existing Repository Baseline**: Staged static layouts migrating to a managed React+Vite architecture on Cloudflare Pages.

## Enterprise Information Architecture & Sitemap
* **Public Home**: Brand positioning, spotlight on the French Valley & Jacqueline Cochran ATCT projects, services overview, and trust credentials.
* **Aviation**: FAA-aligned capabilities, siting analysis details, and flight telemetry trackers.
* **Services**: Consultations for workflow systems, data migration, and RAG vector searches.
* **Markets**: Dedicated subpages for Government, Transportation, Aviation, and Energy.
* **Portfolio**: Interactive showcase of active, completed, and bidding projects.
* **FAQ**: Compliance, data handling, and AI agent usage policies.
* **Client Portal**: Milestones, progress bars, approved deliverables, and invoice states.
* **SaaS Hub**: CRM pursuit tracker, private schedule board, safety logs, and AI bot directory chat.

## Data Model & RAG Orchestration
Uses PostgreSQL + `pgvector` mapping. Ingestion chunks and embeds documentation (bids, schedules, workbooks) to serve role-based supervisor and specialist AI agents under strict zero-trust IAM permission rules.
