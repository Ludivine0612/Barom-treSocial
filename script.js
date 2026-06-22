
// --- BASE DE CONNAISSANCES DES HRBP AIRBUS HELICOPTERS (VERSION EXHAUSTIVE 2026) ---
// --- BASE DE CONNAISSANCES DES HRBP AIRBUS HELICOPTERS (MIS À JOUR JUIN 2026) ---
const hrbpMapping = {
    // === GROUPE ED : PRODUCTION, SUPPLY CHAIN, FALS & PROTOTYPES (100% CONFORME SAP) ===
    "FAL & Prototypes (Général)": { name: "Francis OTTAVIANI", siglum: "EHFM", group: "ED" },
    "FAL H160 / H175 & Production Flow": { name: "Francis OTTAVIANI", siglum: "EHFM", group: "ED" },
    "EC175 Final Assembly Line": { name: "Francis OTTAVIANI", siglum: "EHFM", group: "ED" },
    "Prototype Production & Flight Line": { name: "Francis OTTAVIANI", siglum: "EHFM", group: "ED" },
    
    "FAL H125 H130 & Dauphin": { name: "Julie VIDAL", siglum: "EHFM", group: "ED" },
    "Global Supply Chain & Operations": { name: "Julie VIDAL", siglum: "EHFM", group: "ED" },
    "Assembly Line Light H/C": { name: "Julie VIDAL", siglum: "EHFM", group: "ED" },
    
    "Procurement & Strategic Sourcing (EDP)": { name: "Astrid ECUYER", siglum: "EHFM", group: "ED" },
    "Strategic Procurement & Buying Perf": { name: "Astrid ECUYER", siglum: "EHFM", group: "ED" },
    "Logistics Engineering & Operations": { name: "Astrid ECUYER", siglum: "EHFM", group: "ED" },
    
    "Center of Excellence Dynamics & Assy (EDC)": { name: "Fabien ALBERTI", siglum: "EHD", group: "ED" },
    
    "Manufacturing Gears & Special Treatments": { name: "Arnaud GOURMAND", siglum: "EHFM", group: "ED" },
    "Rotors & Carters Production Teams": { name: "Arnaud GOURMAND", siglum: "EHFM", group: "ED" },
    "Blue Collar Competencies & Skills": { name: "Arnaud GOURMAND", siglum: "EHFM", group: "ED" },
    
    "Industrial Means & Facilities (EDCO)": { name: "Caroline FERRI", siglum: "EHFM", group: "ED" },
    "Composite & Sheet Metal Manufacturing": { name: "Caroline FERRI", siglum: "EHFM", group: "ED" },
    "E-Systems Workshop & Customer Services": { name: "Caroline FERRI", siglum: "EHFM", group: "ED" },
    
    "Industrialization Business Methods (EDISP)": { name: "Celine DI FILIPPO", siglum: "EHFM", group: "ED" },
    "Industry Production Flows & Strategy": { name: "Celine DI FILIPPO", siglum: "EHFM", group: "ED" },
    "Final Painting & Interiors Operations": { name: "Celine DI FILIPPO", siglum: "EHFM", group: "ED" },
    
    "QASS & Conformity Plant Meca / Rotor (EDQMD)": { name: "Aurelie NICOLAS", siglum: "EHFM", group: "ED" },
    "Inspection & Conformity Electrical / Quality": { name: "Aurelie NICOLAS", siglum: "EHFM", group: "ED" },
    
    "Airplane Door Inspection & Confi (EDQDD)": { name: "Mathilde CAMELIERE", siglum: "EHD", group: "ED" },
    "Aviation Safety & Quality Industry / structure": { name: "Mathilde CAMELIERE", siglum: "EHD", group: "ED" },

    "System Test & Ground Tests (Military/Civil)": { name: "Muriel LINGUINOU", siglum: "EHFM", group: "ED" },
    "FAL Production Super Puma & Flight Line": { name: "Muriel LINGUINOU", siglum: "EHFM", group: "ED" },
    "Assembly Line 2 & 3 Super Puma": { name: "Muriel LINGUINOU", siglum: "EHFM", group: "ED" },

    "AET SP & Manufacturing Config Management": { name: "Frederique MANARIN", siglum: "EHFM", group: "ED" },
    "Engineering Light H/C & Falcon Line H125/130": { name: "Frederique MANARIN", siglum: "EHFM", group: "ED" },
    "Tiger Prep, Support & QLS Assembly lines": { name: "Frederique MANARIN", siglum: "EHFM", group: "ED" },

    "Bench Maintenance & Component Assembly": { name: "Sacha GUILLEMOT", siglum: "EHFM", group: "ED" },
    "Dynamic components & Mechanical Repair (DCR)": { name: "Sacha GUILLEMOT", siglum: "EHFM", group: "ED" },
    "A350 Structure Assembly & Industrialization": { name: "Sacha GUILLEMOT", siglum: "EHFM", group: "ED" },

    // === GROUPE ET : ENGINEERING, TESTING & RETEX ===
    "Engineering & Integration (ETI)": { name: "Pauline DAOUD", siglum: "EHFM", group: "ET" },
    "Engineering Enablers & Tech Methods (ETE)": { name: "Laura PETIOT", siglum: "EHFM", group: "ET" },
    "Chief Engineering / Airframe & Integration": { name: "Emmanuelle MARTELLI", siglum: "EHFM", group: "ET" },
    "Product Integrity & Airworthiness (ETJ)": { name: "Sabine DE GRANCEY", siglum: "EHFM", group: "ET" },
    "Testing, Simulation & Flight Test (ETX)": { name: "Sarah LEVY", siglum: "EHFM", group: "ET" },
    "Avionics Systems Architecture (ETY)": { name: "Pauline LENOUVEL", siglum: "EHFM", group: "ET" },
    "Vehicle Systems & Power Plant": { name: "Caroline ILLES", siglum: "EHFM", group: "ET" },
    "Integration & Standardization (ETISA)": { name: "Lucie MAIFRET", siglum: "EHFM", group: "ET" },

    // === GROUPE ES : SUPPORT, SERVICES, MRO & FLEET ===
    "Aircraft Technical Services (ESA)": { name: "Laura GOMEZ", siglum: "EHFM", group: "ES" },
    "Material Support & Logistics (MS&L)": { name: "Laura TAUPIN", siglum: "EHFM", group: "ES" },
    "Customer Material Management (CMM / ESLC)": { name: "Nyveen NYAZI", siglum: "EHFM", group: "ES" },
    "Maintenance Programs & Manuals (ESADM)": { name: "Virginie GRIMALDI", siglum: "EHFM", group: "ES" },
    "Aircraft MRO & Fleet Management (ESF)": { name: "Guillaume DOMINGUES", siglum: "EHFM", group: "ES" },
    "Training Centers & ATO Operations (EST)": { name: "Clemence THIEBAUT", siglum: "EHFM", group: "ES" },

    // === GROUPE CORPORATE : FONCTIONS SUPPORT, MANAGEMENT, SAFETY & REGULATION ===
    "Aviation Safety & Quality Operations (EQ)": { name: "Morgane RAYNAUD", siglum: "EHFM", group: "Corporate" },
    "Digital Transformation, IT & Cyber (EI)": { name: "Pauline BARUGOLA", siglum: "EHFM", group: "Corporate" },
    "Finance, Controlling & Treasury (EF / FT)": { name: "Bettina TABARY", siglum: "EHFM", group: "Corporate" },
    "Human Resources Operations & C&B (EH)": { name: "Elodie AUGUSTIN", siglum: "HZ", group: "Corporate" },
    "HR Site Marignane & Quality AH (EHFM)": { name: "Geraldine WEISS", siglum: "HZE", group: "Corporate" },
    "Strategy, Legal, Comms & Export Control": { name: "Thomas ASTIER", siglum: "EHF", group: "Corporate" },
    "Global Business & Commercial Policy (EB)": { name: "Marc SALADINO", siglum: "EHFM", group: "Corporate" },
    "Market Operations & Marketing (EBD)": { name: "Jean Baptiste BILLIARD", siglum: "EHB", group: "Corporate" },
    "Ecosystem & Operational Site Management": { name: "Celine FRAIZ", siglum: "EHFM", group: "ED" },

    // === COHORTES / PROGRAMMES SPÉCIFIQUES ===
    "Programmes: NH90 (EXN)": { name: "Emily GIBBS", siglum: "EHFM", group: "Corporate" },
    "Programmes: Tiger & VSR700 / H160 / H175": { name: "Melissa OGER", siglum: "EHFM", group: "Corporate" },
    "Programmes: H160 Product & Customization": { name: "Marine MUNDSCHAU", siglum: "EHD", group: "ED" }
};

