-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 06. Dez 2019 um 10:47
-- Server-Version: 10.1.37-MariaDB
-- PHP-Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `tischler`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `about`
--

CREATE TABLE `about` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `img` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `about`
--

INSERT INTO `about` (`id`, `title`, `text`, `img`) VALUES
(1, 'Philosophie', 'Wir führen unseren Kunden vor Augen, wie der lebende Rohstoff Holz seine Natürlichkeit und Schönheit viele Jahre behält und ohne Chemie wirtschaftlich eingesetzt werden kann. Im Lungau wächst in einer Seehöhe zwischen 1000 und 1700 m das Holz sehr langsam und gewinnt dadurch besondere Widerstandsfähigkeit. Hier entsteht das wertvolle, feinwüchsige Hochgebirgsholz, das wir als unser bevorzugtes Baumaterial verwenden: die \"Lungauer Lärche\". Im Erdkontakt setzen wir das natürlich resistente Robinienholz ein.', './assets/images/firma.png'),
(2, 'Team', 'Unser Unternehmen wäre nicht denkbar ohne der täglichen Leistungsbereitschaft und der fachlichen Kompetenz unserer Mitarbeiter. Nur sie garantieren den perfekten Umfang mit dem Naturprodukt Holz.', './assets/images/team.png'),
(3, 'Geschichte', 'Die STischlerei entstand aus der Friedrich Korger GmbH, die 1960 von Friedrich Korger gegründet und bis 1991 geführt wurde. In der Firma befand sich neben einem Büro auch noch eine große Werkstätte, die die benötigten Maschinen und das Werkzeug beherbergte, die für die Arbeiten notwendig waren.', './assets/images/alt.png');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `datenschutz`
--

CREATE TABLE `datenschutz` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `datenschutz`
--

