/**
 * ==========================================
 * SISTEMA DE ANIMAÇÕES CANVAS - PORTFOLIO
 * ==========================================
 * Animações elegantes e performáticas para os 6 projetos
 * Substituindo SVGs estáticos por visualizações interativas
 */

class PortfolioAnimations {
    constructor() {
        this.canvases = new Map();
        this.animationFrames = new Map();
        this.config = {
            colors: {
                blue: '#6366f1',
                purple: '#8b5cf6',
                cyan: '#06b6d4',
                green: '#10b981',
                orange: '#f59e0b',
                red: '#ef4444',
                pink: '#ec4899',
                light: '#e5e7eb',
                dark: '#1f2937'
            }
        };
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        const projects = document.querySelectorAll('.project-card__image');
        
        projects.forEach((container, index) => {
            const img = container.querySelector('.project-card__img');
            if (!img) return;

            const canvas = this.createCanvas(container);
            img.style.display = 'none';

            // Mapeia animações por índice (0-5)
            const animations = [
                () => this.salesDashboard(canvas, index),
                () => this.churnPrediction(canvas, index),
                () => this.customerSegmentation(canvas, index),
                () => this.sentimentAnalysis(canvas, index),
                () => this.pricePrediction(canvas, index),
                () => this.executiveDashboard(canvas, index)
            ];

            if (animations[index]) {
                animations[index]();
            }
        });
    }

    createCanvas(container) {
        const canvas = document.createElement('canvas');
        const dpr = window.devicePixelRatio || 1;
        
        canvas.width = container.offsetWidth * dpr;
        canvas.height = container.offsetHeight * dpr;
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.background = 'transparent';
        
        const ctx = canvas.getContext('2d', { alpha: true });
        ctx.scale(dpr, dpr);
        
        container.appendChild(canvas);
        return canvas;
    }
    // ANIMAÇÃO 1: SALES DASHBOARD - Barras horizontais animadas
    salesDashboard(canvas, id) {
        const ctx = canvas.getContext('2d');
        const w = canvas.width / (window.devicePixelRatio || 1);
        const h = canvas.height / (window.devicePixelRatio || 1);
        const start = Date.now();

        const bars = [
            { target: 0.85, color: this.config.colors.blue, current: 0 },
            { target: 0.68, color: this.config.colors.purple, current: 0 },
            { target: 0.72, color: this.config.colors.cyan, current: 0 },
            { target: 0.45, color: this.config.colors.green, current: 0 },
            { target: 0.58, color: this.config.colors.orange, current: 0 }
        ];

        const animate = () => {
            const t = (Date.now() - start) / 1000;
            ctx.clearRect(0, 0, w, h);

            const barH = h / (bars.length * 1.8);
            const maxW = w * 0.85;
            const startX = w * 0.08;

            bars.forEach((bar, i) => {
                const y = (i + 0.8) * (h / bars.length);

                // Animação cíclica suave (4s por ciclo)
                const cycle = (t + i * 0.2) % 4;
                const phase = cycle < 2 ? cycle / 2 : 2 - cycle / 2;
                const progress = this.ease(phase);
                bar.current = bar.target * progress;

                // Barra de fundo
                ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
                this.roundRect(ctx, startX, y - barH/2, maxW, barH, barH/2);
                ctx.fill();

                // Barra animada
                ctx.fillStyle = bar.color;
                this.roundRect(ctx, startX, y - barH/2, maxW * bar.current, barH, barH/2);
                ctx.fill();

                // Brilho
                const grad = ctx.createLinearGradient(startX, y - barH/2, startX, y + barH/2);
                grad.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
                grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.fillStyle = grad;
                this.roundRect(ctx, startX, y - barH/2, maxW * bar.current, barH, barH/2);
                ctx.fill();

                // Indicador circular no final
                if (bar.current > 0.05) {
                    const pulse = 1 + Math.sin(t * 3 + i) * 0.15;
                    ctx.beginPath();
                    ctx.arc(startX + maxW * bar.current, y, barH * 0.4 * pulse, 0, Math.PI * 2);
                    ctx.fillStyle = bar.color;
                    ctx.fill();
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }
            });

            this.animationFrames.set(id, requestAnimationFrame(animate));
        };

        animate();
    }

