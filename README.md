# JS_sortingAlgorithm
Base pour l'algorithme de tri pour la période alternance du campus numérique

### Cloner le dépot Git.

```
mkdir [REPERTOIRE]
cd [REPERTOIRE]
git clone https://github.com/cultureweb/JS_sortingAlgorithm.git .
```

### Lancer un serveur

```
php -S localhost:8123
```
## Tri par insertion
Le tri par insertion est un algorithme de tri simple qui construit le tableau final trié (ou la liste), un élément à la fois. Il est beaucoup moins efficace sur les grandes listes que des algorithmes plus avancés tels que le tri rapide, le tri massif ou le tri par fusion.

![](images/insertion.gif)

## Tri de sélection
Le tri par sélection est un algorithme de tri, en particulier un tri par comparaison sur place. Il a une complexité temporelle en O (n2), ce qui le rend inefficace sur les grandes listes et est généralement moins performant que le type d'insertion similaire. Le type de sélection se distingue par sa simplicité et présente des avantages en termes de performances par rapport à des algorithmes plus complexes dans certaines situations, notamment lorsque la mémoire auxiliaire est limitée.

![](images/selectSort.gif)

## Tri de Shell
Le tri de Shell est une amélioration du tri par insertion en observant deux choses :
Le tri par insertion est efficace si la liste est à peu près triée

![](images/Sorting_shellsort_anim.gif)


## Tri rapide
Quicksort est un algorithme de division et de conquête. Quicksort commence par diviser un grand tableau en deux sous-tableaux plus petits: les éléments bas et les éléments hauts. Quicksort peut alors trier récursivement les sous-tableaux

Les étapes sont les suivantes:

Choisissez un élément, appelé pivot, dans le tableau.
Partitionnement: réorganisez le tableau de sorte que tous les éléments dont la valeur est inférieure au pivot soient placés avant le pivot, tandis que tous les éléments dont la valeur est supérieure au pivot le suivent (des valeurs égales peuvent aller dans les deux sens). Après ce partitionnement, le pivot est dans sa position finale. C'est ce qu'on appelle l'opération de partition.
Appliquez récursivement les étapes ci-dessus au sous-tableau d'éléments avec des valeurs plus petites et séparément au sous-tableau d'éléments avec des valeurs plus grandes.
Visualisation animée de l'algorithme quicksort. Les lignes horizontales sont des valeurs de pivot.

![](images/quicksearch.gif)

## Tri de tas(Heapsort)
Heapsort est un algorithme de tri basé sur la comparaison. Heapsort peut être considéré comme un type de sélection amélioré: comme cet algorithme, il divise son entrée en une région triée et une région non triée, et réduit de manière itérative la région non triée en extrayant le plus grand élément et en le déplaçant vers la région triée. L’amélioration consiste à utiliser une structure de données en tas plutôt qu’une recherche dans le temps linéaire pour trouver le maximum.

![](images/tri_de_tas.gif)
