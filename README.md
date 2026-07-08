# Isidore web

Site portfolio one-page — création de sites web pour artisans et PME en Indre-et-Loire et Sarthe.

## Stack

- **Next.js 15** (App Router + Server Actions) + **TypeScript**
- **Tailwind CSS v4** + primitives shadcn/ui (Button, Input, Textarea, Label)
- **Zod** — validation du formulaire
- **Resend** — envoi des emails de contact
- **Honeypot** — anti-spam sans service tiers
- **next/font** — polices auto-hébergées (Fraunces + Hanken Grotesk), sans appel à Google au runtime
- **Vercel Analytics** — mesure d'audience sans cookie
- Déploiement **Vercel**, pas de base de données

## Démarrage

```bash
npm install
cp .env.example .env        # puis remplis les variables
npm run dev
```

Le site tourne sur http://localhost:3000

## Variables d'environnement

Voir `.env.example`. Pour le formulaire de contact :

- `RESEND_API_KEY` — clé API Resend
- `CONTACT_TO_EMAIL` — adresse qui reçoit les demandes
- `CONTACT_FROM_EMAIL` — expéditeur (domaine à valider dans Resend > Domains)

Sans ces variables, le site fonctionne mais l'envoi du formulaire renvoie un message d'erreur propre.

## Structure

```
app/
  layout.tsx           Fonts, SEO, Analytics
  page.tsx             Assemble les sections (one-page)
  globals.css          Système de design (tokens Tailwind v4)
  actions/contact.ts   Server Action du formulaire (Resend + honeypot + Zod)
  mentions-legales/    Pages légales (à compléter)
  confidentialite/
  cgv/
components/
  navbar / hero / about / realisations / pricing / engagements / contact / footer
  google-reviews.tsx   Bandeau avis — à activer quand tu auras de vrais avis
  wordmark.tsx         Logo typographique provisoire
  ui/                  Primitives shadcn (button, input, textarea, label)
data/projects.ts       Réalisations en dur
lib/                   utils (cn) + validations (Zod)
```

## Palette & typo

Tokens définis dans `app/globals.css` (`@theme`) → utilitaires `bg-paper`, `text-ink`,
`text-terracotta`, `border-line`, `font-serif`… Terracotta brique `#b8543a` en accent,
papier crème `#faf7f0` en fond.

## À faire avant la mise en ligne publique

- [ ] Remplacer les images placeholder : `public/jordan.jpg` et `public/projects/domaine-vin.jpg`
- [ ] Rédiger les pages **Mentions légales**, **Confidentialité**, **CGV** (contenu obligatoire)
- [ ] Renseigner le SIRET et l'adresse dans les mentions légales
- [ ] Activer le bandeau avis Google quand la fiche aura des avis (voir `app/page.tsx`)
- [ ] Vérifier le domaine expéditeur dans Resend
- [ ] Brancher le domaine `isidoreweb.fr` sur Vercel
- [ ] Remplacer le wordmark par le logo final

## Ajouter un projet

Édite `data/projects.ts` (copie un objet, dépose l'image dans `public/projects/`).

## Ajouter un composant shadcn plus tard

`components.json` est configuré. `npx shadcn@latest add <composant>` fonctionne ;
pense juste à aligner les couleurs sur les tokens maison si besoin.
