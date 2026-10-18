# Carte forestière (application web installable) — depuis un iPhone, sans ordinateur

## 1. Enregistrer les fichiers
Dans Claude, ouvre chaque fichier de ce dossier et enregistre-le dans l’app **Fichiers** :
`index.html`, `sw.js`, `maplibre-gl.js`, `maplibre-gl.css`, `manifest.webmanifest`, `icon-180.png`, `icon-192.png`, `icon-512.png`.

## 2. Les publier gratuitement (GitHub Pages)
1. Dans Safari : github.com → créer un compte gratuit.
2. **New repository** → nom : `foret` → **Public** → Create.
3. **uploading an existing file** → choisir les 8 fichiers dans Fichiers → **Commit changes**.
4. **Settings → Pages** → Branch : `main`, dossier `/ (root)` → Save.
5. Après 1 à 2 minutes, l’adresse est `https://TON-NOM.github.io/foret/`.

## 3. L’installer
Ouvre l’adresse dans **Safari** → bouton Partager → **Sur l’écran d’accueil**.
Ouvre ensuite l’app depuis l’icône (pas depuis Safari) : le stockage hors-ligne y est plus fiable.

## 4. Utiliser
Cadre la zone voulue (zoom 11 ou 12 convient bien), touche **Télécharger cette zone**, choisis le détail, puis attends la fin.
Coupe ensuite le Wi-Fi et les données mobiles pour vérifier que la carte s’affiche toujours.

## Limites à connaître
- iOS peut effacer les données d’un site peu utilisé. Ouvre l’app de temps en temps et re-télécharge avant une sortie importante.
- La fiche d’un peuplement (toucher la carte) demande une connexion.
- Si le message « CORS » apparaît au téléchargement, le serveur du gouvernement refuse la copie hors-ligne depuis un site web. Dans ce cas, il faudra passer par l’application native.
- Les noms de couches (`sentinel_2019`, `ori_pee_close_scale`) sont en haut du script, dans `index.html`, sous « À AJUSTER ICI ».
