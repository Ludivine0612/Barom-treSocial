// --- BASE DE CONNAISSANCES DES HRBP AIRBUS HELICOPTERS (VERSION MULTI-SITE INTERNATIONALE 2026) ---
const hrbpMapping = {
    // === MARIGNANE : CLUSTER PRODUCTION & SUPPLY CHAIN (ED) ===
    "GLOBAL SUPPLY CHAIN": { name: "Julie VIDAL", siglum: "ED", group: "ED", site: "Marignane" },
    "AIRPLANE DOOR CUSTOMER SERVICE": { name: "Sacha GUILLEMOT", siglum: "EDAC", group: "ED", site: "Marignane" },
    "AIRFRAME": { name: "Caroline FERRI", siglum: "EDCA", group: "ED", site: "Marignane" },
    "PERFORMANCE & IMPROVEMENT": { name: "Céline DI FILIPPO", siglum: "EDCI", group: "ED", site: "Marignane" },
    "FACILITIES AND SERVICES": { name: "Caroline FERRI", siglum: "EDCO", group: "ED", site: "Marignane" },
    "SYSTEMS & EQUIPMENTS": { name: "Caroline FERRI", siglum: "EDCS", group: "ED", site: "Marignane" },
    "CUSTOMIZATION CENTER": { name: "Céline DI FILIPPO", siglum: "EDCZ", group: "ED", site: "Marignane" },
    "PROD MCA H125/H130/H160/H175": { name: "Sacha GUILLEMOT", siglum: "EDDMB", group: "ED", site: "Marignane" },
    "ECOSYSTEM SITE MARIGNANE": { name: "Céline FRAIZ", siglum: "EDE", group: "ED", site: "Marignane" },
    "CENTRAL OPERATIONS": { name: "Céline DI FILIPPO", siglum: "EDI", group: "ED", site: "Marignane" },
    "STRATEGIC PROCUREMENT": { name: "Astrid ECUYER", siglum: "EDP", group: "ED", site: "Marignane" },
    "AVIATION SAFETY & QUALITY FALs": { name: "Frédérique MANARIN", siglum: "EDQF", group: "ED", site: "Marignane" },
    "INDUSTRIAL COMPLIANCE & PERFORMANCE": { name: "Aurélie NICOLAS", siglum: "EDQI", group: "ED", site: "Marignane" },
    "AVIATION SAFETY & QUALITY SITE MAR": { name: "Aurélie NICOLAS", siglum: "EDQM", group: "ED", site: "Marignane" },
    "PROCUREMENT OPERATIONS": { name: "Astrid ECUYER", siglum: "EDS", group: "ED", site: "Marignane" },
    "DYNAMIC CENTER ASSY PARTS & REPAIRS - ASSEMBLY": { name: "Sacha GUILLEMOT", siglum: "EDTA", group: "ED", site: "Marignane" },
    "DYNAMIC SERIAL MANUFACTURING": { name: "Arnaud GOURMAND", siglum: "EDTE", group: "ED", site: "Marignane" },
    "AH HUNGARY / DUMAG": { name: "Arnaud GOURMAND", siglum: "EDTH", group: "ED", site: "Marignane" },
    "TRANSFORMATION": { name: "Arnaud GOURMAND", siglum: "EDTT", group: "ED", site: "Marignane" },
    "MANUFACTURING ENGINEERING PRODUCTS": { name: "Frédérique MANARIN", siglum: "EDXE", group: "ED", site: "Marignane" },
    "FAL & PROTOTYPES (ANNEIX / BRILL)": { name: "Lucie MAIFRET", siglum: "EDXG", group: "ED", site: "Marignane" },
    "FAL H125 H130 & DAUPHIN": { name: "Julie VIDAL", siglum: "EDXL", group: "ED", site: "Marignane" },
    "H175 FINAL ASSEMBLY LINE": { name: "Francis OTTAVIANI", siglum: "EDXM", group: "ED", site: "Marignane" },
    "H160 PRODUCT": { name: "Céline FRAIZ", siglum: "EDXN", group: "ED", site: "Marignane" },
    "PROTOTYPE": { name: "Francis OTTAVIANI", siglum: "EDXP", group: "ED", site: "Marignane" },
    "FAL PRODUCTION SUPER PUMA": { name: "Muriel LINGUINOU", siglum: "EDXS", group: "ED", site: "Marignane" },
    "SYSTEM TEST": { name: "Muriel LINGUINOU", siglum: "EDXT", group: "ED", site: "Marignane" },
    "PRODUCT IMPROVEMENT MAR": { name: "Francis OTTAVIANI", siglum: "EDXY", group: "ED", site: "Marignane" },
    "BUILDING & CONSTRUCTION FRANCE": { name: "Céline FRAIZ", siglum: "HMFB", group: "ED", site: "Marignane" },
    "PROCUREMENT GOVERNANCE & STRATEGY": { name: "Astrid ECUYER", siglum: "PY", group: "ED", site: "Marignane" },

    // === MARIGNANE : CLUSTER SUPPORT & SERVICES (ES) ===
    "TECHNICAL DATA PRODUCT POLICY & MGT": { name: "Virginie GRIMALDI", siglum: "ESAC", group: "ES", site: "Marignane" },
    "TECHDATA & SERVICE BULLETINS": { name: "Virginie GRIMALDI", siglum: "ESAD", group: "ES", site: "Marignane" },
    "AIRCRAFT MRO GERMANY": { name: "Virginie GRIMALDI", siglum: "ESAM", group: "ES", site: "Marignane" },
    "AIRCRAFT MAINTENANCE & DATA SERVICES": { name: "Laura GOMEZ", siglum: "ESAO", group: "ES", site: "Marignane" },
    "TECHNICAL SUPPORT": { name: "Laura GOMEZ", siglum: "ESAT", group: "ES", site: "Marignane" },
    "AIRCRAFT MRO FRANCE": { name: "Guillaume DOMINGUES", siglum: "ESFA", group: "ES", site: "Marignane" },
    "FLEET MANAGEMENT & LEGACY FLEET": { name: "Guillaume DOMINGUES", siglum: "ESFD", group: "ES", site: "Marignane" },
    "NH90 FLEET MANAGEMENT": { name: "Guillaume DOMINGUES", siglum: "ESFN", group: "ES", site: "Marignane" },
    "TIGER FLEET MANAGEMENT": { name: "Guillaume DOMINGUES", siglum: "ESFT", group: "ES", site: "Marignane" },
    "CUSTOMER MATERIAL MANAGEMENT": { name: "Nyveen NYAZI", siglum: "ESLC", group: "ES", site: "Marignane" },
    "Operations & CSM for Saudia Arabia": { name: "Nyveen NYAZI", siglum: "ESLD", group: "ES", site: "Marignane" },
    "GLOBAL FORECAST & SUPPLY EQ&AF&BU": { name: "Laura TAUPIN", siglum: "ESLE", group: "ES", site: "Marignane" },
    "GLOBAL LOGISTICS": { name: "Nyveen NYAZI", siglum: "ESLL", group: "ES", site: "Marignane" },
    "MAINTENANCE REPAIR & OVERHAUL": { name: "Nyveen NYAZI", siglum: "ESLT", group: "ES", site: "Marignane" },
    "MS&L METHODS & TOOLS": { name: "Nyveen NYAZI", siglum: "ESLZ", group: "ES", site: "Marignane" },
    "AIRCRAFT TECH SERVICES QUALITY WW": { name: "Guillaume DOMINGUES", siglum: "ESQA", group: "ES", site: "Marignane" },
    "AIRCREW PRODUCTS & ATO & FLIGHT OPS": { name: "Clémence THIEBAUT", siglum: "ESTA", group: "ES", site: "Marignane" },
    "WW STRATEGY&BUSINESS&BUSINESS PERFO": { name: "Clémence THIEBAUT", siglum: "ESTB", group: "ES", site: "Marignane" },
    "CIVIL AND MILITARY OFFERS": { name: "Clémence THIEBAUT", siglum: "ESTC", group: "ES", site: "Marignane" },
    "TRAINING OPERATIONS & PROGRAMS": { name: "Clémence THIEBAUT", siglum: "ESTD", group: "ES", site: "Marignane" },
    "TRAINING ENG & EDUCATION & READINESS": { name: "Clémence THIEBAUT", siglum: "ESTE", group: "ES", site: "Marignane" },
    "SIMULATION AND SIMPACK DEVELOPMENT": { name: "Clémence THIEBAUT", siglum: "ESTS", group: "ES", site: "Marignane" },
    "MAINTENANCE TRAINING": { name: "Clémence THIEBAUT", siglum: "ESTT", group: "ES", site: "Marignane" },
    "LOGISTICS SUPPORT GERMANY": { name: "Laura GOMEZ", siglum: "ESVC", group: "ES", site: "Marignane" },
    "EXT SUPPLY AIRFRAME&TOOLS&GSE&DYN": { name: "Laura GOMEZ", siglum: "ESVS", group: "ES", site: "Marignane" },
    "GOVERNANCE AND TRANSFORMATION": { name: "Laura GOMEZ", siglum: "ESVT", group: "ES", site: "Marignane" },
    "BUSINESS PERFORMANCE": { name: "Laura TAUPIN", siglum: "ESXB", group: "ES", site: "Marignane" },
    "IN SERVICE CONTRACTS": { name: "Laura TAUPIN", siglum: "ESXC", group: "ES", site: "Marignane" },
    "PSO GOVERNMENTAL": { name: "Laura TAUPIN", siglum: "ESXG", group: "ES", site: "Marignane" },
    "PROGR SUPPORT LIGHT HELICOPTERS": { name: "Laura TAUPIN", siglum: "ESXL", group: "ES", site: "Marignane" },
    "PSO LEGACY PROGRAMS & TRANSVERSE": { name: "Laura TAUPIN", siglum: "ESXT", group: "ES", site: "Marignane" },
    "PSO MEDIUM & SUPER PUMA": { name: "Laura TAUPIN", siglum: "ESXY", group: "ES", site: "Marignane" },

    // === MARIGNANE : CLUSTER ENGINEERING (ET) ===
    "ENGINEERING TECHNICAL AUDIT": { name: "Caroline ILLES", siglum: "ETA", group: "ET", site: "Marignane" },
    "CHIEF ENGINEERING": { name: "Emmanuelle MARTELLI", siglum: "ETC", group: "ET", site: "Marignane" },
    "ENGINEERING ENABLERS": { name: "Caroline ILLES", siglum: "ETE", group: "ET", site: "Marignane" },
    "GENERAL ENGINEERING": { name: "Caroline ILLES", siglum: "ETG", group: "ET", site: "Marignane" },
    "AIRFRAME & VEHICLE INTEGRATION": { name: "Maeva CLUZEAU", siglum: "ETIF", group: "ET", site: "Marignane" },
    "DESIGN ELEC AND INST ELEC SYSTEM": { name: "Pauline DAOUD", siglum: "ETII", group: "ET", site: "Marignane" },
    "ROTOR SYSTEM": { name: "Léa GAUBERT", siglum: "ETIR", group: "ET", site: "Marignane" },
    "INTEGRATION & STRESS AIRFRAME & INST": { name: "Pauline DAOUD", siglum: "ETIS", group: "ET", site: "Marignane" },
    "DRIVE SYSTEMS": { name: "Léa GAUBERT", siglum: "ETIT", group: "ET", site: "Marignane" },
    "PRODUCT INTEGRITY": { name: "Sabine DE-GRANCEY", siglum: "ETJ", group: "ET", site: "Marignane" },
    "RESEARCH AND INNOVATION": { name: "Emmanuelle MARTELLI", siglum: "ETR", group: "ET", site: "Marignane" },
    "TESTING": { name: "Sarah LEVY", siglum: "ETX", group: "ET", site: "Marignane" },
    "LABORATORY MATERIALS & PROCESSES": { name: "Sabine DE-GRANCEY", siglum: "ETXL", group: "ET", site: "Marignane" },
    "FLIGHT TEST FACILITIES": { name: "Sarah LEVY", siglum: "ETXM", group: "ET", site: "Marignane" },
    "MAINTAINABILITY": { name: "Sabine DE-GRANCEY", siglum: "ETXO", group: "ET", site: "Marignane" },
    "TEST PILOTS AND SUBSIDIARIES": { name: "Sarah LEVY", siglum: "ETXP", group: "ET", site: "Marignane" },
    "ENGINEERING TEST, SIMULATION & SERVICES": { name: "Sarah LEVY", siglum: "ETXS", group: "ET", site: "Marignane" },
    "DEV FLIGHT & GROUND TESTS": { name: "Sarah LEVY", siglum: "ETXX", group: "ET", site: "Marignane" },
    "AVIONIC SYSTEMS": { name: "Pauline LENOUVEL", siglum: "ETY", group: "ET", site: "Marignane" },

    // === MARIGNANE : CLUSTER CORPORATE ===
    "GLOBAL BUSINESS": { name: "Marc Saladino", siglum: "EB", group: "Corporate", site: "Marignane" },
    "FINANCE": { name: "Bettina Tabary", siglum: "EF & F", group: "Corporate", site: "Marignane" },
    "DIGITAL & TRANSFORMATION": { name: "Caroline Cornut", siglum: "EI", group: "Corporate", site: "Marignane" },
    "AVIATION SAFETY & QUALITY": { name: "Morgane Raynaud", siglum: "EQ", group: "Corporate", site: "Marignane" },
    "PROGRAMS": { name: "Mélissa Oger", siglum: "EX (sauf EXN)", group: "Corporate", site: "Marignane" },
    "NH90 PROGRAM": { name: "Emily Gibbs", siglum: "EXN", group: "Corporate", site: "Marignane" },
    "SUSTAINABILITY & COMMUNICATIONS": { name: "Thomas Astier", siglum: "G", group: "Corporate", site: "Marignane" },
    "LEGAL, COMPLIANCE & PUBLIC AFFAIRS": { name: "Thomas Astier", siglum: "L", group: "Corporate", site: "Marignane" },
    "CORPORATE SECRETARY": { name: "Bettina Tabary", siglum: "EK", group: "Corporate", site: "Marignane" },
    "STRATEGY & SUSTAINABILITY": { name: "Thomas Astier", siglum: "EV", group: "Corporate", site: "Marignane" },
    "HUMAN RESOURCES": { name: "Géraldine Weiss", siglum: "EH & H", group: "Corporate", site: "Marignane" },

    // === SECTEURS PARIS-LE BOURGET (PLB) ===
    "INDUSTRIAL SITE PLB (Nathalie)": { name: "Nathalie OMARINI", siglum: "EDB", group: "ED", site: "PLB" },
    "AVIATION SAFETY & QUALITY PLB": { name: "Karine LOUVERTURE", siglum: "EDQB", group: "ED", site: "PLB" },
    "ROTOR SYSTEM & MATERIAL & PROCESSES LABORATORY PLB": { name: "Karine LOUVERTURE", siglum: "ETIR/ETXL", group: "ET", site: "PLB" },
    "MATERIAL SUPPORT & LOGISTICS - AIRCRAFT TECHNICAL SERVICES PLB": { name: "Karine LOUVERTURE", siglum: "ESL/ESA", group: "ES", site: "PLB" },
    "CORPORATE FUNCTIONS PLB": { name: "Karine LOUVERTURE", siglum: "Corporate Functions", group: "Corporate", site: "PLB" },
    "INDUSTRIAL SITE PLB (Nadège)": { name: "Nadège LEPINOIS", siglum: "EDB", group: "ED", site: "PLB" }
};

