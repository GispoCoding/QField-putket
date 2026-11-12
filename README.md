# QField-putket

Helsingin pohjavesiseurannan QGIS- ja QField-ohjeisto. Julkaistu sivusto:
[gispocoding.github.io/QField-putket](https://gispocoding.github.io/QField-putket/).

## Paikallinen kehitys

Projektin dokumentaatio rakennetaan Zensicalilla. Asenna ensin [uv](https://docs.astral.sh/uv/getting-started/installation/) ja siirry tämän projektin juurikansioon.

Asenna projektin dokumentaation riippuvuudet:

```powershell
uv sync --group docs
```

Käynnistä paikallinen esikatselu:

```powershell
uv run zensical serve
```

Avaa selaimessa osoite, jonka komento näyttää (yleensä `http://127.0.0.1:8000/`). Palvelin päivittyy, kun dokumentaatioon tehdään muutoksia. Pysäytä se painamalla `Ctrl+C`.

Rakenna staattinen sivusto paikallisesti:

```powershell
uv run zensical build --clean
```

Rakennettu sivusto tallennetaan `site/`-kansioon. Älä lisää sitä versionhallintaan; GitHub Actions rakentaa ja julkaisee sivuston automaattisesti, kun muutokset yhdistetään `main`-haaraan.

## Lisätietoja

- [Zensicalin käyttöohje](https://zensical.org/docs/)
- [Zensicalin GitHub Pages -julkaisuohje](https://zensical.org/docs/publish-your-site/)