// --- COORDONNÉES DE CONNEXION SUPABASE ---
const SUPABASE_URL = "https://bbcusoprruidcqceasmv.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_B08mZpQ_2KDDmBRRefgvDg_rNqY6agt";

let socialData = [];
let idToDelete = null;

// --- DATE DU JOUR INTERFACE ---
function displayCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('fr-FR', options);
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        dateElement.innerText = today.charAt(0).toUpperCase() + today.slice(1);
    }
}

// --- INITIALISATION DES SECTEURS DANS LE MENU DÉROULANT ---
function initializeSectors() {
    const sectorSelect = document.getElementById('sector');
    if (!sectorSelect) return;
    
    sectorSelect.innerHTML = '<option value="" disabled selected>Choisir un secteur officiel...</option>';
    Object.keys(hrbpMapping).forEach(sector => {
        const option = document.createElement('option');
        option.value = sector;
        option.textContent = sector;
        sectorSelect.appendChild(option);
    });
    
    sectorSelect.addEventListener('change', function() {
        const selectedSector = this.value;
        const hrbpInfo = hrbpMapping[selectedSector];
        const hrbpInput = document.getElementById('hrbpName');
        if (hrbpInput && hrbpInfo) {
            hrbpInput.value = `${hrbpInfo.name} (${hrbpInfo.siglum})`;
        }
    });
}