INSERT INTO `datenschutz` (`id`, `title`, `text`) VALUES
(1, 'Datenschutz', 'Wir haben diese Datenschutzerklärung (Fassung 01.12.2019-111212256) verfasst, um Ihnen gemäß der Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 und dem Datenschutzgesetz (DSG) zu erklären, welche Informationen wir sammeln, wie wir Daten verwenden und welche Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite haben.'),
(2, '', 'Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr technisch klingen. Wir haben uns bei der Erstellung jedoch bemüht die wichtigsten Dinge so einfach und klar wie möglich zu beschreiben.'),
(3, 'Google Maps', 'Wir benützen auf unserer Website Google Maps der Firma Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA). Mit Google Maps können wir Ihnen Standorte besser zeigen und damit unser Service an Ihre Bedürfnisse anpassen. Durch die Verwendung von Google Maps werden Daten an Google übertragen und auf den Google-Servern gespeichert. Hier wollen wir nun genauer darauf eingehen, was Google Maps ist, warum wir diesen Google-Dienst in Anspruch nehmen, welche Daten gespeichert werden und wie Sie dies unterbinden können.'),
(4, 'Was ist Google Maps?', 'Google Maps ist ein Internet-Kartendienst der Firma Google Inc. Mit Google Maps können Sie online über einen PC, ein Tablet oder eine App genaue Standorte von Städten, Sehenswürdigkeiten, Unterkünften oder Unternehmen suchen. Wenn Unternehmen auf Google My Business vertreten sind, werden neben dem Standort noch weitere Informationen über die Firma angezeigt. Um die Anfahrtsmöglichkeit anzuzeigen, können Kartenausschnitte eines Standorts mittels HTML-Code in eine Website eingebunden werden. Google Maps zeigt die Erdoberfläche als Straßenkarte oder als Luft- bzw. Satellitenbild. Dank der Street View Bilder und den hochwertigen Satellitenbildern sind sehr genaue Darstellungen möglich.'),
(5, 'Warum verwenden wir Google Maps auf unserer Webseite?', 'All unsere Bemühungen auf dieser Seite verfolgen das Ziel, Ihnen eine nützliche und sinnvolle Zeit auf unserer Webseite zu bieten. Durch die Einbindung von Google Maps können wir Ihnen die wichtigsten Informationen zu diversen Standorten liefern. Sie sehen auf einen Blick wo wir unseren Firmensitz haben. Die Wegbeschreibung zeigt Ihnen immer den besten bzw. schnellsten Weg zu uns. Sie können den Anfahrtsweg für Routen mit dem Auto, mit öffentlichen Verkehrsmitteln, zu Fuß oder mit dem Fahrrad abrufen. Für uns ist die Bereitstellung von Google Maps Teil unseres Kundenservice.'),
(6, 'Welche Daten werden von Google Maps gespeichert?', 'Damit Google Maps ihren Dienst vollständig anbieten kann, muss das Unternehmen Daten von Ihnen aufnehmen und speichern. Dazu zählen unter anderem die eingegebenen Suchbegriffe, Ihre IP-Adresse und auch die Breiten- bzw. Längenkoordinaten. Benutzen Sie die Routenplaner-Funktion wird auch die eingegebene Startadresse gespeichert. Diese Datenspeicherung passiert allerdings auf den Webseiten von Google Maps. Wir können Sie darüber nur informieren, aber keinen Einfluss nehmen. Da wir Google Maps in unsere Webseite eingebunden haben, setzt Google mindestens ein Cookie (Name: NID) in Ihrem Browser. Dieses Cookie speichert Daten über Ihr Userverhalten. Google nutzt diese Daten in erster Linie, um eigene Dienste zu optimieren und individuelle, personalisierte Werbung für Sie bereitzustellen.'),
(7, '', 'Folgendes Cookie wird aufgrund der Einbindung von Google Maps in Ihrem Browser gesetzt:'),
(8, '', 'Name: NID\r\nWert: 188=h26c1Ktha7fCQTx8rXgLyATyITJ111212256 Verwendungszweck: NID wird von Google verwendet, um Werbeanzeigen an Ihre Google-Suche anzupassen. Mit Hilfe des Cookies „erinnert“ sich Google an Ihre am häufigsten eingegebenen Suchanfragen oder Ihre frühere Interaktion mit Anzeigen. So bekommen Sie immer maßgeschneiderte Werbeanzeigen. Das Cookie enthält eine einzigartige ID, die Google benutzt, um Ihre persönlichen Einstellungen für Werbezwecke zu sammeln.\r\nAblaufdatum: nach 6 Monaten\r\n\r\nAnmerkung: Wir können bei den Angaben der gespeicherten Daten keine Vollständigkeit gewährleisten. Speziell bei der Verwendung von Cookies sind Veränderungen nie auszuschließen. Um das Cookie NID zu identifizieren, wurde eine eigene Testseite angelegt, wo ausschließlich Google Maps eingebunden war.'),
(9, 'Wie lange und wo werden die Daten gespeichert?', 'Die Google-Server stehen in Rechenzentren auf der ganzen Welt. Die meisten Server befinden sich allerdings in Amerika. Aus diesem Grund werden Ihre Daten auch vermehrt in den USA gespeichert. Hier können Sie genau nachlesen wo sich die Google-Rechenzentren befinden: https://www.google.com/about/datacenters/inside/locations/?hl=de\r\n\r\nDie Daten verteilt Google auf verschiedenen Datenträgern. Dadurch sind die Daten schneller abrufbar und werden vor etwaigen Manipulationsversuchen besser geschützt. Jedes Rechenzentrum hat auch spezielle Notfallprogramme. Wenn es zum Beispiel Probleme bei der Google-Hardware gibt oder eine Naturkatastrophe die Server lahm legt, bleiben die Daten ziemlich sicher trotzdem geschützt.\r\n\r\nManche Daten speichert Google für einen festgelegten Zeitraum. Bei anderen Daten bietet Google lediglich die Möglichkeit, diese manuell zu löschen. Weiters anonymisiert das Unternehmen auch Informationen (wie zum Beispiel Werbedaten) in Serverprotokollen, indem es einen Teil der IP-Adresse und Cookie-Informationen nach 9 bzw.18 Monaten löscht.'),
(10, 'Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?', 'Mit der 2019 eingeführten automatischen Löschfunktion von Standort- und Aktivitätsdaten werden Informationen zur Standortbestimmung und Web-/App-Aktivität – abhängig von Ihrer Entscheidung – entweder 3 oder 18 Monate gespeichert und dann gelöscht. Zudem kann man diese Daten über das Google-Konto auch jederzeit manuell aus dem Verlauf löschen. Wenn Sie Ihre Standorterfassung vollständig verhindern wollen, müssen Sie im Google-Konto die Rubrik „Web- und App-Aktivität“ pausieren. Klicken Sie „Daten und Personalisierung“ und dann auf die Option „Aktivitätseinstellung“. Hier können Sie die Aktivitäten ein- oder ausschalten.\r\n\r\nIn Ihrem Browser können Sie weiters auch einzelne Cookies deaktivieren, löschen oder verwalten. Je nach dem welchen Browser Sie verwenden, funktioniert dies immer etwas anders');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `impressum`
--

