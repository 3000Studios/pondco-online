# Pondco.online — Official Build Documentation

## 1. Project Overview

Pondco.online is designed as a professional enterprise website and operational software hub serving engineering, architecture, aviation infrastructure, and project delivery teams.

The platform combines a public-facing corporate website with a protected internal operating environment (SaaS Hub) for project tracking, Agile delivery, sector coordination, blueprinting, sprint management, change-order governance, and enterprise pipeline visibility.

The initial public-facing emphasis presents Pondco.online as a software consulting firm for engineers and architects, with a dedicated aviation showcase highlighting the two airport traffic control tower projects awarded for French Valley Airport (F70) and Jacqueline Cochran Regional Airport (TRM).

## 2. Business Purpose

The platform supports:
* Public presentation of A/E capabilities.
* Aviation and infrastructure project storytelling.
* Internal SaaS dashboards with role-based visibility.
* Daily configuration workbook management.
* Safety meeting compliance tracking.
* Business acquisition win/loss opportunity gates.

---

## 3. Data Schema & Pipelines

### Opportunity Win Probability Model
Each opportunity computes:
- **Win Chance**: Measures likelihood of award based on client relationship, past performance, and pricing.
- **Completion Chance**: Measures likelihood that the internal team compiles a compliant package on time.

### RAG Data Ingestion Buckets
1. Public Website Content
2. Contracts & SOWs
3. Gantt Schedules
4. Daily Configuration Workbooks
5. Safety Signature Logs

---

## 4. Operational Policies

### Workbook Delinquency Lock
All active functional leads must certify daily configuration logs. If a team member has not signed off on the daily safety meeting, their access is **locked**, preventing workbook submissions until signed.