// --- RÉCUPÉRATION DES DONNÉES EN LIGNE (FILTRÉES EN LOCAL POUR LA SEMAINE EN COURS) ---
async function fetchDataFromSupabase() {
    try {
        // 1. On récupère TOUTES les données de Supabase en sécurité
        const response = await fetch(`${SUPABASE_URL}/rest/v1/remontees?select=*`, {
            method: "GET",
            headers: {
                "apikey": SUPABASE_ANON_KEY,
                "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
            }
        });

        if (response.ok) {
            const allData = await response.json();

            // 2. Calcul du lundi de la semaine en cours à 00:00:00
            const now = new Date();
            const day = now.getDay();
            const diff = now.getDate() - day + (day === 0 ? -6 : 1);
            const startOfWeek = new Date(now.setDate(diff));
            startOfWeek.setHours(0, 0, 0, 0);

            // 3. On filtre en JavaScript pour ne garder QUE la semaine en cours
            socialData = allData.filter(item => {
                if (!item.date) return false;
                // On extrait la partie "YYYY-MM-DD" avant la barre "|"
                const datePart = item.date.split('|')[0].trim(); 
                const itemDate = new Date(datePart);
                
                // On garde le signal si sa date est supérieure ou égale au lundi matin 00:00
                return itemDate >= startOfWeek;
            });

            // 4. On met à jour l'écran
            renderDashboard();
        }
    } catch (error) {
        console.error("Erreur de synchronisation : ", error);
    }
}

