document.addEventListener("DOMContentLoaded", () => {
    
    const descriptions = {
        "Images/albea.png": "Albéa est un leader mondial dans la conception et la fabrication d'emballages pour les secteurs de la cosmétique, de la parfumerie et des soins personnels. J'y ai découvert les processus industriels liés à la production de produits de beauté lors d'un stage en deuxième année de BUT.",
        "Images/fonderie de bretagne.png": "La Fonderie de Bretagne est spécialisée dans la fabrication de pièces en fonte destinées principalement à l'industrie automobile. Cette expérience m'a permis d'observer les étapes de moulage, de fusion et de contrôle qualité. J'y ai travaillé pentant le début de ma 3ème année de BUT GCGP en alternance, or l'entreprise s'est faite placée en redressement judiciare. Mon alternance s'est arrétée prématurément et j'ai donc dû chercher un stage pour finir l'année.",
        "Images/atmus.png": "J'ai pu trouver un stage pour ma fin de BUT à Atmus Filtration. Atmus Filtration développe et produit des systèmes de filtration pour moteurs et équipements industriels. J'ai pu découvrir les méthodes de production ainsi que l'importance de la qualité et de l'innovation dans le domaine de la filtration d'air de véhicules.",
        "Images/Logo-Armor-Proteines.png": "Depuis septembre 2025 j'ai intégré le parcours en école d'ingénieur. Pour poursuivre ma formation j'ai trouvé une alternance au sein d'Armor Protéines. Cette entreprise est spécialisée dans la valorisation des protéines laitières destinées aux secteurs agroalimentaire et pharmaceutique.",
    };

    const zone = document.getElementById("description-text");

    document.addEventListener("click", (e) => {
        const nom = e.target.getAttribute("src");
        zone.textContent = descriptions[nom] || "Cliquez sur une image pour avoir sa description.";
    });
});