# React + Vite
# Employee Management System

L'Employee Management System est une application React qui vous permet de visualiser une liste d'employés et d'ajouter de nouveaux employés au système. Il comprend deux composants principaux : `EmployeeList` pour afficher la liste des employés et `CreateEmployee` pour ajouter de nouveaux employés.

## Table des matières

- [Pour commencer](#pour-commencer)
  - [Prérequis](#prérequis)
  - [Installation](#installation)
  - [Exécution de l'application](#exécution-de-lapplication)
- [Composants](#composants)
  - [Composant `EmployeeList`](#composant-employeelist)
  - [Composant `CreateEmployee`](#composant-createemployee)
- [Utilisation](#utilisation)
- [Contributions](#contributions)
- [Licence](#licence)

## Pour commencer

### Prérequis

Avant de commencer, assurez-vous d'avoir satisfait aux exigences suivantes :

- Node.js et npm installés sur votre machine de développement.

### Installation

1. Clonez le dépôt sur votre machine locale :

   ```bash
   git clone <url-du-dépôt>
   ```

2. Accédez au répertoire du projet :

   ```bash
   cd <nom-du-dossier>
   ```
   
3. Installez les dépendances du projet :

   ```bash
   npm install
   ```



# Exécution de l'application

Pour exécuter l'application Employee Management System, suivez ces étapes :

1. Démarrez le serveur de développement :

2. Ouvrez votre navigateur web et accédez à http://localhost:5173 pour accéder à l'application.

# Composants
## Composant EmployeeList
Le composant EmployeeList est responsable de l'affichage d'un tableau d'employés. Il utilise le composant EmployeeTable pour afficher les données des employés. Les données des employés sont extraites d'un magasin Redux et peuvent être triées par différentes colonnes.


## Composant CreateEmployee
Le composant CreateEmployee permet aux utilisateurs d'ajouter de nouveaux employés au système. Les utilisateurs peuvent saisir des informations personnelles telles que le prénom, le nom de famille, la date de naissance, la date de début, et des détails d'adresse. Après avoir rempli les informations requises et cliqué sur le bouton "Enregistrer", le nouvel employé sera ajouté au magasin Redux.



# Utilisation
Afficher la liste des employés : Accédez à la page "Tableau des Employés" pour visualiser la liste des employés. Les données des employés sont extraites du magasin Redux et affichées sous forme de tableau. Vous pouvez trier la liste par différentes colonnes.

### Ajouter un nouvel employé :

- Accédez à la page "Créer un Employé" en cliquant sur le bouton "Ajouter un Employé" sur la page "Tableau des Employés".
Remplissez les informations personnelles et les détails d'adresse requis pour le nouvel employé.
- Sélectionnez le service dans la liste déroulante.
- Cliquez sur le bouton "Enregistrer" pour ajouter l'employé au système. L'employé sera ajouté au magasin Redux, et les champs du formulaire seront réinitialisés pour la saisie suivante.
# Contributions
Les contributions au Employee Management System sont les bienvenues. Si vous avez des améliorations, des corrections de bugs ou de nouvelles fonctionnalités à proposer, suivez ces étapes :

1. Forkez le dépôt.
2. Créez une nouvelle branche pour vos modifications :**git checkout -b feature/nom-de-votre-fonctionnalité**.
3. Effectuez vos modifications : **git commit -m "Ajoutez votre fonctionnalité"**.
4. Poussez vers la branche : **git push origin feature/nom-de-votre-fonctionnalité**.
5. Créez une demande de fusion avec une description détaillée de vos modifications.


# Licence
Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.