// --- CALCUL DES MOYENNES GLOBALES ---
function calculateGlobalScores() {
    const scores = { ED: { total: 0, count: 0 }, ET: { total: 0, count: 0 }, ES: { total: 0, count: 0 }, Corporate: { total: 0, count: 0 } };
    let siteTotal = 0, siteCount = 0;

    socialData.forEach(item => {
        const mapping = hrbpMapping[item.sector];
        if (mapping) {
            const ratingNum = parseFloat(item.rating);
            scores[mapping.group].total += ratingNum;
            scores[mapping.group].count++;
            siteTotal += ratingNum;
            siteCount++;
        }
    });

    Object.keys(scores).forEach(group => {
        const element = document.getElementById(`score-${group}`);
        if (element) {
            if (scores[group].count > 0) {
                const avg = (scores[group].total / scores[group].count).toFixed(1);
                element.innerText = `${avg} / 4`;
                applyScoreStyle(element, avg);
            } else {
                element.innerText = "--";
                element.style.color = "var(--text-secondary)";
            }
        }
    });

    const siteElement = document.getElementById('score-Site');
    if (siteElement) {
        if (siteCount > 0) {
            const siteAvg = (siteTotal / siteCount).toFixed(1);
            siteElement.innerText = `${siteAvg} / 4`;
            applyScoreStyle(siteElement, siteAvg);
        } else {
            siteElement.innerText = "N/A";
            siteElement.style.color = "var(--text-secondary)";
        }
    }
}

function applyScoreStyle(element, score) {
    if (score >= 3.3) element.style.color = "var(--color-positive)";
    else if (score >= 2.5) element.style.color = "var(--color-neutral)";
    else if (score >= 1.8) element.style.color = "var(--color-warning)";
    else element.style.color = "var(--color-critical)";
}

// --- CALCUL DYNAMIQUE DE LA DATE ---
// --- CALCUL DYNAMIQUE DE LA DATE ---
function getFriendlyDate(savedDateString) {
    if (!savedDateString || !savedDateString.includes('|')) return savedDateString;
    
    try {
        // Séparation propre et nettoyage des espaces (trim)
        let [savedDate, savedTime] = savedDateString.split('|');
        savedDate = savedDate.trim();
        savedTime = savedTime.trim();
        
        // Fonction utilitaire pour formater en YYYY-MM-DD en heure LOCALE
        const getLocalYYYYMMDD = (dateObj) => {
            const y = dateObj.getFullYear();
            const m = String(dateObj.getMonth() + 1).padStart(2, '0');
            const d = String(dateObj.getDate()).padStart(2, '0');
            return `${y}-${m}-${d}`;
        };

        const today = new Date();
        const todayStr = getLocalYYYYMMDD(today);
        
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);
        const yesterdayStr = getLocalYYYYMMDD(yesterday);

        if (savedDate === todayStr) {
            return `Aujourd'hui à ${savedTime}`;
        } else if (savedDate === yesterdayStr) {
            return `Hier à ${savedTime}`;
        } else {
            const dateParts = savedDate.split('-');
            if (dateParts.length === 3) {
                const [year, month, day] = dateParts;
                return `Le ${day}/${month} à ${savedTime}`;
            }
            return `${savedDate} à ${savedTime}`;
        }
    } catch (e) {
        return savedDateString;
    }
}

