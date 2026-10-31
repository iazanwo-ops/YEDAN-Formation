/*
 * YEDAN — configuration du site
 * Remplacez les valeurs ci-dessous par les informations officielles avant publication.
 */
const YEDAN_CONFIG = {
  whatsappNumber: "", // Format international sans + ni espaces, ex. indicatif + numéro
  contactEmail: ""    // Adresse officielle de contact
};

// Ces formations sont des exemples de démonstration, pas une annonce de sessions ouvertes.
const trainings = [
  {title:"Prise en main de Python pour la data",domain:"Data & programmation",level:"Débutant",duration:"À définir",icon:"⌘",description:"Découvrir les bases de Python et manipuler des jeux de données simples."},
  {title:"Analyse de données avec R",domain:"Data & programmation",level:"Intermédiaire",duration:"À définir",icon:"R",description:"Importer, nettoyer, explorer et visualiser des données avec R."},
  {title:"Fondamentaux de l'économétrie appliquée",domain:"Statistique & économétrie",level:"Intermédiaire",duration:"À définir",icon:"∑",description:"Comprendre les modèles de régression et interpréter leurs résultats."},
  {title:"Statistique descriptive et inférentielle",domain:"Statistique & économétrie",level:"Débutant",duration:"À définir",icon:"▥",description:"Maîtriser les indicateurs, les distributions et les tests statistiques."},
  {title:"Introduction à l'analyse financière",domain:"Économie & finance",level:"Débutant",duration:"À définir",icon:"↗",description:"Lire les principaux états financiers et construire des indicateurs d'analyse."},
  {title:"Évaluation de projets et politiques publiques",domain:"Économie & finance",level:"Avancé",duration:"À définir",icon:"◎",description:"Explorer les notions de cadre logique, indicateurs et méthodes d'évaluation."},
  {title:"Collecte de données avec KoboToolbox",domain:"Outils professionnels",level:"Débutant",duration:"À définir",icon:"▣",description:"Concevoir un formulaire et préparer une collecte numérique."},
  {title:"Visualisation de données et tableaux de bord",domain:"Outils professionnels",level:"Intermédiaire",duration:"À définir",icon:"▤",description:"Présenter des résultats de manière claire à l'aide de visualisations."}
];

const grid = document.getElementById("courseGrid");
const search = document.getElementById("searchInput");
const domain = document.getElementById("domainFilter");
const level = document.getElementById("levelFilter");
const empty = document.getElementById("emptyState");

function renderTrainings() {
  const q = search.value.trim().toLocaleLowerCase("fr");
  const results = trainings.filter(item =>
    (!q || [item.title,item.domain,item.description].join(" ").toLocaleLowerCase("fr").includes(q)) &&
    (!domain.value || item.domain === domain.value) &&
    (!level.value || item.level === level.value)
  );
  grid.innerHTML = results.map(item => `
    <article class="course-card">
      <div class="course-top"><span class="course-icon">${item.icon}</span><span class="course-domain">${item.domain}</span></div>
      <h3>${item.title}</h3><p>${item.description}</p>
      <div class="course-meta"><span>${item.level}</span><span>Durée : ${item.duration}</span></div>
      <a href="#contact" aria-label="Demander des informations sur ${item.title}">Demander des informations →</a>
    </article>`).join("");
  empty.hidden = results.length !== 0;
}
[search,domain,level].forEach(control => control.addEventListener("input",renderTrainings));
renderTrainings();

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded","false");
}));

const contactLink = document.getElementById("contactLink");
if (YEDAN_CONFIG.whatsappNumber) {
  const message = encodeURIComponent("Bonjour YEDAN, je souhaite obtenir des informations sur vos formations.");
  contactLink.href = `https://wa.me/${YEDAN_CONFIG.whatsappNumber}?text=${message}`;
  contactLink.textContent = "Contacter YEDAN sur WhatsApp →";
} else if (YEDAN_CONFIG.contactEmail) {
  contactLink.href = `mailto:${YEDAN_CONFIG.contactEmail}?subject=${encodeURIComponent("Informations sur les formations YEDAN")}`;
  contactLink.textContent = "Envoyer un e-mail →";
}
document.getElementById("year").textContent = new Date().getFullYear();