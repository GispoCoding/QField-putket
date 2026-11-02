# **2\. Projektin valmistelu QGISissä ja vienti QFieldiin**

## **2.1 Projektiasetukset QGISissä**

#### 1. **Oletusarvojen laskenta lokaalisti:**  
   * Avaa *Projekti → Ominaisuudet → Tietolähteet* (Project → Properties → Data Sources).  
   * Varmista, että **"Arvioi oletusarvot tarjoajan puolella"** (Evaluate default values on provider side) on **POIS PÄÄLTÄ** WFS-tasoilta.  

!!! note "Huomio"
    Tämä pakottaa QFieldin luomaan uniikin tunnisteen (`uuid('withoutbraces')`) välittömästi laitteen muistiin uutta kohdetta luotaessa.

#### 2. **Relaatioiden tarkistus:**  
   * Avaa *Projekti → Ominaisuudet → Relaatiot*.  
   * Varmista, että vanhempitason `INDEKSI`-kenttä kytkeytyy lapsitason `FK_pohjavesipiste`-kenttään.



## **2.2 Projektin paketointi QFieldSync-lisäosalla**

1. Avaa QGISissä **QFieldSync**-työkalu (*Lisäosat → QFieldSync*).  
2. Avaa *Project Properties → QField* ja määritä tasokohtaiset toiminnot:  
   * **pohjavesipiste (WFS/PostGIS):** Aseta *Offline editing* (tai *Direct working*, jos suora verkkoyhteys kantaan on käytössä).  
   * **GVESI_HAV (WFS/PostGIS):** Aseta *Offline editing* (tai *Direct working*).  
3. Suorita paketointi valitsemalla **Package for QField**.  
4. Kopioi muodostunut projektikansio mobiililaitteeseen (USB-kaapelilla tai QFieldCloudin kautta).