// --- RENDU VISUEL SUR L'ÉCRAN PRINCIPAL ---
// --- RENDU VISUEL SUR L'ÉCRAN PRINCIPAL ---
function renderDashboard() {
    const listContainer = document.getElementById('subjectsList');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    if (socialData.length === 0) {
        listContainer.innerHTML = `
            <div class="empty-state">
                <p style="font-size: 1.05rem; font-weight: 600; color: #002244; margin-bottom: 0.25rem;">Aucun signal consigné</p>
                <p style="font-size: 0.85rem; color: #64748B;">Le baromètre cloud en ligne est vide pour le moment.</p>
            </div>`;
        calculateGlobalScores();
        return;
    }

    const sortedData = [...socialData].sort((a, b) => b.id - a.id);

    sortedData.forEach(item => {
        const config = getStatusConfig(item.rating);
        const friendlyDate = getFriendlyDate(item.date);
        
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.innerHTML = `
            <div class="card-indicator bg-${config.class}"></div>
            <div class="status-badge-zone status-${config.class}">
                <div class="smiley">${config.smiley}</div>
                <div class="score-display">Note ${item.rating}/4</div>
            </div>
            <div class="card-content">
                <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
                    <span class="sector-tag">${item.sector}</span>
                    <span class="hrbp-tag" style="font-size: 0.7rem; font-weight: 500; background: #F1F5F9; padding: 0.3rem 0.6rem; border-radius: 50px; color: #334155;">HRBP : ${item.hrbp}</span>
                </div>
                <h3 class="subject-title" style="margin-top: 0.25rem;">${item.title}</h3>
                <p class="subject-description">${item.description}</p>
            </div>
            <div class="card-right">
                <button type="button" class="btn-delete" data-id="${item.id}">✕</button>
                <span class="timestamp">${friendlyDate}</span>
            </div>
        `;
        listContainer.appendChild(card);
    });

    // L'ÉCOUTEUR DE CLIC EST ICI (En dehors de la boucle forEach)
    listContainer.onclick = function(e) {
        const deleteButton = e.target.closest('.btn-delete');
        if (deleteButton) {
            e.preventDefault();
            e.stopPropagation();
            const itemId = deleteButton.getAttribute('data-id');
            openAirbusModal(itemId); // Appelle ta jolie modale !
        }
    };

    calculateGlobalScores();
}

function getStatusConfig(rating) {
    switch(rating) {
        case '1': return { smiley: '🛑', class: 'critical' };
        case '2': return { smiley: '⚠️', class: 'warning' };
        case '3': return { smiley: '👍', class: 'neutral' };
        case '4': return { smiley: '✨', class: 'positive' };
        default:  return { smiley: '😐', class: 'neutral' };
    }
}

// --- PILOTAGE DE LA MODAL DE DIALOGUE PERSONNALISÉE AIRBUS ---
function openAirbusModal(id) {
    idToDelete = id;
    const modal = document.getElementById('airbusConfirmModal');
    if (modal) modal.classList.add('active');
}

function closeAirbusModal() {
    idToDelete = null;
    const modal = document.getElementById('airbusConfirmModal');
    if (modal) modal.classList.remove('active');
}

// --- ENVOI DE DONNÉES ---
const formElement = document.getElementById('barometreForm');
if (formElement) {
    formElement.addEventListener('submit', async function(e) {
        e.preventDefault();
        const sector = document.getElementById('sector').value;
        const hrbp = document.getElementById('hrbpName').value;
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const rating = document.getElementById('rating').value;
        
const now = new Date();
const timeOptions = { hour: '2-digit', minute: '2-digit' };
const formattedTime = now.toLocaleTimeString('fr-FR', timeOptions);

// Génération de la date au format local YYYY-MM-DD
const y = now.getFullYear();
const m = String(now.getMonth() + 1).padStart(2, '0');
const d = String(now.getDate()).padStart(2, '0');
const rawDate = `${y}-${m}-${d}`;

        const newPayload = {
            sector, 
            hrbp, 
            title, 
            description, 
            rating,
            date: `${rawDate} | ${formattedTime}`
        };

        try {
            const response = await fetch(`${SUPABASE_URL}/rest/v1/remontees`, {
                method: "POST",
                headers: {
                    "apikey": SUPABASE_ANON_KEY,
                    "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
                    "Content-Type": "application/json",
                    "Prefer": "return=representation"
                },
                body: JSON.stringify(newPayload)
            });

            if (response.ok) {
                formElement.reset();
                fetchDataFromSupabase();
            }
        } catch (error) {
            alert("Erreur réseau Supabase : " + error.message);
        }
    });
}