CREATE TABLE `impressum` (
  `id` int(11) NOT NULL,
  `text` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `impressum`
--

INSERT INTO `impressum` (`id`, `text`) VALUES
(1, 'Kehrbach 12, A-4710 Grieskirchenu'),
(2, 'Tel: 0 72 48 / 68 0 79 / Fax: DW 45'),
(3, 'E-mail: office@tischlerei-moser.at'),
(4, 'ATU 62 23 62 99 / FBNR 13 32 84g / Handelsgericht Wels');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `body_title` varchar(255) NOT NULL,
  `body_text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `products`
--

INSERT INTO `products` (`id`, `title`, `img`, `body_title`, `body_text`) VALUES
(1, 'Beratung', './assets/images/beratung.png', 'Beratung und Planung', 'Zu unseren Aufgaben zählt auch die fachgerechte und fundierte Beratung des Kunden. In puncto Material, Raumgestaltung, Design und Komfort beraten wir Sie umfassend.'),
(2, 'Interior Design', './assets/images/objektbau.png', 'Holzraum', 'Innenaustattungen aller Art sind das Herzstück unseres Angebots. Von der Küche über das Schlafzimmer bis hin zum Büro.'),
(3, 'Möbel', './assets/images/moebel.png', 'Sessel und sowas', 'Mit der Erfahrung aus Generationen gepaart mit den modernsten Technologien und Materialien, verleihen unsere Möbel ihrem Heim eine Seele und ihrer Seele ein zu Hause. Individuelle Lösungen kombiniert mit Flexibilität, als Antwort auf ihre besonderen Anforderungen.'),
(4, 'Kunst', './assets/images/holzkunst.png', 'Neue Ideen', 'Altes zu erhalten und im neuen Glanz erstrahlen zu lassen, sowie die Leidenschaft ihre speziellen Wünsche zu verwirklichen, ist unsere besondere Stärke');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `superuser`
--

CREATE TABLE `superuser` (
  `superuser_id` int(11) NOT NULL,
  `superuser_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `superuser`
--

INSERT INTO `superuser` (`superuser_id`, `superuser_name`, `password`) VALUES
(1, 'admin', '$2y$10$.ziXnXbYfY.5s17aNORGnuyeIDOD8wbKTtD/.yaNSpQ.JlLC7ElJK'),
(2, 'testuser', '$2y$07$BCryptRequires22Chrcte/VlQH0piJtjXl.0t1XkA8pw9dMXTpOq');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `datenschutz`
--
ALTER TABLE `datenschutz`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `impressum`
--
ALTER TABLE `impressum`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `superuser`
--
ALTER TABLE `superuser`
  ADD PRIMARY KEY (`superuser_id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `about`
--
ALTER TABLE `about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `datenschutz`
--
ALTER TABLE `datenschutz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT für Tabelle `impressum`
--
ALTER TABLE `impressum`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT für Tabelle `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT für Tabelle `superuser`
--
ALTER TABLE `superuser`
  MODIFY `superuser_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