const SUPABASE_URL = "https://bbcusoprruidcqceasmv.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_B08mZpQ_2KDDmBRRefgvDg_rNqY6agt";

const ADMIN_EMAIL = "ludivine.sevilla@airbus.com"; 

const TEAM_LEADERS = {
    "julie.vidal@airbus.com": "ED",
    "emmanuelle.martelli@airbus.com": "ET",
    "clemence.thiebaut@airbus.com": "ES",
    "morgane.raynaud@airbus.com": "Corporate" 
};

let socialData = [];
let idToDelete = null;
let currentSiteFilter = "Marignane";
let airbusChartInstance = null; 

// ========================================================
// --- SYSTEME COMPLET DE GESTION DE L'AUTHENTIFICATION ---
// ========================================================

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Vérification...";
        submitBtn.style.opacity = "0.7";
        submitBtn.disabled = true;

        try {
            const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
                method: "POST",
                headers: {
                    "apikey": SUPABASE_ANON_KEY,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('supabase_session', JSON.stringify(data));
                localStorage.setItem('remembered_email', email);
                loginForm.reset();
                initAll();
            } else {
                alert("Erreur d'authentification : " + (data.error_description || data.message || "Identifiants invalides."));
            }
        } catch (error) {
            alert("Erreur réseau lors de la connexion : " + error.message);
        } finally {
            submitBtn.innerText = originalText;
            submitBtn.style.opacity = "1";
            submitBtn.disabled = false;
        }
    });
}

