# **1. Alkuvalmistelu**

## Lataa QField-mobiilisovellus laitteellesi

Lataa QField laitteesi sovelluskaupasta:

<a href="https://apps.apple.com/us/app/qfield-for-qgis/id1531726814" target="_blank" rel="noopener noreferrer"> <img src="img/app_store_badge_black.svg" alt="Download on the App Store" width="120"/> </a><a href="https://play.google.com/store/apps/details?id=ch.opengis.qfield" target="_blank" rel="noopener noreferrer"> <img src="img/google-play-badge.png" alt="Get it on Google Play" width="120"/> </a><a href="https://apps.microsoft.com/detail/xp99h3bcx4bw7f?hl=fi-FI&gl=FI" target="_blank" rel="noopener noreferrer"> <img src="img/app_download_windows.png" alt="Available on Windows" width="120"/> </a>

## **Tuetut käyttöjärjestelmäversiot**

QFieldin mobiilisovelluksen vähimmäiskäyttöjärjestelmäversiot:

| Laite | Vähimmäisversio |
|---|---|
| Android-puhelin tai -tabletti | Android 9 (API-taso 28) |
| iPhone | iOS 17.0 |
| iPad | iPadOS 17.0 |

QField ei ilmoita virallisia vähimmäisvaatimuksia laitteen muistille tai suorittimelle. Käytännön laitevalintaa varten suositus on:

| Ominaisuus | Käytännön suositus |
|---|---|
| Keskusmuisti (RAM) | Vähintään 4 Gt; vähintään 6 Gt on suositeltava suurille offline-kartoille tai rasteriaineistoille. |
| Suoritin | Nykyaikainen 64-bittinen, vähintään neliytiminen suoritin. Pelkkä ytimien määrä ei takaa suorituskykyä, joten testaa laite käytettävän projektin kanssa. |
| Tallennustila | Vapaata tilaa vähintään projektin, offline-aineistojen ja kentällä kerättävien liitteiden tarpeisiin. |

Nämä ovat yleisiä käyttösuosituksia, eivät QFieldin virallisia laitevaatimuksia. Suuret rasterit, taustakartat ja valokuvat voivat vaatia enemmän muistia ja tallennustilaa. Testaa projektin avaaminen, kartan käyttö ja tietojen tallennus valitulla laitteella ennen maastotyötä.

Vaatimukset voivat muuttua sovellusversioiden päivittyessä. Tarkista ajantasaiset tiedot [Google Playsta](https://play.google.com/store/apps/details?id=ch.opengis.qfield) tai [App Storesta](https://apps.apple.com/app/qfield-for-qgis/id1531726814). Androidin API-taso perustuu [QFieldin lähdekoodiin](https://github.com/opengisch/QField/blob/master/cmake/Platform.cmake).

# **1. Projektin avaaminen QFieldiin**

Lataa [projektin ZIP-tiedosto](https://drive.google.com/uc?export=download&id=1JRZVbvCjtMF9B2ox4LwmL-OoaOM6lCo-) puhelimeesi. Tiedosto latautuu suoraan linkistä.

1. Avaa QField ja valitse **Avaa paikallinen tiedosto**.
2. Napsauta oikean alakulman <img src="img/image8.png" width="30" alt="QFieldin muokkaustilan kytkeminen päälle"> painiketta ja valitse **Tuo projekti ZIP-tiedostosta**.
3. Etsi juuri ladattu tiedosto. Se löytyy yleensä Lataukset- tai Downloads-kansiosta.
4. Jos QField löytää vanhan version, valitse **Tuonti ja päällekirjoitus**.
5. Valitse ensin Hakemisto-kohdasta **Hki-pohjavesi_projektitiedosto_v1** ja sen jälkeen Projektit-kohdasta projektitiedosto **Hki-pohjavesi_projektitiedosto**.
