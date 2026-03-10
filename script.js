const exercises = [
    { id: 1, title: "Étude de la fonction ln(x)/x", cat: "Analyse", key: "Utiliser la limite de croissance comparée en +inf.", sol: "La dérivée est (1-lnx)/x². f est croissante sur ]0, e[...", premium: false },
    { id: 2, title: "Matrice et Puissance n-ième", cat: "Algèbre", key: "Diagonaliser la matrice pour obtenir P.D^n.P⁻¹", sol: "On trouve les valeurs propres λ1=1 et λ2=2...", premium: true },
    { id: 3, title: "Tirages successifs sans remise", cat: "Probabilités", key: "Utiliser les arrangements A(n,k) ou les combinaisons.", sol: "P(A) = Cas favorables / Cas possibles...", premium: false },
    { id: 4, title: "Intégrale de cos²(x)", cat: "Analyse", key: "Linéariser cos²(x) = (1 + cos(2x)) / 2", sol: "L'intégrale devient (1/2)x + (1/4)sin(2x) + C...", premium: false },
    { id: 5, title: "Théorème de Bolzano-Weierstrass", cat: "Analyse", key: "Toute suite bornée possède une sous-suite convergente.", sol: "Démonstration par dichotomie de l'intervalle...", premium: true },
    { id: 6, title: "Complexes : Triangle équilatéral", cat: "Algèbre", key: "Vérifier que (z1-z2)/(z3-z2) = e^(iπ/3)", sol: "Calculer l'argument du rapport des affixes...", premium: false },
    { id: 7, title: "Loi de Poisson", cat: "Probabilités", key: "Utiliser P(X=k) = (λ^k * e^-λ) / k!", sol: "Calculer λ comme l'espérance de l'événement...", premium: false },
    { id: 8, title: "Continuité en un point", cat: "Analyse", key: "Vérifier que lim f(x) = f(x0) à gauche et à droite.", sol: "Calculer les limites latérales et comparer...", premium: false },
    { id: 9, title: "Noyau et Image (Ker/Im)", cat: "Algèbre", key: "Théorème du rang : dim Ker(f) + dim Im(f) = dim E", sol: "Résoudre f(u) = 0 pour trouver le Ker...", premium: true },
    { id: 10, title: "Dérivée de Arctan(u)", cat: "Analyse", key: "Formule : u' / (1 + u²)", sol: "Poser u=f(x) et appliquer la règle de chaîne...", premium: false },
    { id: 11, title: "Intégration par parties : ln(x)", cat: "Analyse", key: "Poser u = ln(x) et v' = 1", sol: "On obtient x.ln(x) - x + C...", premium: false },
    { id: 12, title: "Polynôme de Bernoulli", cat: "Algèbre", key: "Utiliser la formule de récurrence B_n(x+1) - B_n(x)", sol: "Par identification des coefficients...", premium: true },
    { id: 13, title: "Espérance et Variance", cat: "Probabilités", key: "E(X) = Σ xi.pi et V(X) = E(X²) - E(X)²", sol: "Dresser le tableau de la loi de probabilité...", premium: false },
    { id: 14, title: "Développement de (a+b)^n", cat: "Algèbre", key: "Utiliser le Binôme de Newton", sol: "Les coefficients sont donnés par le triangle de Pascal...", premium: false },
    { id: 15, title: "Limite de (sin x)/x en 0", cat: "Analyse", key: "Utiliser le taux d'accroissement de sin en 0", sol: "La limite vaut 1 (résultat fondamental)...", premium: false },
    { id: 16, title: "Séries Numériques", cat: "Analyse", key: "Critère de d'Alembert : lim |u_n+1 / u_n|", sol: "Si L < 1, la série converge absolument...", premium: true },
    { id: 17, title: "Produit vectoriel", cat: "Algèbre", key: "Le résultat est un vecteur orthogonal au plan", sol: "Utiliser la règle du déterminant (i, j, k)...", premium: false },
    { id: 18, title: "Fonction de densité", cat: "Probabilités", key: "L'intégrale sur l'intervalle doit être égale à 1", sol: "Chercher la primitive et calculer les bornes...", premium: false },
    { id: 19, title: "Suites de Fibonacci", cat: "Analyse", key: "Étudier l'équation caractéristique r² - r - 1 = 0", sol: "L'expression dépend du nombre d'or φ...", premium: true },
    { id: 20, title: "Primitive de e^(2x)", cat: "Analyse", key: "Formule : (1/a)e^(ax)", sol: "La réponse est (1/2)e^(2x) + C...", premium: false }
];

const listEl = document.getElementById('exerciseList');
const detailEl = document.getElementById('exerciseDetail');
const searchInput = document.getElementById('searchInput');

function render(data) {
    listEl.innerHTML = data.map(ex => `
        <div class="ex-item" onclick="show(${ex.id})">
            <span class="cat-tag ${ex.cat}">${ex.cat}</span>
            <h4>${ex.title} ${ex.premium ? '<i class="fas fa-lock" style="color:#f59e0b"></i>' : ''}</h4>
        </div>
    `).join('');
}

function show(id) {
    const ex = exercises.find(e => e.id === id);
    if (ex.premium) {
        detailEl.innerHTML = `
            <div style="text-align:center; padding-top:50px">
                <i class="fas fa-crown" style="font-size:50px; color:#f59e0b"></i>
                <h2 style="margin:20px 0">Exercice Premium</h2>
                <p>La clé et la correction détaillée sont réservées aux membres.</p>
                <button class="btn btn-primary" style="margin-top:20px">Débloquer (49 DH)</button>
            </div>`;
    } else {
        detailEl.innerHTML = `
            <span class="cat-tag ${ex.cat}">${ex.cat}</span>
            <h2 style="margin:10px 0">${ex.title}</h2>
            <div style="background:#f8fafc; padding:20px; border-left:4px solid #2563eb; margin:20px 0">
                <h4 style="color:#2563eb"><i class="fas fa-lightbulb"></i> L'Idée Clé</h4>
                <p>${ex.key}</p>
            </div>
            <h4><i class="fas fa-pen-fancy"></i> Correction</h4>
            <p>${ex.sol}</p>`;
    }
}

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    render(exercises.filter(ex => ex.title.toLowerCase().includes(term) || ex.cat.toLowerCase().includes(term)));
});

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        const cat = btn.dataset.cat;
        render(cat === 'Tous' ? exercises : exercises.filter(ex => ex.cat === cat));
    });
});

render(exercises);