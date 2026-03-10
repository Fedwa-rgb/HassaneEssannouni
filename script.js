const exercises = [

/* ================= ALGEBRE ================= */

{ id:1, title:"Résolution système 2x2", cat:"Algèbre", key:"Utiliser substitution ou combinaison.", sol:"x+y=5 , 2x−y=1 → x=2 , y=3.", premium:false },

{ id:2, title:"Déterminant matrice 2x2", cat:"Algèbre", key:"det(A)=ad−bc.", sol:"[[3,2],[1,4]] → det=10.", premium:false },

{ id:3, title:"Identité remarquable", cat:"Algèbre", key:"(a+b)²=a²+2ab+b².", sol:"(2x+3)²=4x²+12x+9.", premium:false },

{ id:4, title:"Factorisation trinôme", cat:"Algèbre", key:"Trouver deux nombres dont somme=5 et produit=6.", sol:"x²+5x+6=(x+2)(x+3).", premium:false },

{ id:5, title:"Équation second degré", cat:"Algèbre", key:"Δ=b²−4ac.", sol:"x²−5x+6=0 → x=2 et x=3.", premium:true },

{ id:6, title:"Inverse matrice", cat:"Algèbre", key:"Matrice inversible si det≠0.", sol:"A=[[1,2],[3,4]] → A⁻¹=[[-2,1],[1.5,-0.5]].", premium:true },

{ id:7, title:"Puissance matrice diagonale", cat:"Algèbre", key:"Élever les éléments diagonaux.", sol:"[[2,0],[0,3]]³=[[8,0],[0,27]].", premium:false },

{ id:8, title:"Rang matrice", cat:"Algèbre", key:"Réduction de Gauss.", sol:"[[1,2],[2,4]] → rang=1.", premium:true },

{ id:9, title:"Inéquation", cat:"Algèbre", key:"Isoler x.", sol:"3x−5>7 → x>4.", premium:false },

{ id:10, title:"Somme racines", cat:"Algèbre", key:"Somme=−b/a.", sol:"x²−7x+10 → somme=7.", premium:false },

{ id:11, title:"Produit complexes", cat:"Algèbre", key:"i²=−1.", sol:"(2+3i)(1−i)=5+i.", premium:false },

{ id:12, title:"Module complexe", cat:"Algèbre", key:"|z|=√(a²+b²).", sol:"z=3+4i → |z|=5.", premium:false },

{ id:13, title:"Équation matricielle", cat:"Algèbre", key:"Comparer coefficients.", sol:"X+[[1,2],[3,4]]=[[5,6],[7,8]] → X=[[4,4],[4,4]].", premium:false },

{ id:14, title:"Noyau application", cat:"Algèbre", key:"f(x,y)=0.", sol:"f(x,y)=x+y → Ker={(x,-x)}.", premium:true },

{ id:15, title:"Image application", cat:"Algèbre", key:"Chercher valeurs possibles.", sol:"f(x,y)=x−y → Im=ℝ.", premium:true },

{ id:16, title:"Facteurs premiers", cat:"Algèbre", key:"Division par nombres premiers.", sol:"60=2²×3×5.", premium:false },

{ id:17, title:"PGCD", cat:"Algèbre", key:"Algorithme Euclide.", sol:"PGCD(48,18)=6.", premium:false },

{ id:18, title:"Système 3 inconnues", cat:"Algèbre", key:"Élimination progressive.", sol:"Résolution par substitution.", premium:true },

{ id:19, title:"Suite arithmétique", cat:"Algèbre", key:"un=u1+(n−1)r.", sol:"u1=3,r=4 → u5=19.", premium:false },

{ id:20, title:"Suite géométrique", cat:"Algèbre", key:"un=u1q^(n−1).", sol:"u1=2,q=3 → u4=54.", premium:false },



/* ================= ANALYSE ================= */

{ id:21, title:"Limite fonction rationnelle", cat:"Analyse", key:"Diviser par x².", sol:"lim (2x²+3)/(x²−1)=2.", premium:false },

{ id:22, title:"Dérivée produit", cat:"Analyse", key:"(uv)'=u'v+uv'.", sol:"x²sin(x)'=2xsin(x)+x²cos(x).", premium:false },

{ id:23, title:"Dérivée quotient", cat:"Analyse", key:"(u/v)'=(u'v−uv')/v².", sol:"(x/(x+1))'=1/(x+1)².", premium:false },

{ id:24, title:"Variation fonction", cat:"Analyse", key:"Étudier signe f'.", sol:"f'(x)=2x → min en 0.", premium:false },

{ id:25, title:"Limite remarquable", cat:"Analyse", key:"lim sinx/x=1.", sol:"lim sin(3x)/x=3.", premium:false },

{ id:26, title:"Primitive polynôme", cat:"Analyse", key:"∫xⁿ dx=xⁿ⁺¹/(n+1).", sol:"∫(3x²+2x)=x³+x²+C.", premium:false },

{ id:27, title:"Substitution", cat:"Analyse", key:"u=x².", sol:"∫2xcos(x²)dx=sin(x²)+C.", premium:true },

{ id:28, title:"Dérivée exponentielle", cat:"Analyse", key:"(e^(ax))'=ae^(ax).", sol:"(e^(2x))'=2e^(2x).", premium:false },

{ id:29, title:"Dérivée logarithme", cat:"Analyse", key:"(lnx)'=1/x.", sol:"(ln(x²))'=2/x.", premium:false },

{ id:30, title:"Convexité", cat:"Analyse", key:"Étudier f''.", sol:"f''>0 → convexe.", premium:true },

{ id:31, title:"Croissance exponentielle", cat:"Analyse", key:"e^x domine x.", sol:"lim e^x/x=∞.", premium:false },

{ id:32, title:"Logarithme composé", cat:"Analyse", key:"Chaîne.", sol:"(ln(3x+1))'=3/(3x+1).", premium:false },

{ id:33, title:"Suite convergente", cat:"Analyse", key:"Étudier monotonie.", sol:"Suite converge vers 1.", premium:true },

{ id:34, title:"Limite factorisation", cat:"Analyse", key:"x²−1=(x−1)(x+1).", sol:"lim=2.", premium:false },

{ id:35, title:"Approximation sin", cat:"Analyse", key:"sinx≈x.", sol:"DL ordre1.", premium:true },

{ id:36, title:"Continuité", cat:"Analyse", key:"lim f(x)=f(a).", sol:"Fonction continue.", premium:false },

{ id:37, title:"Primitive cos", cat:"Analyse", key:"∫cos(x)=sin(x).", sol:"sin(x)+C.", premium:false },

{ id:38, title:"Dérivée sin(x²)", cat:"Analyse", key:"Chaîne.", sol:"2xcos(x²).", premium:false },

{ id:39, title:"Limite logarithme", cat:"Analyse", key:"lnx/x.", sol:"→0.", premium:false },

{ id:40, title:"Série géométrique", cat:"Analyse", key:"Somme=1/(1−q).", sol:"q=1/2 → somme=2.", premium:true },



/* ================= PROBABILITES ================= */

{ id:41, title:"Dé équilibré", cat:"Probabilités", key:"Cas favorables/cas possibles.", sol:"P(pair)=3/6=1/2.", premium:false },

{ id:42, title:"Pile ou face", cat:"Probabilités", key:"Issues équiprobables.", sol:"P(pile)=1/2.", premium:false },

{ id:43, title:"Somme deux dés", cat:"Probabilités", key:"36 cas possibles.", sol:"P(somme=7)=1/6.", premium:false },

{ id:44, title:"Carte roi", cat:"Probabilités", key:"4 rois.", sol:"4/52=1/13.", premium:false },

{ id:45, title:"Urne", cat:"Probabilités", key:"Proportion.", sol:"3 rouges /5 →3/5.", premium:false },

{ id:46, title:"Tirage sans remise", cat:"Probabilités", key:"Multiplier probabilités.", sol:"P(RR)=3/10.", premium:true },

{ id:47, title:"Complémentaire", cat:"Probabilités", key:"1−P(A).", sol:"0.7.", premium:false },

{ id:48, title:"Indépendance", cat:"Probabilités", key:"P(A∩B)=P(A)P(B).", sol:"0.2.", premium:false },

{ id:49, title:"Espérance", cat:"Probabilités", key:"Σxi pi.", sol:"1.5.", premium:false },

{ id:50, title:"Variance", cat:"Probabilités", key:"E(X²)-E(X)².", sol:"1.", premium:true },

{ id:51, title:"Loi binomiale", cat:"Probabilités", key:"C(n,k)p^k(1-p)^(n-k).", sol:"0.5.", premium:true },

{ id:52, title:"Somme probabilités", cat:"Probabilités", key:"Total=1.", sol:"0.2+0.3+0.5=1.", premium:false },

{ id:53, title:"Conditionnelle", cat:"Probabilités", key:"P(A|B)=P(A∩B)/P(B).", sol:"0.4.", premium:true },

{ id:54, title:"Espérance dé", cat:"Probabilités", key:"Moyenne.", sol:"3.5.", premium:false },

{ id:55, title:"Loi uniforme", cat:"Probabilités", key:"1/n.", sol:"Chaque issue=1/n.", premium:false },

{ id:56, title:"Poisson", cat:"Probabilités", key:"(λ^k e^-λ)/k!", sol:"2e^-2.", premium:true },

{ id:57, title:"Arbre probabilité", cat:"Probabilités", key:"Multiplier branches.", sol:"P(A∩B)=P(A)P(B|A).", premium:false },

{ id:58, title:"Incompatibles", cat:"Probabilités", key:"P(A)+P(B).", sol:"0.5.", premium:false },

{ id:59, title:"Loi normale", cat:"Probabilités", key:"Distribution symétrique.", sol:"moyenne=mode=médiane.", premium:true },

{ id:60, title:"Probabilité totale", cat:"Probabilités", key:"Σ P(A|Bi)P(Bi).", sol:"Formule totale.", premium:true }

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