function checkUserSession() {
    const sessionStr = localStorage.getItem('supabase_session');
    const loginContainer = document.getElementById('login-container');
    const appContainer = document.getElementById('app-container');
    const btnArchives = document.getElementById('btnArchives'); // Récupère le bouton

    if (sessionStr) {
        if (loginContainer) loginContainer.style.display = 'none';
        if (appContainer) appContainer.style.display = 'block';
        
        // --- SÉCURITÉ ADMIN ---
        // Si c'est toi, on affiche le bouton d'accès aux archives, sinon il reste caché
        if (btnArchives) {
            if (isCurrentUserAdmin()) {
                btnArchives.style.display = 'inline-block'; // Visible uniquement pour toi
            } else {
                btnArchives.style.display = 'none'; // Masqué pour les autres
            }
        }
        
        return true;
    } else {
        if (loginContainer) loginContainer.style.display = 'flex';
        if (appContainer) appContainer.style.display = 'none';
        if (btnArchives) btnArchives.style.display = 'none'; // Caché si déconnecté
        
        const savedEmail = localStorage.getItem('remembered_email');
        const emailInput = document.getElementById('loginEmail');
        if (savedEmail && emailInput) {
            emailInput.value = savedEmail;
        }
        return false;
    }
}

function isCurrentUserAdmin() {
    const savedEmail = localStorage.getItem('remembered_email');
    return savedEmail && savedEmail.toLowerCase().trim() === ADMIN_EMAIL.toLowerCase().trim();
}

window.handleLogout = function() {
    localStorage.removeItem('supabase_session');
    checkUserSession();
};

// ========================================================
// --- CONTRÔLEUR DES FILTRES DE VUE INTERFACE (SITE) ---
// ========================================================

