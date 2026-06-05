document.addEventListener("DOMContentLoaded", () => {
    
    const descriptions = {
        "Images/Logo colbert.png": "J'ai pu faire tout mon lycée à Lorient (56), dans le lycée Colbert. Diplômé d'un BAC STL (Science et Techniques de laboratoire) en 2021 avec la mention Bien",
        "Images/IUT_VANNES_LOGO-sansfondblanc-e1669819263791.png": "Puis je me suis laissé tenter par la formation du BUT Informatique à Vannes. Malheureusement cela ne m'a pas vraiment plus. J'ai donc décidé de ne pas continuer. Malgré tout j'ai pu apprendre pas mal de langages de programmation",
        "Images/IUT-LORIENT-PONTIVY-LOGO-CMJN-2_150x212.png": "Ensuite je me suis réorienté dans un domaine qui était plus cohérent par rapport à mon bac : le BUT GCGP (Génie Chimique et Génie des Procédés). Cette formation était tourné vers les procédés techniques et chimiques utilisés en industrie. J'ai pu valider tous les semestres de mon parcours.",
        "Images/Logo_ensibs.png": "Je pensais continuer les études et je me suis naturellement tourné vers une école d'ingénieur axé sur les procédés. J'ai donc choisis l'ENSIBS et la formation Génie Industriel 4.0. Cette formation est axée sur tout les domaines de l'industrie et particulièrement sur le management",
    };

    const zone = document.getElementById("description-text");

    document.addEventListener("click", (e) => {
        const nom = e.target.getAttribute("src");
        zone.textContent = descriptions[nom] || "Cliquez sur une image pour avoir sa description.";
    });
});