    // ANIMAÇÃO 2: CHURN PREDICTION - Partículas em curva senoidal
    churnPrediction(canvas, id) {
        const ctx = canvas.getContext('2d');
        const w = canvas.width / (window.devicePixelRatio || 1);
        const h = canvas.height / (window.devicePixelRatio || 1);
        const start = Date.now();

        const particles = Array.from({ length: 10 }, (_, i) => ({
            phase: (i / 10) * Math.PI * 2,
            size: 6 + Math.random() * 8,
            color: i % 3 === 0 ? this.config.colors.blue : 
                   i % 3 === 1 ? this.config.colors.cyan : this.config.colors.pink,
            speed: 0.4 + Math.random() * 0.4,
            offset: Math.random() * Math.PI * 2
        }));

        const animate = () => {
            const t = (Date.now() - start) / 1000;
            ctx.clearRect(0, 0, w, h);

            // Desenha curva de fundo
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
            ctx.lineWidth = 3;
            ctx.beginPath();
            for (let x = 0; x <= w; x += 3) {
                const y = h/2 + Math.sin((x/w) * Math.PI * 2) * (h * 0.25);
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Anima partículas
            particles.forEach(p => {
                const phase = p.phase + t * p.speed;
                const x = (Math.sin(phase) * 0.45 + 0.5) * w;
                const baseY = h/2 + Math.sin((x/w) * Math.PI * 2) * (h * 0.25);
                const y = baseY + Math.sin(phase * 2 + p.offset) * 15;

                // Sombra
                ctx.beginPath();
                ctx.arc(x + 2, y + 2, p.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
                ctx.fill();

                // Partícula principal
                ctx.beginPath();
                ctx.arc(x, y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();

                // Brilho interno
                ctx.beginPath();
                ctx.arc(x - p.size * 0.2, y - p.size * 0.2, p.size * 0.4, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
                ctx.fill();

                // Halo pulsante
                const pulse = 1 + Math.sin(t * 3 + p.offset) * 0.3;
                ctx.beginPath();
                ctx.arc(x, y, p.size * 1.5 * pulse, 0, Math.PI * 2);
                ctx.strokeStyle = p.color + '40';
                ctx.lineWidth = 2;
                ctx.stroke();
            });

            this.animationFrames.set(id, requestAnimationFrame(animate));
        };

        animate();
    }

    // ANIMAÇÃO 3: CUSTOMER SEGMENTATION - Clusters com partículas
    customerSegmentation(canvas, id) {
        const ctx = canvas.getContext('2d');
        const w = canvas.width / (window.devicePixelRatio || 1);
        const h = canvas.height / (window.devicePixelRatio || 1);
        const start = Date.now();

        const clusters = [
            { x: 0.28, y: 0.35, r: 28, color: this.config.colors.blue, particles: 8 },
            { x: 0.68, y: 0.42, r: 35, color: this.config.colors.green, particles: 10 },
            { x: 0.48, y: 0.72, r: 24, color: this.config.colors.orange, particles: 7 }
        ].map(c => ({
            ...c,
            dots: Array.from({ length: c.particles }, (_, i) => ({
                angle: (i / c.particles) * Math.PI * 2,
                dist: 35 + Math.random() * 25,
                size: 3 + Math.random() * 3,
                speed: 0.3 + Math.random() * 0.3
            }))
        }));

        const animate = () => {
            const t = (Date.now() - start) / 1000;
            ctx.clearRect(0, 0, w, h);

            clusters.forEach((cluster, ci) => {
                const cx = cluster.x * w;
                const cy = cluster.y * h;
                const pulse = 1 + Math.sin(t * 1.5 + ci * Math.PI / 3) * 0.15;
                const r = cluster.r * pulse;

                // Halo externo
                const haloGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 1.8);
                haloGrad.addColorStop(0, cluster.color + '30');
                haloGrad.addColorStop(1, cluster.color + '00');
                ctx.fillStyle = haloGrad;
                ctx.beginPath();
                ctx.arc(cx, cy, r * 1.8, 0, Math.PI * 2);
                ctx.fill();

                // Círculo principal
                const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
                grad.addColorStop(0, cluster.color + '60');
                grad.addColorStop(1, cluster.color + '20');
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(cx, cy, r, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = cluster.color;
                ctx.lineWidth = 2.5;
                ctx.stroke();

                // Partículas orbitando
                cluster.dots.forEach((dot, di) => {
                    const angle = dot.angle + t * dot.speed;
                    const distPulse = dot.dist * (1 + Math.sin(t * 2 + di) * 0.2);
                    const x = cx + Math.cos(angle) * distPulse;
                    const y = cy + Math.sin(angle) * distPulse;

                    // Linha de conexão
                    ctx.beginPath();
                    ctx.moveTo(cx, cy);
                    ctx.lineTo(x, y);
                    ctx.strokeStyle = cluster.color + '25';
                    ctx.lineWidth = 1.5;
                    ctx.stroke();

                    // Partícula
                    ctx.beginPath();
                    ctx.arc(x, y, dot.size, 0, Math.PI * 2);
                    ctx.fillStyle = cluster.color;
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(x, y, dot.size * 0.5, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                    ctx.fill();
                });
            });

            this.animationFrames.set(id, requestAnimationFrame(animate));
        };

        animate();
    }

    // ANIMAÇÃO 4: SENTIMENT ANALYSIS - Pílulas com emojis
    sentimentAnalysis(canvas, id) {
        const ctx = canvas.getContext('2d');
        const w = canvas.width / (window.devicePixelRatio || 1);
        const h = canvas.height / (window.devicePixelRatio || 1);
        const start = Date.now();

        const pills = [
            { x: 0.23, y: 0.5, width: 70, color: this.config.colors.green, emoji: '😊', value: 0.85 },
            { x: 0.5, y: 0.5, width: 65, color: this.config.colors.orange, emoji: '😐', value: 0.65 },
            { x: 0.77, y: 0.5, width: 60, color: this.config.colors.red, emoji: '😞', value: 0.45 }
        ];

        const animate = () => {
            const t = (Date.now() - start) / 1000;
            ctx.clearRect(0, 0, w, h);

            pills.forEach((pill, i) => {
                const px = pill.x * w;
                const py = pill.y * h;
                const bounce = Math.sin(t * 2 + i * Math.PI / 3) * 5;
                const y = py + bounce;
                const height = 45;
                const width = pill.width;
                const pulse = 1 + Math.sin(t * 3 + i) * 0.08;

                // Sombra
                ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
                this.roundRect(ctx, px - width/2, py + 8, width, height * 0.3, 15);
                ctx.fill();

                // Pílula
                ctx.fillStyle = pill.color;
                this.roundRect(ctx, px - width/2, y - height/2, width * pulse, height, height/2);
                ctx.fill();

                // Brilho superior
                const grad = ctx.createLinearGradient(px, y - height/2, px, y);
                grad.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
                grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.fillStyle = grad;
                this.roundRect(ctx, px - width/2, y - height/2, width * pulse, height/2, height/2);
                ctx.fill();

                // Emoji
                ctx.font = '28px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = 'white';
                ctx.fillText(pill.emoji, px, y);
            });

            this.animationFrames.set(id, requestAnimationFrame(animate));
        };

        animate();
    }

    // ANIMAÇÃO 5: PRICE PREDICTION - Gráfico crescente com animação progressiva
    pricePrediction(canvas, id) {
        const ctx = canvas.getContext('2d');
        const w = canvas.width / (window.devicePixelRatio || 1);
        const h = canvas.height / (window.devicePixelRatio || 1);
        const start = Date.now();
        
        const dataPoints = [
            { x: 0.12, y: 0.75 }, { x: 0.25, y: 0.68 }, { x: 0.35, y: 0.70 },
            { x: 0.48, y: 0.58 }, { x: 0.60, y: 0.52 }, { x: 0.72, y: 0.45 },
            { x: 0.88, y: 0.28 }
        ];
        
        const animate = () => {
            const t = (Date.now() - start) / 1000;
            ctx.clearRect(0, 0, w, h);
            
            // Progresso da linha (desenha gradualmente)
            const drawProgress = (t % 5) / 5; // Ciclo de 5 segundos
            const visiblePoints = Math.floor(drawProgress * dataPoints.length) + 1;
            
            // Grid de fundo sutil
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
            ctx.lineWidth = 1;
            for (let i = 1; i < 4; i++) {
                const y = (h / 4) * i;
                ctx.beginPath();
                ctx.moveTo(w * 0.1, y);
                ctx.lineTo(w * 0.9, y);
                ctx.stroke();
            }
            
            // Área de preenchimento com gradiente
            if (visiblePoints > 1) {
                const areaGrad = ctx.createLinearGradient(0, 0, 0, h);
                areaGrad.addColorStop(0, this.config.colors.blue + '40');
                areaGrad.addColorStop(0.5, this.config.colors.blue + '20');
                areaGrad.addColorStop(1, this.config.colors.blue + '00');
                
                ctx.fillStyle = areaGrad;
                ctx.beginPath();
                ctx.moveTo(dataPoints[0].x * w, h);
                
                for (let i = 0; i < visiblePoints && i < dataPoints.length; i++) {
                    const p = dataPoints[i];
                    ctx.lineTo(p.x * w, p.y * h);
                }
                
                if (visiblePoints < dataPoints.length) {
                    const prevPoint = dataPoints[visiblePoints - 1];
                    const nextPoint = dataPoints[visiblePoints];
                    const localProgress = (drawProgress * dataPoints.length) % 1;
                    const interpX = prevPoint.x + (nextPoint.x - prevPoint.x) * localProgress;
                    const interpY = prevPoint.y + (nextPoint.y - prevPoint.y) * localProgress;
                    ctx.lineTo(interpX * w, interpY * h);
                }
                
                const lastVisible = Math.min(visiblePoints - 1, dataPoints.length - 1);
                ctx.lineTo(dataPoints[lastVisible].x * w, h);
                ctx.closePath();
                ctx.fill();
            }
            
            // Linha principal grossa e suave
            ctx.strokeStyle = this.config.colors.blue;
            ctx.lineWidth = 4;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.shadowColor = this.config.colors.blue + '80';
            ctx.shadowBlur = 10;
            
            ctx.beginPath();
            for (let i = 0; i < visiblePoints && i < dataPoints.length; i++) {
                const p = dataPoints[i];
                const x = p.x * w;
                const y = p.y * h;
                
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            
            // Interpolação suave para o ponto sendo desenhado
            if (visiblePoints < dataPoints.length) {
                const prevPoint = dataPoints[visiblePoints - 1];
                const nextPoint = dataPoints[visiblePoints];
                const localProgress = (drawProgress * dataPoints.length) % 1;
                const interpX = prevPoint.x + (nextPoint.x - prevPoint.x) * localProgress;
                const interpY = prevPoint.y + (nextPoint.y - prevPoint.y) * localProgress;
                ctx.lineTo(interpX * w, interpY * h);
            }
            
            ctx.stroke();
            ctx.shadowBlur = 0;
            
            // Pontos de dados com animação
            for (let i = 0; i < visiblePoints && i < dataPoints.length; i++) {
                const p = dataPoints[i];
                const x = p.x * w;
                const y = p.y * h;
                const isLast = (i === visiblePoints - 1) && visiblePoints <= dataPoints.length;
                const pulse = isLast ? 1 + Math.sin(t * 4) * 0.3 : 1;
                
                // Halo pulsante no último ponto
                if (isLast) {
                    ctx.beginPath();
                    ctx.arc(x, y, 12 * pulse, 0, Math.PI * 2);
                    ctx.fillStyle = this.config.colors.blue + '30';
                    ctx.fill();
                }
                
                // Círculo externo
                ctx.beginPath();
                ctx.arc(x, y, 6, 0, Math.PI * 2);
                ctx.fillStyle = this.config.colors.blue;
                ctx.fill();
                
                // Borda branca
                ctx.beginPath();
                ctx.arc(x, y, 6, 0, Math.PI * 2);
                ctx.strokeStyle = 'white';
                ctx.lineWidth = 2.5;
                ctx.stroke();
                
                // Centro branco brilhante
                ctx.beginPath();
                ctx.arc(x, y, 3, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                ctx.fill();
            }
            
            // Seta indicadora no final (quando completar)
            if (visiblePoints >= dataPoints.length) {
                const lastPoint = dataPoints[dataPoints.length - 1];
                const arrowX = lastPoint.x * w + 20;
                const arrowY = lastPoint.y * h - 15;
                const bounce = Math.sin(t * 3) * 3;
                
                // Seta
                ctx.fillStyle = this.config.colors.green;
                ctx.beginPath();
                ctx.moveTo(arrowX, arrowY + bounce);
                ctx.lineTo(arrowX - 8, arrowY + 10 + bounce);
                ctx.lineTo(arrowX + 8, arrowY + 10 + bounce);
                ctx.closePath();
                ctx.fill();
                
                // Traço da seta
                ctx.strokeStyle = this.config.colors.green;
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(arrowX, arrowY + 10 + bounce);
                ctx.lineTo(arrowX, arrowY + 20 + bounce);
                ctx.stroke();
            }
            
            this.animationFrames.set(id, requestAnimationFrame(animate));
        };
        
        animate();
    }

    // ANIMAÇÃO 6: EXECUTIVE DASHBOARD - Cards com métricas
    executiveDashboard(canvas, id) {
        const ctx = canvas.getContext('2d');
        const w = canvas.width / (window.devicePixelRatio || 1);
        const h = canvas.height / (window.devicePixelRatio || 1);
        const start = Date.now();

        const cards = [
            { x: 0.19, y: 0.3, w: 65, h: 38, color: this.config.colors.blue },
            { x: 0.5, y: 0.3, w: 65, h: 38, color: this.config.colors.cyan },
            { x: 0.81, y: 0.3, w: 50, h: 38, color: this.config.colors.green }
        ];

        const barCard = { x: 0.5, y: 0.7, w: w * 0.8, h: 35 };

        const animate = () => {
            const t = (Date.now() - start) / 1000;
            ctx.clearRect(0, 0, w, h);

            // Cards superiores
            cards.forEach((card, i) => {
                const cx = card.x * w;
                const cy = card.y * h + Math.sin(t * 2 + i) * 3;

                // Sombra
                ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
                this.roundRect(ctx, cx - card.w/2 + 2, cy - card.h/2 + 2, card.w, card.h, 8);
                ctx.fill();

                // Card
                ctx.fillStyle = card.color;
                this.roundRect(ctx, cx - card.w/2, cy - card.h/2, card.w, card.h, 8);
                ctx.fill();

                // Brilho
                const grad = ctx.createLinearGradient(cx, cy - card.h/2, cx, cy);
                grad.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
                grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.fillStyle = grad;
                this.roundRect(ctx, cx - card.w/2, cy - card.h/2, card.w, card.h/2, 8);
                ctx.fill();
            });

            // Barra inferior
            const barY = barCard.y * h;
            const barH = barCard.h;
            const progress = (Math.sin(t * 0.8) * 0.3 + 0.6);

            // Fundo da barra
            ctx.fillStyle = this.config.colors.orange;
            this.roundRect(ctx, w * 0.1, barY - barH/2, barCard.w, barH, barH/2);
            ctx.fill();

            // Indicador circular
            const indicatorX = w * 0.1 + barCard.w * progress;
            const pulse = 1 + Math.sin(t * 3) * 0.15;
            ctx.beginPath();
            ctx.arc(indicatorX, barY, 16 * pulse, 0, Math.PI * 2);
            ctx.fillStyle = this.config.colors.red;
            ctx.fill();
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 3;
            ctx.stroke();

            this.animationFrames.set(id, requestAnimationFrame(animate));
        };

        animate();
    }

    // Utilidades
    roundRect(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.arcTo(x + w, y, x + w, y + r, r);
        ctx.lineTo(x + w, y + h - r);
        ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
        ctx.lineTo(x + r, y + h);
        ctx.arcTo(x, y + h, x, y + h - r, r);
        ctx.lineTo(x, y + r);
        ctx.arcTo(x, y, x + r, y, r);
        ctx.closePath();
    }

    ease(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    destroy() {
        this.animationFrames.forEach(frame => cancelAnimationFrame(frame));
        this.animationFrames.clear();
    }
}

// Inicialização e controle de visibilidade
let portfolioAnim = null;

function initPortfolioAnimations() {
    if (!portfolioAnim) {
        portfolioAnim = new PortfolioAnimations();
    }
}

document.addEventListener('visibilitychange', () => {
    if (portfolioAnim) {
        if (document.hidden) {
            portfolioAnim.destroy();
        } else {
            portfolioAnim = null;
            initPortfolioAnimations();
        }
    }
});

// Auto-inicialização
initPortfolioAnimations();

// Export global
window.PortfolioAnimations = PortfolioAnimations;
window.initPortfolioAnimations = initPortfolioAnimations;