# YEDAN — vitrine des formations

Site vitrine responsive pour **YEDAN (Young Economists & Data Analysts Network)**.

## Fonctionnalités du prototype
- Présentation de la communauté et de son approche.
- Catalogue de démonstration des formations.
- Recherche textuelle et filtres par domaine et niveau.
- Affichage responsive pour mobile et ordinateur.
- Contact configurable via WhatsApp ou e-mail.

## Structure
- `index.html` : structure et contenu de la page.
- `styles.css` : identité visuelle et mise en page responsive.
- `app.js` : catalogue de démonstration, filtres et configuration du contact.

## Configuration avant publication
Ouvrir `app.js` et renseigner les informations officielles :

```js
const YEDAN_CONFIG = {
  whatsappNumber: "226XXXXXXXX",
  contactEmail: "adresse-officielle@exemple.com"
};
```

- Le numéro WhatsApp doit être au format international, sans signe `+`, espace ou tiret.
- Renseigner au moins un canal de contact réel.
- Remplacer les formations de démonstration par les formations réellement proposées.
- Confirmer les niveaux, durées, tarifs, dates, modalités et liens d'inscription avant toute communication publique.

## Publication avec GitHub Pages
1. Ouvrir le dépôt GitHub **Settings**.
2. Dans **Pages**, choisir **Deploy from a branch**.
3. Sélectionner la branche `main` et le dossier `/(root)`.
4. Enregistrer, puis attendre la fin du déploiement.
5. L'adresse publiée sera affichée dans la section GitHub Pages du dépôt.

## Limites actuelles
Ce projet est un front-end statique. Il ne comporte pas de compte utilisateur, de paiement, de base de données, de suivi d'inscription ni d'espace administrateur. Le bouton de contact redirige vers WhatsApp ou l'e-mail après configuration. Les demandes ne sont pas stockées dans le site.

---
Prototype initial — à compléter et valider par l'équipe YEDAN.
