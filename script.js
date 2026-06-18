// --- BASE DE CONNAISSANCES DES HRBP AIRBUS HELICOPTERS (VERSION EXHAUSTIVE 2026) --- 
const hrbpMapping = { 
    // === GROUPE ED : PRODUCTION, SUPPLY CHAIN, FALS & PROTOTYPES === 
    "FAL & Prototypes (Général)": { name: "Francis OTTAVIANI", siglum: "EHFM", group: "ED" }, 
    "FAL H160 / H175 & Production Flow": { name: "Francis OTTAVIANI", siglum: "EHFM", group: "ED" }, 
    "FAL H125 / H130 & Dolphin": { name: "Julie VIDAL", siglum: "EHFM", group: "ED" }, 
    "Global Supply Chain & Operations": { name: "Julie VIDAL", siglum: "EHFM", group: "ED" }, 
    "Procurement & Strategic Sourcing (EDP)": { name: "ASTRID ECUYER", siglum: "EHFM", group: "ED" }, 
    "Center of Excellence Dynamics & Assy (EDC)": { name: "Fabien ALBERTI", siglum: "EHD", group: "ED" }, 
    "Manufacturing Gears & Special Treatments": { name: "Arnaud GOURMAND", siglum: "EHFM", group: "ED" }, 
    "Industrial Means & Tooling (EDCO)": { name: "Caroline FERRI", siglum: "EHFM", group: "ED" }, 
    "Industrialization Business Methods (EDISP)": { name: "Celine DI FILIPPO", siglum: "EHFM", group: "ED" }, 
    "QASS & Conformity Plant Meca / Rotor (EDQMD)": { name: "Aurelie NICOLAS", siglum: "EHFM", group: "ED" }, 
    "Airplane Door Inspection & Confi (EDQDD)": { name: "Mathilde CAMELIERE", siglum: "EHD", group: "ED" }, 

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
    "Facility Management & Real Estate (HMFC)": { name: "Celine FRAIZ", siglum: "EHFM", group: "Corporate" }, 

    // === COHORTES / PROGRAMMES SPÉCIFIQUES === 
    "Programmes: NH90 (EXN)": { name: "Emily GIBBS", siglum: "EHFM", group: "Corporate" }, 
    "Programmes: Tiger & VSR700 / H160 / H175": { name: "Melissa OGER", siglum: "EHFM", group: "Corporate" }, 
    "Programmes: H160 Product & Customization": { name: "Marine MUNDSCHAU", siglum: "EHD", group: "Corporate" } 
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

// --- RÉCUPÉRATION DES DONNÉES EN LIGNE (SUPABASE) --- 
async function fetchDataFromSupabase() { 
    try { 
        const response = await fetch(`${SUPABASE_URL}/rest/v1/remontees?select=*`, { 
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
function getFriendlyDate(savedDateString) { 
    if (!savedDateString || !savedDateString.includes('|')) return savedDateString; 
    
    try { 
        const [savedDate, savedTime] = savedDateString.split(' | '); 
        
        const today = new Date(); 
        const todayStr = today.toISOString().split('T')[0]; 
        
        const yesterday = new Date(); 
        yesterday.setDate(today.getDate() - 1); 
        const yesterdayStr = yesterday.toISOString().split('T')[0]; 

        if (savedDate === todayStr) { 
            return `Aujourd'hui à ${savedTime.trim()}`; 
        } else if (savedDate === yesterdayStr) { 
            return `Hier à ${savedTime.trim()}`; 
        } else { 
            const [year, month, day] = savedDate.split('-'); 
            return `Le ${day}/${month} à ${savedTime.trim()}`; 
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
        
        const timeOptions = { hour: '2-digit', minute: '2-digit' }; 
        const formattedTime = new Date().toLocaleTimeString('fr-FR', timeOptions); 
        const rawDate = new Date().toISOString().split('T')[0]; 

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

// --- SUPPRESSION SUR SUPABASE --- 
async function executeDeleteInSupabase(id) { 
    try { 
        const response = await fetch(`${SUPABASE_URL}/rest/v1/remontees?id=eq.${id}`, { 
            method: "DELETE", 
            headers: { 
                "apikey": SUPABASE_ANON_KEY, 
                "Authorization": `Bearer ${SUPABASE_ANON_KEY}`, 
                "Content-Type": "application/json" 
            } 
        }); 
        
        if (response.ok || response.status === 204) { 
            await fetchDataFromSupabase(); 
        } else { 
            console.error("Échec de suppression Supabase, statut:", response.status); 
        } 
    } catch (error) { 
        console.error("Erreur réseau lors de la suppression :", error); 
    } 
} 

// --- EXPORTATION DES ARCHIVES --- 
window.exportArchives = function() { 
    if (socialData.length === 0) { alert("Aucune donnée en ligne à exporter."); return; } 
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(socialData, null, 4)); 
    const downloadAnchor = document.createElement('a'); 
    downloadAnchor.setAttribute("href", dataStr); 
    downloadAnchor.setAttribute("download", `Barometre_Airbus_Live_Export.json`); 
    document.body.appendChild(downloadAnchor); 
    downloadAnchor.click(); 
    downloadAnchor.remove(); 
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