// --- ARCHIVAGE LOGIQUE SUR SUPABASE (SANS EFFACER) ---
async function executeDeleteInSupabase(id) {
    try {
        // On utilise PATCH pour modifier uniquement la colonne is_archived
        const response = await fetch(`${SUPABASE_URL}/rest/v1/remontees?id=eq.${id}`, {
            method: "PATCH",
            headers: {
                "apikey": SUPABASE_ANON_KEY,
                "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ is_archived: true }) // On bascule l'indicateur à true
        });
        
        if (response.ok || response.status === 204) {
            await fetchDataFromSupabase(); // Rafraîchit l'écran immédiatement
        } else {
            console.error("Échec de l'archivage Supabase, statut:", response.status);
        }
    } catch (error) {
        console.error("Erreur réseau lors de l'archivage :", error);
    }
}
// --- EXPORTATION DES ARCHIVES ---
// --- EXPORTATION DE L'INTÉGRALITÉ DES ARCHIVES (TOUTES LES SEMAINES) ---
window.exportArchives = async function() {
    // 1. Feedback visuel sur le bouton pendant le chargement
    const archiveBtn = document.querySelector("button[onclick='exportArchives()']");
    const originalText = archiveBtn ? archiveBtn.innerHTML : "📁 Accéder aux Archives (.json)";
    
    if (archiveBtn) {
        archiveBtn.innerHTML = "⏳ Téléchargement de tout l'historique...";
        archiveBtn.style.opacity = "0.7";
        archiveBtn.style.pointerEvents = "none";
    }

    try {
        // 2. Requête spécifique pour récupérer TOUTES les lignes sans filtre de date
        const response = await fetch(`${SUPABASE_URL}/rest/v1/remontees?select=*`, {
            method: "GET",
            headers: {
                "apikey": SUPABASE_ANON_KEY,
                "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
            }
        });

        if (!response.ok) throw new Error("Impossible de récupérer les archives globales.");

        const allData = await response.json();

        if (allData.length === 0) { 
            alert("Aucune donnée globale en ligne à exporter."); 
            return; 
        }

        // 3. Génération du fichier JSON complet
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(allData, null, 4));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        
        // Optionnel : On ajoute la date du jour dans le nom du fichier pour s'y retrouver
        const todayFile = new Date().toISOString().split('T')[0];
        downloadAnchor.setAttribute("download", `Barometre_Airbus_Global_Backup_${todayFile}.json`);
        
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();

    } catch (error) {
        alert("Erreur lors de l'exportation globale : " + error.message);
    } finally {
        // 4. Restauration du bouton après l'export
        if (archiveBtn) {
            archiveBtn.innerHTML = originalText;
            archiveBtn.style.opacity = "1";
            archiveBtn.style.pointerEvents = "auto";
        }
    }
};

// --- CHARGEMENT ET BRANCHEMENT DES ÉVÉNEMENTS COMPOSANTS ---
// --- CHARGEMENT ET BRANCHEMENT DES ÉVÉNEMENTS COMPOSANTS ---
function initAll() {
    displayCurrentDate();
    initializeSectors();
    fetchDataFromSupabase();
    
    const btnCancel = document.getElementById('btnCancelDelete');
    const btnConfirm = document.getElementById('btnConfirmDelete');
    
    if (btnCancel) btnCancel.onclick = closeAirbusModal;
    
    if (btnConfirm) {
        btnConfirm.onclick = async function() {
            if (!idToDelete) return;

            // 1. Feedback visuel (pour montrer que ça charge)
            const originalText = this.innerText;
            this.innerText = "Suppression en cours...";
            this.style.opacity = "0.7";
            this.disabled = true;

            try {
                // 2. Envoi de la requête de suppression (nettoyée)
                const response = await fetch(`${SUPABASE_URL}/rest/v1/remontees?id=eq.${idToDelete}`, {
                    method: "DELETE",
                    headers: {
                        "apikey": SUPABASE_ANON_KEY,
                        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
                        // Retrait de "Content-Type": pas de body sur une méthode DELETE
                    }
                });
                
                // 3. Vérification de la réponse (200 OK ou 204 No Content)
                if (response.ok || response.status === 204) {
                    await fetchDataFromSupabase(); // Rafraîchit instantanément le tableau de bord
                    closeAirbusModal();
                } else {
                    // Si ça bloque, le serveur nous dira enfin pourquoi
                    const errorText = await response.text();
                    alert(`Supabase a refusé la suppression (Erreur ${response.status}). Détails : ${errorText}`);
                }
            } catch (error) {
                alert("Erreur réseau : " + error.message);
            } finally {
                // 4. Restauration de l'état du bouton
                this.innerText = originalText;
                this.style.opacity = "1";
                this.disabled = false;
                closeAirbusModal();
            }
        };
    }
}

