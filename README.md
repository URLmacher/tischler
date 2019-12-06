### Projekt 'Tischler'

# Quick Start
- Repo downloaden
- Server und MySQL starten
- erstellen Sie eine Datenbank mit dem Namen 'tischler' und der Kollation utf8_general_ci
- Datenbank von der SQL-File im Ordner database importieren
- 'npm install' im Projektordner
- Konfiguration in src/CONFIG.js*
    * baseUrl: http://localhost/ + der Pfad zum 'dist' Ordner der Installation + /
        (z.B. liegt der Folder der Installation in htdocs eines XAMPP Servers ist der Pfad: http://localhost/tischler/dist/)
    * relativeUrl: Installationsordner + /dist
        (z.B. heißt der Installationsordner 'tischler' ist der Pfad 'tischler/dist')
    * apiKey: der Api Key für Google Maps ist der Email zu entnehmen
        (bitte nicht missbrauchen)
- Konfiguration in src/backend/CONFIG.php
    * email-adress: Die Email-Adresse, über die das Kontaktformular der Website laufen soll
        (für Gmail optimiert, aktivieren Sie dazu 'Zugriff durch weniger sichere Apps: an' auf https://myaccount.google.com/lesssecureapps )
    * email-password: Das Passwort zum Email-Account
    * db-login: Der Datenbank-Benutzername
    * db-pass: Das Passwort zur Datenbank
    * db-name: Falls anders als 'tischler'
- 'npm run build:dev' im Projektordner
- Website unter http://localhost/ + der Pfad zum 'dist' Ordner der Installation + / aufrufen
- der Zugang für Superuser ist unter http://localhost/ + der Pfad zum 'dist' Ordner der Installation + /#/admin erreichbar
    (der Hashtag ist wegen dem Pushstate, der Server müsste dafür konfiguriert werden um die Links ohne # funktionieren zu lassen)
    - Login Daten SuperUser:
        * Username: admin
        * Passwort: 1111

- *Wenn Sie einen Virtual Host einrichten wollen:
    - httpd-vhosts.conf:
        * Directory/Document Root ist der Pfad zum 'dist' Ordner der Installation
        * DirectoryIndex ist index.html
    - CONFIG.js:
        * baseUrl: die gewählte VHost-Adresse
        * relativeUrl: /
- *Wenn Sie nur die Frontend-Funktionaliät begutachten möchten:
    - 'npm start' startet den Webpack-Server auf http://localhost:8080/
    - kein Zugriff auf SuperUser-Login oder Mail-Formular
    - manche Links zeigen auf die baseUrl-Varianten der Adressen
    - CORS ist im Backend deaktiviert um das Nachladen von Content zur ermöglichen

# Codebase
    - Das Frontend wurde mit dem Framework 'Aurelia' erstellt und wird mit Webpack gebundelt
    - In src/app.js erfolgt das Routing zu den Unterseiten
    - in src/app.html werden die Views gerendert
    - den Code zu den Seiten finden Sie unter src/pages und src/subpages, bestehend jeweils aus View und View-Model
    - Die Stylesheets befinden sich in src/stylesheets
    - Der PHP-Backend Code befindet sich in src/backend
    - die einzelnen Files sind als API-Endpoints gedacht
        (z.B. liefert content.php die Inhalte der Seiten von der Datenbank nach einem GET-Request)
    - anticors.php erlaubt den Zugriff auf das Backend, sollte die Seite z.B. auf einem anderen lokalen Server laufen
    - dbconnect.php beinhaltet den Zugang zur Datenbank