window.changerSiteFiltre = function(siteTarget) {
    currentSiteFilter = siteTarget;
    
    const listBoutons = ['Marignane', 'PLB', 'France'];
    listBoutons.forEach(siteName => {
        const btn = document.getElementById(`btn-site-${siteName}`);
        if (btn) {
            if (siteName === siteTarget) {
                btn.style.background = "var(--airbus-navy)";
                btn.style.color = "white";
            } else {
                btn.style.background = "transparent";
                btn.style.color = "var(--text-secondary)";
            }
        }
    });

    const kpiTitle = document.getElementById('kpi-site-title');
    if (kpiTitle) {
        if (siteTarget === "France") kpiTitle.innerText = "CONSOLIDATION NATIONALE";
        else if (siteTarget === "PLB") kpiTitle.innerText = "MOYENNE PLB";
        else kpiTitle.innerText = "MOYENNE MA";
    }

    renderDashboard();
};

// ========================================================
// --- FONCTIONS POUR LA MÉTÉO DES CLUSTERS ---
// ========================================================

async function fetchSectorClimate(group) {
    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/sector_status?sector_id=eq.${group}&select=status`, {
            method: "GET",
            headers: { "apikey": SUPABASE_ANON_KEY, "Authorization": `Bearer ${SUPABASE_ANON_KEY}` }
        });
        if (response.ok) {
            const data = await response.json();
            return data.length > 0 ? data[0].status : 3;
        }
    } catch(e) { console.error("Erreur fetchSectorClimate", e); }
    return 3; 
}

async function updateSectorClimate(group, newStatus) {
    try {
        await fetch(`${SUPABASE_URL}/rest/v1/sector_status?sector_id=eq.${group}`, {
            method: "PATCH",
            headers: { 
                "apikey": SUPABASE_ANON_KEY, 
                "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: newStatus })
        });
    } catch(e) { console.error("Erreur updateSectorClimate", e); }
}

// ========================================================
// --- LOGIQUE METIER ET VISUELLE DU BAROMÈTRE SOCIAL  ---
// ========================================================

function displayCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('fr-FR', options);
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        dateElement.innerText = today.charAt(0).toUpperCase() + today.slice(1);
    }
}

function initializeSectors() {
    const sectorSelect = document.getElementById('sector');
    if (!sectorSelect) return;
    
    sectorSelect.innerHTML = '<option value="" disabled selected>Choisir un secteur officiel...</option>';
    Object.keys(hrbpMapping).forEach(sector => {
        const option = document.createElement('option');
        option.value = sector;
        
        const info = hrbpMapping[sector];
        const sitePrefix = info.site === 'PLB' ? 'PLB' : 'MA';
        const sigle = info.siglum;
        
        option.textContent = `[${sitePrefix} - ${sigle}] ${sector}`;
        sectorSelect.appendChild(option);
    });
    
    sectorSelect.onchange = async function() {
        const selectedSector = this.value;
        const hrbpInfo = hrbpMapping[selectedSector];
        const hrbpInput = document.getElementById('hrbpName');
        
        if (hrbpInput && hrbpInfo) {
            hrbpInput.value = hrbpInfo.name;
        }

        if (!hrbpInfo) return;
        const group = hrbpInfo.group;
        const climateZone = document.getElementById('climate-zone');
        const climateInfo = document.getElementById('climate-info');
        const userEmail = localStorage.getItem('remembered_email');
        const normalizedEmail = userEmail ? userEmail.toLowerCase().trim() : "";
        
        if (climateZone) {
            climateZone.style.display = 'block';
            if (climateInfo) climateInfo.innerText = "Chargement de la météo en cours...";
            
            const currentStatus = await fetchSectorClimate(group);
            const smileys = document.querySelectorAll('.smiley-btn');
            
            smileys.forEach(s => {
                const val = s.getAttribute('data-val');
                s.style.opacity = (val == currentStatus) ? "1" : "0.2";
                s.style.transform = (val == currentStatus) ? "scale(1.3)" : "scale(1)";
                s.style.transition = "all 0.3s ease";

                if (TEAM_LEADERS[normalizedEmail] === group) {
                    s.style.cursor = "pointer";
                    s.onclick = async function() {
                        climateInfo.innerText = "Enregistrement...";
                        await updateSectorClimate(group, val);
                        
                        smileys.forEach(el => {
                            el.style.opacity = "0.2";
                            el.style.transform = "scale(1)";
                        });
                        s.style.opacity = "1";
                        s.style.transform = "scale(1.3)";
                        climateInfo.innerText = "Météo mise à jour par vos soins.";
                    };
                    if(val == currentStatus) climateInfo.innerText = "Vous êtes Team Leader : cliquez pour modifier.";
                } else {
                    s.style.cursor = "default";
                    s.onclick = null;
                    if(val == currentStatus) climateInfo.innerText = "Lecture seule (Météo globale du cluster).";
                }
            });
        }
    };
}

async function fetchDataFromSupabase() {
    if (!localStorage.getItem('supabase_session')) return;

    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/remontees?is_archived=eq.false&select=*`, {
            method: "GET",
            headers: {
                "apikey": SUPABASE_ANON_KEY,
                "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
            }
        });

        if (response.ok) {
            socialData = await response.json();
            renderDashboard();
        }
    } catch (error) {
        console.error("Erreur de synchronisation : ", error);
    }
}