if (document.readyState === "complete" || document.readyState === "interactive") {
    initAll();
} else {
    window.addEventListener('DOMContentLoaded', initAll);
}

setInterval(fetchDataFromSupabase, 30000);

// --- EXTRACTION ET GÉNÉRATION DU RAPPORT RH DE LA SEMAINE ---
// --- EXTRACTION ET GÉNÉRATION DU RAPPORT RH DE LA SEMAINE ---
// --- EXTRACTION ET GÉNÉRATION DU RAPPORT RH DE LA SEMAINE ---
window.genererRapportSemaine = function() {
    if (socialData.length === 0) {
        alert("Aucune donnée disponible cette semaine pour générer un rapport.");
        return;
    }

    // 1. Calculs des indicateurs de volume
    const totalSignaux = socialData.length;
    const critiques = socialData.filter(s => s.rating === '1');
    const tensions = socialData.filter(s => s.rating === '2');
    const stables = socialData.filter(s => s.rating === '3');
    const positifs = socialData.filter(s => s.rating === '4');

    // 2. CALCUL DE LA NOTE GLOBALE DU SITE
    const sommeNotes = socialData.reduce((acc, s) => acc + parseFloat(s.rating), 0);
    const noteGlobale = (sommeNotes / totalSignaux).toFixed(1);

    // Détermination de la couleur du score du site
    let couleurScore = "#10B981"; // Vert par défaut (> 3.0)
    if (noteGlobale <= 2.0) {
        couleurScore = "#EF4444"; // Rouge si critique (<= 2.0)
    } else if (noteGlobale <= 3.0) {
        couleurScore = "#F59E0B"; // Orange si Warning (2.1 à 3.0)
    }

    // 3. Génération automatique de l'analyse terrain en 2-3 lignes
    let ratioAlertes = ((critiques.length + tensions.length) / totalSignaux * 100).toFixed(0);
    let alerteTexte = critiques.length > 0 ? "avec des points de blocage qui nécessitent une attention particulière" : "avec des tensions mineures à surveiller";
    
    let analyseTerrain = `Le climat social de cette semaine affiche une note globale de ${noteGlobale}/4. Il est marqué par un taux d'alerte de ${ratioAlertes}% sur l'ensemble des secteurs cartographiés, ${alerteTexte}. 
        Une vigilance est recommandée sur les secteurs en alerte rouge afin de prévenir une dégradation du climat social.`;

    // 4. Construction du contenu du rapport HTML
    let structureRapport = `
        <html>
        <head>
            <title>Synthèse Hebdomadaire - Baromètre Social Airbus</title>
            <style>
                body { font-family: 'Inter', sans-serif; color: #0F172A; padding: 40px; background: #FFF; line-height: 1.5; }
                .header { border-bottom: 3px solid #002244; padding-bottom: 20px; margin-bottom: 30px; }
                h1 { color: #002244; margin: 0; font-size: 24px; }
                .meta { color: #475569; font-size: 14px; margin-top: 5px; }
                .kpi-container { display: flex; gap: 20px; margin-bottom: 30px; }
                .kpi-card { flex: 1; padding: 15px; border-radius: 8px; border: 1px solid #E2E8F0; text-align: center; }
                .kpi-title { font-size: 11px; text-transform: uppercase; font-weight: bold; color: #64748B; letter-spacing: 0.05em; }
                .kpi-value { font-size: 22px; font-weight: bold; margin-top: 5px; }
                .section { margin-bottom: 35px; }
                .section-title { font-size: 15px; font-weight: bold; color: #002244; border-left: 4px solid #002244; padding-left: 10px; margin-bottom: 15px; text-transform: uppercase; }
                .analyse-box { background: #F8FAFC; border: 1px dashed #CBD5E1; padding: 20px; border-radius: 12px; font-size: 14px; color: #334155; font-style: italic; }
                .signal-item { padding: 12px; border-bottom: 1px solid #F1F5F9; font-size: 14px; }
                .badge { display: inline-block; padding: 2px 8px; border-radius: 20px; font-size: 11px; font-weight: bold; }
                .badge-1 { background: #FEF2F2; color: #EF4444; }
                .badge-2 { background: #FFFBEB; color: #D97706; }
                .badge-4 { background: #ECFDF5; color: #10B981; }
                @media print { .no-print { display: none; } }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>Baromètre Social - Synthèse Hebdomadaire</h1>
                <div class="meta">Généré le ${new Date().toLocaleDateString('fr-FR')} • Espace Digital HRBP</div>
            </div>

            <div class="kpi-container">
                <div class="kpi-card" style="border-top: 4px solid ${couleurScore};">
                    <div class="kpi-title">Moyenne Globale Site</div>
                    <div class="kpi-value" style="color: ${couleurScore}; font-size: 28px;">${noteGlobale} / 4</div>
                </div>
                <div class="kpi-card"><div class="kpi-title">Total Implémentations</div><div class="kpi-value">${totalSignaux}</div></div>
                <div class="kpi-card" style="border-color: #EF4444;"><div class="kpi-title" style="color: #EF4444;">Alertes Critiques</div><div class="kpi-value" style="color: #EF4444;">${critiques.length}</div></div>
                <div class="kpi-card" style="border-color: #10B981;"><div class="kpi-title" style="color: #10B981;">Points Forts</div><div class="kpi-value" style="color: #10B981;">${positifs.length}</div></div>
            </div>

            <div class="section">
                <div class="section-title" style="border-color: #FFB81C;">🔍 Analyse Terrain HRBP</div>
                <div class="analyse-box">
                    "${analyseTerrain}"
                </div>
            </div>

            <div class="section">
                <div class="section-title" style="border-color: #EF4444;">🛑 Les Sujets Chauds / Tensions (Top -)</div>
                ${critiques.length + tensions.length === 0 ? '<p style="font-size:14px; color:#64748B;">Aucune alerte critique ou tension signalée cette semaine.</p>' : ''}
                ${[...critiques, ...tensions].map(s => `
                    <div class="signal-item">
                        <span class="badge badge-${s.rating}">Niveau ${s.rating}</span> <strong>[${s.sector}]</strong> ${s.title} - <span style="color:#475569;">${s.description}</span>
                    </div>
                `).join('')}
            </div>

            <div class="section">
                <div class="section-title" style="border-color: #10B981;">✨ Les Coups de Projecteur (Top +)</div>
                ${positifs.length === 0 ? '<p style="font-size:14px; color:#64748B;">Aucun point fort spécifique remonté cette semaine.</p>' : ''}
                ${positifs.map(s => `
                    <div class="signal-item">
                        <span class="badge badge-4">Succès</span> <strong>[${s.sector}]</strong> ${s.title} - <span style="color:#475569;">${s.description}</span>
                    </div>
                `).join('')}
            </div>

            <div class="no-print" style="margin-top: 40px; text-align: center;">
                <button onclick="window.print()" style="background:#002244; color:white; padding: 10px 20px; border:none; border-radius:6px; cursor:pointer; font-weight:bold; font-size:14px;">🖨️ Imprimer ou Sauvegarder en PDF</button>
            </div>
        </body>
        </html>
    `;

    // 5. Ouverture du rapport dans un nouvel onglet
    const fenetreRapport = window.open('', '_blank');
    fenetreRapport.document.write(structureRapport);
    fenetreRapport.document.close();
};