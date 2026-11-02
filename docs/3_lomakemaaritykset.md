# **3\. Lomakemääritykset ja kenttä-widgetit QFieldissä**

## **3.1 Pohjavesipiste (Vanhempi/Parent-lomake)**

* `INDEKSI`: Piilotettu (Hidden), oletusarvo `uuid('withoutbraces')`.  
* `NUMERO`: Tekstikenttä (pisteen tunnus).  
* `X` ja `Y`: Tekstikentät, joiden automaattiset koordinaattiarvot ovat `round($x, 4)` ja `round($y, 4)`.  
* **Mittaa-välilehti**: Sisältää relaatioviite-widgetin (Relation Reference), jossa näkyvät pisteeseen kytketyt havainnot (`GVESI_HAV`).

### **3.2 `GVESI_HAV` (Lapsi/Child-lomake / Mittaustulokset)**

`FK_pohjavesipiste`: Relaatioviite (Relation Reference), sitoo havainnon oikeaan pisteeseen.

`PAIVA`: Päivämäärä-widget (`DateTime`), oletusarvo `now()`.

`TASO` ja `SYVYYS`: Numeeriset syöttökentät vedenpinnalle ja syvyydelle.

`SYY`: Arvomappaus (`ValueMap`) mahdollisille poikkeamille.

`KOMM`: Vapaa tekstikenttä lisätiedoille.