function calculateGlobalScores(dataToCalculate) {
    const scores = { ED: { total: 0, count: 0 }, ET: { total: 0, count: 0 }, ES: { total: 0, count: 0 }, Corporate: { total: 0, count: 0 } };
    let siteTotal = 0, siteCount = 0;

    const mappingInsensible = {};
    Object.keys(hrbpMapping).forEach(key => {
        mappingInsensible[key.toLowerCase().trim()] = hrbpMapping[key];
    });

    dataToCalculate.forEach(item => {
        const sectorKey = item.sector ? item.sector.toLowerCase().trim() : "";
        const mapping = mappingInsensible[sectorKey];
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
    if (score >= 2.9) element.style.color = "var(--color-positive)";
    else if (score >= 2.2) element.style.color = "var(--color-warning)";
    else element.style.color = "var(--color-critical)";
}

// --- EXTRACTION ET GÉNÉRATION DU RAPPORT RH FILTRÉ ---
window.genererRapportSemaine = function() {
    let dataRapport = socialData;
    if (currentSiteFilter !== "France") {
        dataRapport = socialData.filter(item => item.site === currentSiteFilter);
    }

    if (dataRapport.length === 0) {
        alert("Aucune donnée disponible sur cette vue pour générer un rapport.");
        return;
    }

    Promise.all([
        fetchSectorClimate('ED'),
        fetchSectorClimate('ET'),
        fetchSectorClimate('ES'),
        fetchSectorClimate('Corporate')
    ]).then(([statusED, statusET, statusES, statusCorp]) => {

        const getMeteoTxt = (status) => {
            switch(String(status)) {
                case '1': return '🛑 Critique';
                case '2': return '⚠️ Vigilance';
                case '3': return '👍 Stable';
                case '4': return '✨ Excellent';
                default: return '👍 Stable';
            }
        };

        const chartCanvas = document.getElementById('airbusDatavizChart');
        let chartImage = "";
        if (chartCanvas) {
            chartImage = chartCanvas.toDataURL('image/png');
        }

        const totalSignaux = dataRapport.length;
        const critiques = dataRapport.filter(s => s.rating === '1');
        const tensions = dataRapport.filter(s => s.rating === '2');
        const stables = dataRapport.filter(s => s.rating === '3');
        const positifs = dataRapport.filter(s => s.rating === '4');

        const sommeNotes = dataRapport.reduce((acc, s) => acc + parseFloat(s.rating), 0);
        const noteGlobale = (sommeNotes / totalSignaux).toFixed(1);

        let couleurScore = "#10B981"; 
        let qualificatifClimat = "";

        const noteNum = parseFloat(noteGlobale);
        if (noteNum >= 2.9) {
            couleurScore = "#10B981"; 
            qualificatifClimat = "au beau fixe, témoignant d'un climat social globalement sain, serein et particulièrement bien maîtrisé sur le terrain";
        } else if (noteNum >= 2.2) {
            couleurScore = "#F59E0B"; 
            qualificatifClimat = "sous vigilance, marqué par l'émergence de signaux de tension ou de points d'attention locaux à monitorer activement";
        } else {
            couleurScore = "#EF4444"; 
            qualificatifClimat = "critique, exigeant l'analyse immédiate des causes sous-jacentes et le déploiement rapide de plans d'action correctifs";
        }

        let nomSiteRapport = currentSiteFilter === "France" ? "Nationale France (Consolidée)" : (currentSiteFilter === "PLB" ? "Paris-Le Bourget" : "Marignane");
        
        let phraseNote = `Le climat social synthétique évalué sur le périmètre <strong>${nomSiteRapport}</strong> affiche une note globale de <strong>${noteGlobale} / 4</strong>, positionnant l'entité dans un état ${qualificatifClimat}.<br><br>`;
        
        let phraseCritique = "";
        if (critiques.length > 0 || tensions.length > 0) {
            phraseCritique = `<strong>⚠️ Alertes & Vigilances RH :</strong><br>Le système recense <strong>${critiques.length} alerte(s) critique(s) (Niveau 1)</strong> et <strong>${tensions.length} zone(s) de tension (Niveau 2)</strong>. Les principaux points durs identifiés concernent les thématiques suivantes :`;
            phraseCritique += extraireListeTitresHtml([...critiques, ...tensions]);
        } else {
            phraseCritique = "<strong>👍 Alertes & Vigilances RH :</strong><br>Indicateurs optimaux : aucun point d'alerte critique ou signal de tension n'est à déplorer cette semaine sur l'ensemble des directions rattachées.<br><br>";
        }

        let phraseNeutre = "";
        if (stables.length > 0) {
            phraseNeutre = `<strong>⚖️ Périmètres Stables :</strong><br>Le dialogue social et l'environnement de travail demeurent équilibrés (Niveau 3) au sein des dossiers ou départements suivants :`;
            phraseNeutre += extraireListeTitresHtml(stables);
        }

        let phrasePositive = "";
        if (positifs.length > 0) {
            phrasePositive = `<strong>✨ Dynamiques Positives & Points Forts :</strong><br>Enfin, la cohésion et la performance collective sont soutenues by <strong>${positifs.length} événement(s) notable(s) ou succès d'équipe (Niveau 4)</strong>, valorisés sur les sujets suivants :`;
            phrasePositive += extraireListeTitresHtml(positifs);
        } else {
            phrasePositive = "<strong>✨ Dynamiques Positives & Points Forts :</strong><br>Aucun point fort exceptionnel ou jalon particulièrement positif n'a été consigné cette semaine pour venir surélever l'indice brut sur cette période.";
        }

        let analyseTerrainAutomatique = `${phraseNote} ${phraseCritique} ${phraseNeutre} ${phrasePositive}`;

        let structureRapport = `
            <html>
            <head>
                <title>Synthèse RH - ${nomSiteRapport}</title>
                <style>
                    body { font-family: 'Inter', sans-serif; color: #0F172A; padding: 40px; background: #FFF; line-height: 1.5; }
                    .header { border-bottom: 3px solid #002244; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: flex-end; }
                    h1 { color: #002244; margin: 0; font-size: 22px; text-transform: uppercase; }
                    .meta { color: #475569; font-size: 13px; }
                    
                    .kpi-container { display: flex; gap: 20px; margin-bottom: 30px; }
                    .kpi-card { flex: 1; padding: 15px; border-radius: 8px; border: 1px solid #E2E8F0; text-align: center; }
                    .kpi-value { font-size: 24px; font-weight: bold; margin-top: 5px; }

                    .meteo-container { display: flex; gap: 15px; margin-bottom: 30px; }
                    .meteo-card { flex: 1; background: #F8FAFC; padding: 12px; border-radius: 8px; border: 1px solid #E2E8F0; text-align: center; }
                    .meteo-title { font-size: 10px; font-weight: bold; color: #64748B; text-transform: uppercase; }
                    .meteo-value { font-size: 14px; font-weight: 600; margin-top: 5px; color: #002244; }

                    .context-box { background: #F8FAFC; border-left: 4px solid #002244; padding: 20px; margin-bottom: 30px; font-size: 13.5px; color: #1E293B; line-height: 1.6; border-radius: 4px; box-shadow: inset 0 1px 3px rgba(0,0,0,0.02); }
                    
                    .chart-box { border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px; margin-bottom: 35px; text-align: center; background: #F8FAFC; }
                    .chart-box img { max-width: 100%; height: auto; border-radius: 8px; }
                    .chart-title { font-size: 12px; font-weight: 800; color: #002244; text-transform: uppercase; margin-bottom: 15px; text-align: left; border-left: 4px solid #FFB81C; padding-left: 10px; }

                    .section { margin-bottom: 30px; page-break-inside: avoid; }
                    .section-title { font-size: 14px; font-weight: bold; color: #002244; border-bottom: 1px solid #E2E8F0; padding-bottom: 8px; margin-bottom: 15px; text-transform: uppercase; }
                    .signal-item { padding: 10px 0; border-bottom: 1px solid #F1F5F9; font-size: 13px; }
                    .badge { display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: bold; margin-right: 8px; }
                    .badge-1 { background: #FEF2F2; color: #EF4444; border: 1px solid #EF4444; }
                    .badge-2 { background: #FFFBEB; color: #D97706; border: 1px solid #D97706; }
                    
                    @media print { .no-print { display: none; } body { padding: 20px; } }
                </style>
            </head>
            <body>
                <div class="header">
                    <div>
                        <h1>Synthèse Baromètre Social</h1>
                        <div class="meta">Périmètre : <strong>${nomSiteRapport}</strong></div>
                    </div>
                    <div class="meta">Généré le ${new Date().toLocaleDateString('fr-FR')}</div>
                </div>

                <div class="section">
                    <div class="section-title">🌤️ Météo Globale des Clusters (Management Team Leaders)</div>
                    <div class="meteo-container">
                        <div class="meteo-card">
                            <div class="meteo-title">Production (ED)</div>
                            <div class="meteo-value">${getMeteoTxt(statusED)}</div>
                        </div>
                        <div class="meteo-card">
                            <div class="meteo-title">Engineering (ET)</div>
                            <div class="meteo-value">${getMeteoTxt(statusET)}</div>
                        </div>
                        <div class="meteo-card">
                            <div class="meteo-title">Support & MRO (ES)</div>
                            <div class="meteo-value">${getMeteoTxt(statusES)}</div>
                        </div>
                        <div class="meteo-card">
                            <div class="meteo-title">Corporate Functions</div>
                            <div class="meteo-value">${getMeteoTxt(statusCorp)}</div>
                        </div>
                    </div>
                </div>

                <div class="section" style="margin-top: 10px; margin-bottom: 0;">
                    <div class="section-title">📊 Synthèse globale des sujets remontés (Management HRBP)</div>
                </div>

                <div class="kpi-container">
                    <div class="kpi-card" style="border-top: 4px solid ${couleurScore};">
                        <div style="font-size:10px; font-weight:bold; color:#64748B; text-transform: uppercase;">Note moyenne des sujets remontés</div>
                        <div class="kpi-value" style="color: ${couleurScore};">${noteGlobale} / 4</div>
                    </div>
                    
                    <div class="kpi-card" style="border-top: 4px solid #94A3B8;">
                        <div style="font-size:10px; font-weight:bold; color:#64748B; text-transform: uppercase;">Remontées HRBP</div>
                        <div class="kpi-value" style="color: #0F172A;">${totalSignaux}</div>
                    </div>
                    
                    <div class="kpi-card" style="border-top: 4px solid #EF4444;">
                        <div style="font-size:10px; font-weight:bold; color:#EF4444; text-transform: uppercase;">Point(s) critique(s)</div>
                        <div class="kpi-value" style="color:#EF4444;">${critiques.length}</div>
                    </div>
                </div>

                <div class="context-box">
                    <span style="font-size: 14px; font-weight: 800; color: #002244; text-transform: uppercase; display: block; margin-bottom: 10px; border-bottom: 1px dashed #CBD5E1; padding-bottom: 4px;">Analyse RH du Climat Social :</span>
                    ${analyseTerrainAutomatique}
                </div>

                <div class="chart-box">
                    <div class="chart-title">Visualisation de la répartition par direction</div>
                    <img src="${chartImage}" alt="Graphique Social">
                </div>

                <div class="section">
                    <div class="section-title">🔍 Alertes et Points d'attention</div>
                    ${critiques.length + tensions.length === 0 ? '<p style="font-size:13px; color:#64748B;">Aucune alerte signalée.</p>' : ''}
                    ${[...critiques, ...tensions].map(s => `
                        <div class="signal-item">
                            <span class="badge badge-${s.rating}">Impact Niveau ${s.rating}</span>
                            <strong>[${s.sector}]</strong> ${s.title}
                            <div style="margin-left: 85px; color: #475569; font-style: italic; margin-top: 4px;">"${s.description}"</div>
                        </div>
                    `).join('')}
                </div>

                <div class="no-print" style="margin-top: 40px; text-align: center;">
                    <button onclick="window.print()" style="background:#002244; color:white; padding: 12px 25px; border:none; border-radius:6px; cursor:pointer; font-weight:bold; font-size:14px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">🖨️ Exporter en PDF / Imprimer</button>
                </div>
            </body>
            </html>
        `;

        const fenetreRapport = window.open('', '_blank');
        fenetreRapport.document.write(structureRapport);
        fenetreRapport.document.close();
    });
};

function extraireListeTitresHtml(tableauElements) {
    if (!tableauElements || tableauElements.length === 0) return "";
    const titresUniques = [...new Set(tableauElements.map(el => el.title.trim()))];
    return `<ul style="margin: 4px 0 12px 20px; padding: 0; font-size: 13px; color: #475569; list-style-type: square;">
        ${titresUniques.map(titre => `<li><strong>${titre}</strong></li>`).join('')}
    </ul>`;
}

function getFriendlyDate(savedDateString) {
    if (!savedDateString || !savedDateString.includes('|')) return savedDateString;
    try {
        let [savedDate, savedTime] = savedDateString.split('|');
        savedDate = savedDate.trim();
        savedTime = savedTime.trim();
        
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

        if (savedDate === todayStr) return `Aujourd'hui à ${savedTime}`;
        if (savedDate === yesterdayStr) return `Hier à ${savedTime}`;
        
        const dateParts = savedDate.split('-');
        if (dateParts.length === 3) {
            return `Le ${dateParts[2]}/${dateParts[1]} à ${savedTime}`;
        }
        return `${savedDate} à ${savedTime}`;
    } catch (e) {
        return savedDateString;
    }
}

function renderDashboard() {
    const listContainer = document.getElementById('subjectsList');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    let datasetFiltre = socialData;
    if (currentSiteFilter !== "France") {
        datasetFiltre = socialData.filter(item => item.site === currentSiteFilter);
    }

    calculateGlobalScores(datasetFiltre);

    if (datasetFiltre.length === 0) {
        listContainer.innerHTML = `
            <div class="empty-state">
                <p style="font-size: 1.05rem; font-weight: 600; color: #002244; margin-bottom: 0.25rem;">Aucun signal consigné</p>
                <p style="font-size: 0.85rem; color: #64748B;">Le baromètre en ligne est vide pour l'entité sélectionnée.</p>
            </div>`;
        updateAirvizStacked(); 
        return;
    }

    const sortedData = [...datasetFiltre].sort((a, b) => b.id - a.id);
    const isAdmin = isCurrentUserAdmin();

    sortedData.forEach(item => {
        const config = getStatusConfig(item.rating);
        const friendlyDate = getFriendlyDate(item.date);
        
        const archiveButtonHtml = isAdmin 
            ? `<button type="button" class="btn-archive-item" onclick="archiverSignalUnique(${item.id})" style="background: transparent; border: none; color: #64748B; cursor: pointer; font-size: 0.95rem; padding: 4px; margin-right: 8px;" title="Archiver ce signal">📦</button>` 
            : '';

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
                    <span style="font-size: 0.7rem; font-weight: 700; background: #E2E8F0; padding: 0.3rem 0.6rem; border-radius: 50px; color: var(--airbus-navy);">SITE : ${item.site === 'PLB' ? 'LE BOURGET' : 'MARIGNANE'}</span>
                    <span class="hrbp-tag" style="font-size: 0.7rem; font-weight: 500; background: #F1F5F9; padding: 0.3rem 0.6rem; border-radius: 50px; color: #334155;">HRBP : ${item.hrbp}</span>
                </div>
                <h3 class="subject-title" style="margin-top: 0.25rem;">${item.title}</h3>
                <p class="subject-description">${item.description}</p>
            </div>
            <div class="card-right">
                <div style="display: flex; align-items: center;">
                    ${archiveButtonHtml}
                    <button type="button" class="btn-delete" data-id="${item.id}">✕</button>
                </div>
                <span class="timestamp">${friendlyDate}</span>
            </div>
        `;
        listContainer.appendChild(card);
    });

    listContainer.onclick = function(e) {
        const deleteButton = e.target.closest('.btn-delete');
        if (deleteButton) {
            e.preventDefault();
            e.stopPropagation();
            openAirbusModal(deleteButton.getAttribute('data-id'));
        }
    };

    updateAirvizStacked();
}

window.archiverSignalUnique = async function(idSignal) {
    if (!isCurrentUserAdmin()) {
        alert("🔒 Action réservée à l'administrateur du baromètre.");
        return;
    }

    if (!confirm("Voulez-vous archiver ce signal ? Il quittera le tableau de bord actif mais restera consultable en base.")) return;

    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/remontees?id=eq.${idSignal}`, {
            method: "PATCH",
            headers: {
                "apikey": SUPABASE_ANON_KEY,
                "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ is_archived: true })
        });

        if (response.ok) {
            await fetchDataFromSupabase();
        } else {
            alert("Erreur lors de l'archivage.");
        }
    } catch (error) {
        alert("Erreur réseau : " + error.message);
    }
};

function getStatusConfig(rating) {
    switch(rating) {
        case '1': return { smiley: '🛑', class: 'critical' };
        case '2': return { smiley: '⚠️', class: 'warning' };
        case '3': return { smiley: '👍', class: 'neutral' };
        case '4': return { smiley: '✨', class: 'positive' };
        default:  return { smiley: '😐', class: 'neutral' };
    }
}

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

const formElement = document.getElementById('barometreForm');
if (formElement) {
    formElement.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        try {
            const sector = document.getElementById('sector').value;
            const hrbp = document.getElementById('hrbpName').value;
            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;
            const rating = document.getElementById('rating').value;

            const now = new Date();
            const formattedTime = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
            const rawDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

            const metaSector = hrbpMapping[sector];
            const siteAppartenance = metaSector ? metaSector.site : "Marignane";

            const newPayload = {
                sector: sector.trim(), 
                hrbp: hrbp, 
                title: title, 
                description: description, 
                rating: rating,
                date: `${rawDate} | ${formattedTime}`,
                site: siteAppartenance,
                is_archived: false 
            };

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
                await fetchDataFromSupabase();
                
                const climateZone = document.getElementById('climate-zone');
                if(climateZone) climateZone.style.display = 'none';

                if (currentSiteFilter !== siteAppartenance) {
                    changerSiteFiltre(siteAppartenance);
                }
                alert("✅ Enregistrement réussi !");
            } else {
                const errorText = await response.text();
                alert(`❌ Refus de Supabase : ${errorText}`);
            }

        } catch (error) {
            alert(`❌ Erreur dans ton code ou navigateur : ${error.message}`);
        }
    });
}

