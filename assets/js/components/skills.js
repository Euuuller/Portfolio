/**
==========================================
MÓDULO: HABILIDADES & FERRAMENTAS
Carrega dados de skills
Renderiza cartões por categoria
Controla abas com acessibilidade e teclado
==========================================
*/

const SKILLS_FILE_PATH = '/assets/data/skills.json'

export function createSkillCard(skill) {
    const safeName = skill?.name ?? '—'
    const safeDesc = skill?.description ?? ''
    
    const icon = skill?.icon_type === 'devicon' 
        ? `<i class="${skill.icon}"></i>` 
        : (skill?.icon ?? '')
    
    return `
        <div class="skill-card" tabindex="0">
            <div class="skill-card__icon">
                ${icon}
            </div>
            <h3 class="skill-card__title">${safeName}</h3>
            <p class="skill-card__description">${safeDesc}</p>
        </div>
    `
}

async function fetchSkills() {
    const response = await fetch(SKILLS_FILE_PATH, { cache: 'no-cache' })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    return response.json()
}

export function setupA11yTabs(tabsContainer, contentContainer) {
    if (!tabsContainer || !contentContainer) return
    
    const tabs = tabsContainer.querySelectorAll('.skills__tab')
    const panels = contentContainer.querySelectorAll('.skills__panel')
    
    // Configura acessibilidade e eventos para cada aba
    tabs.forEach((tab, index) => {
        const panelId = tab.getAttribute('data-tab')
        const panel = contentContainer.querySelector(`[data-panel="${panelId}"]`)
        
        if (!panel) return
        
        // Atributos ARIA
        tab.setAttribute('role', 'tab')
        tab.setAttribute('aria-selected', 'false')
        tab.setAttribute('aria-controls', panelId)
        tab.id = `tab-${panelId}`
        
        panel.setAttribute('role', 'tabpanel')
        panel.setAttribute('aria-labelledby', `tab-${panelId}`)
        panel.setAttribute('hidden', '')
        
        // Eventos de clique
        tab.addEventListener('click', (e) => {
            e.preventDefault()
            activateTab(tab, tabs, panels, contentContainer)
        })
        
        // Eventos de teclado
        tab.addEventListener('keydown', (e) => {
            let newTab = null
            
            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault()
                    newTab = tabs[index > 0 ? index - 1 : tabs.length - 1]
                    break
                case 'ArrowRight':
                    e.preventDefault()
                    newTab = tabs[index < tabs.length - 1 ? index + 1 : 0]
                    break
                case 'Home':
                    e.preventDefault()
                    newTab = tabs[0]
                    break
                case 'End':
                    e.preventDefault()
                    newTab = tabs[tabs.length - 1]
                    break
                default:
                    return
            }
            
            if (newTab) {
                newTab.focus()
                activateTab(newTab, tabs, panels, contentContainer)
            }
        })
    })
}

function activateTab(activeTab, allTabs, allPanels, contentContainer) {
    const targetPanelId = activeTab.getAttribute('data-tab')
    
    // Atualiza estado das abas
    allTabs.forEach(tab => {
        const isActive = tab === activeTab
        tab.setAttribute('aria-selected', isActive.toString())
        tab.classList.toggle('skills__tab--active', isActive)
    })
    
    // Atualiza estado dos painéis
    allPanels.forEach(panel => {
        const isActive = panel.getAttribute('data-panel') === targetPanelId
        if (isActive) {
            panel.removeAttribute('hidden')
            panel.classList.add('skills__panel--active')
        } else {
            panel.setAttribute('hidden', '')
            panel.classList.remove('skills__panel--active')
        }
    })
}

export function renderSkills(skillsData, contentContainer) {
    for (const category in skillsData) {
        const panel = contentContainer.querySelector(`[data-panel="${category}"]`)
        if (!panel) continue
        
        const grid = panel.querySelector('.skills__grid')
        if (!grid) continue
        
        grid.innerHTML = skillsData[category].map(createSkillCard).join('')
    }
}

export async function initSkills() {
    const tabsContainer = document.querySelector('.skills__tabs')
    const contentContainer = document.querySelector('.skills__content')
    
    if (!tabsContainer || !contentContainer) {
        console.warn('Elementos de habilidades não encontrados')
        return
    }
    
    try {
        // Carrega dados
        const skillsData = await fetchSkills()
        
        // Renderiza conteúdo
        renderSkills(skillsData, contentContainer)
        
        // Configura abas
        setupA11yTabs(tabsContainer, contentContainer)
        
        // Ativa primeira aba
        const firstTab = tabsContainer.querySelector('.skills__tab')
        if (firstTab) {
            activateTab(firstTab, 
                tabsContainer.querySelectorAll('.skills__tab'),
                contentContainer.querySelectorAll('.skills__panel'),
                contentContainer
            )
        }
        
        console.log('✅ Módulo de habilidades inicializado')
    } catch (error) {
        console.error('❌ Erro ao inicializar habilidades:', error)
    }
}