# Johdanto

Tämä ohje neuvoo Helsingin pohjavesiseurannan QGIS-projektin valmistelussa ja aineiston keräämisessä QFieldillä. Seuraa ohjesivuja järjestyksessä, kun valmistelet projektia ensimmäistä kertaa. Maastossa voit siirtyä suoraan kenttätyöskentelyn ohjeisiin.

## Ohjeen eteneminen

1. [Projektin valmistelu QGISissä ja vienti QFieldiin](2_projektin_valmistelu_qgississa_ja_vienti_qfieldiin.md): tarkista projektin oletusarvo- ja relaatioasetukset sekä paketoi projekti mobiililaitteelle.
2. [Lomakemääritykset](3_lomakemaaritykset.md): tutustu pohjavesipisteen ja mittaushavaintojen lomakekenttiin sekä siihen, mitä tietoja niihin tallennetaan.
3. [Kenttätyöskentely](4_kenttatyoskentely.md): avaa projekti QFieldissä, etsi ja mittaa kohteita, lisää havaintoja sekä synkronoi ja tarkista aineisto.

## Lataa QField-mobiilisovellus laitteellesi. Löydät sen laitteesi sovelluskaupasta:

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


## Aineiston rakenne lyhyesti

Projektissa pohjavesipiste ja siihen liittyvät mittaushavainnot tallennetaan omille tasoilleen:

| Taso | Sisältö | Kytkentä |
|---|---|---|
| **pohjavesipiste** (vanhempi- eli parent-taso) | Putken sijainti ja perustiedot. Pisteen yksilöivä avain on `INDEKSI`. | Pisteellä on geometria. |
| **GVESI_HAV** (lapsi- eli child-taso) | Pisteellä tehdyt mittaushavainnot. | `FK_pohjavesipiste` yhdistää havainnon oikeaan pohjavesipisteeseen. |

<img src="img/image11.png" width="1000" alt="Tietomalli">

Yhdellä pohjavesipisteellä voi olla useita mittaushavaintoja. Lomakemääritykset on kuvattu tarkemmin [lomakemääritysten sivulla](3_lomakemaaritykset.md), ja havaintojen lisääminen maastossa [kenttätyöskentelyn sivulla](4_kenttatyoskentely.md).