window.exportArchives = async function() {
    const archiveBtn = document.querySelector("button[onclick='exportArchives()']");
    const originalText = archiveBtn ? archiveBtn.innerHTML : "📁 Accéder aux Archives (.json)";
    
    if (archiveBtn) {
        archiveBtn.innerHTML = "⏳ Téléchargement...";
        archiveBtn.style.opacity = "0.7";
        archiveBtn.style.pointerEvents = "none";
    }

    try {
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

        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(allData, null, 4));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        
        const todayFile = new Date().toISOString().split('T')[0];
        downloadAnchor.setAttribute("download", `Barometre_Airbus_Global_Backup_${todayFile}.json`);
        
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();

    } catch (error) {
        alert("Erreur lors de l'exportation globale : " + error.message);
    } finally {
        if (archiveBtn) {
            archiveBtn.innerHTML = originalText;
            archiveBtn.style.opacity = "1";
            archiveBtn.style.pointerEvents = "auto";
        }
    }
};

function initAll() {
    const isConnected = checkUserSession();
    
    if (isConnected) {
        displayCurrentDate();
        initializeSectors();
        fetchDataFromSupabase();
    }
    
    const btnCancel = document.getElementById('btnCancelDelete');
    const btnConfirm = document.getElementById('btnConfirmDelete');
    
    if (btnCancel) btnCancel.onclick = closeAirbusModal;
    
    if (btnConfirm) {
        btnConfirm.onclick = async function() {
            if (!idToDelete) return;

            this.innerText = "Suppression en cours...";
            this.style.opacity = "0.7";
            this.disabled = true;

            try {
                const response = await fetch(`${SUPABASE_URL}/rest/v1/remontees?id=eq.${idToDelete}`, {
                    method: "DELETE",
                    headers: {
                        "apikey": SUPABASE_ANON_KEY,
                        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
                    }
                });
                
                if (response.ok || response.status === 204) {
                    await fetchDataFromSupabase();
                    closeAirbusModal();
                } else {
                    const errorText = await response.text();
                    alert(`Erreur Supabase ${response.status} : ${errorText}`);
                }
            } catch (error) {
                alert("Erreur réseau : " + error.message);
            } finally {
                this.innerText = "Oui, supprimer";
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

// ========================================================
// --- GENERATION ET MISE A JOUR DE LA DATAVIZ CHART.JS ---
// ========================================================
function updateAirvizStacked() {
    const ctx = document.getElementById('airbusDatavizChart');
    if (!ctx) return;

    const stats = {
        Marignane: {
            ED: { r1: 0, r2: 0, r3: 0, r4: 0 },
            ET: { r1: 0, r2: 0, r3: 0, r4: 0 },
            ES: { r1: 0, r2: 0, r3: 0, r4: 0 },
            Corporate: { r1: 0, r2: 0, r3: 0, r4: 0 }
        },
        PLB: {
            ED: { r1: 0, r2: 0, r3: 0, r4: 0 },
            ET: { r1: 0, r2: 0, r3: 0, r4: 0 },
            ES: { r1: 0, r2: 0, r3: 0, r4: 0 },
            Corporate: { r1: 0, r2: 0, r3: 0, r4: 0 }
        }
    };

    const mappingInsensible = {};
    Object.keys(hrbpMapping).forEach(key => {
        mappingInsensible[key.toLowerCase().trim()] = hrbpMapping[key];
    });

    socialData.forEach(item => {
        const sectorKey = item.sector ? item.sector.toLowerCase().trim() : "";
        const sectorMeta = mappingInsensible[sectorKey];
        
        if (sectorMeta && stats[item.site] && stats[item.site][sectorMeta.group]) {
            const noteKey = `r${item.rating}`; 
            if (stats[item.site][sectorMeta.group][noteKey] !== undefined) {
                stats[item.site][sectorMeta.group][noteKey]++;
            }
        }
    });

    const directions = ['ED', 'ET', 'ES', 'Corporate'];
    const isFranceMode = (currentSiteFilter === "France");
    
    let labelsAxesX = [];
    let datasetsAffiche = [];

    const colorCritique = '#EF4444'; 
    const colorTension = '#F59E0B';  
    const colorStable = '#002244';   
    const colorFort = '#10B981';     

    if (!isFranceMode) {
        labelsAxesX = ['Production (ED)', 'Engineering (ET)', 'Support & MRO (ES)', 'Corporate Functions'];
        const activeStats = currentSiteFilter === "Marignane" ? stats.Marignane : stats.PLB;
        
        datasetsAffiche = [
            { label: 'Critique 🛑', data: directions.map(g => activeStats[g].r1), backgroundColor: colorCritique, borderRadius: 4, barThickness: 24 },
            { label: 'Tension ⚠️', data: directions.map(g => activeStats[g].r2), backgroundColor: colorTension, borderRadius: 4, barThickness: 24 },
            { label: 'Stable 👍', data: directions.map(g => activeStats[g].r3), backgroundColor: colorStable, borderRadius: 4, barThickness: 24 },
            { label: 'Point Fort ✨', data: directions.map(g => activeStats[g].r4), backgroundColor: colorFort, borderRadius: 4, barThickness: 24 }
        ];
    } else {
        labelsAxesX = [
            'Production ED (MA)', 'Production ED (PLB)',
            'Engineering ET (MA)', 'Engineering ET (PLB)',
            'Support ES (MA)', 'Support ES (PLB)',
            'Corporate Functions (MA)', 'Corporate Functions (PLB)'
        ];

        datasetsAffiche = [
            {
                label: 'Critique 🛑',
                backgroundColor: colorCritique, borderRadius: 4, barThickness: 22,
                data: [stats.Marignane.ED.r1, stats.PLB.ED.r1, stats.Marignane.ET.r1, stats.PLB.ET.r1, stats.Marignane.ES.r1, stats.PLB.ES.r1, stats.Marignane.Corporate.r1, stats.PLB.Corporate.r1]
            },
            {
                label: 'Tension ⚠️',
                backgroundColor: colorTension, borderRadius: 4, barThickness: 22,
                data: [stats.Marignane.ED.r2, stats.PLB.ED.r2, stats.Marignane.ET.r2, stats.PLB.ET.r2, stats.Marignane.ES.r2, stats.PLB.ES.r2, stats.Marignane.Corporate.r2, stats.PLB.Corporate.r2]
            },
            {
                label: 'Stable 👍',
                backgroundColor: colorStable, borderRadius: 4, barThickness: 22,
                data: [stats.Marignane.ED.r3, stats.PLB.ED.r3, stats.Marignane.ET.r3, stats.PLB.ET.r3, stats.Marignane.ES.r3, stats.PLB.ES.r3, stats.Marignane.Corporate.r3, stats.PLB.Corporate.r3]
            },
            {
                label: 'Point Fort ✨',
                backgroundColor: colorFort, borderRadius: 4, barThickness: 22,
                data: [stats.Marignane.ED.r4, stats.PLB.ED.r4, stats.Marignane.ET.r4, stats.PLB.ET.r4, stats.Marignane.ES.r4, stats.PLB.ES.r4, stats.Marignane.Corporate.r4, stats.PLB.Corporate.r4]
            }
        ];
    }

    if (airbusChartInstance) {
        airbusChartInstance.destroy();
    }

    airbusChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labelsAxesX,
            datasets: datasetsAffiche
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: { family: 'Inter', size: 11, weight: 600 },
                        color: '#475569',
                        boxWidth: 30,
                        padding: 15
                    },
                    onClick: function(e) { e.stopPropagation(); }
                },
                tooltip: {
                    mode: 'point',
                    callbacks: {
                        title: function(context) {
                            return `Périmètre : ${context[0].label}`;
                        },
                        label: function(context) {
                            if (context.raw === 0) return null;
                            return `• ${context.dataset.label.split(' ')[0]} : ${context.raw} signal/signaux`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    stacked: true,
                    min: 0, 
                    ticks: { color: '#475569', font: { family: 'Inter', size: 11, weight: 700 }, stepSize: 1 },
                    title: { display: true, text: 'Nombre de remontées terrain', color: '#002244', font: { family: 'Inter', size: 11, weight: 600 } },
                    grid: { borderDash: [4, 4], color: '#E2E8F0' }
                },
                x: {
                    stacked: true, 
                    ticks: { 
                        color: '#002244', 
                        font: { family: 'Inter', size: 10, weight: 700 },
                        maxRotation: 15,
                        minRotation: 0
                    },
                    grid: { display: false }
                }
            }
        }
    });
}
