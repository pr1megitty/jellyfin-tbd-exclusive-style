# TBD Exclusive Style (Jellyfin plugin)

TorrentBD-style 3D poster carousel for the Jellyfin home page. Uses Primary (poster) images.
Based on lachlandcp's Editor's Choice plugin (MIT).

## Install

1. In Jellyfin go to Dashboard > Plugins > Repositories > +
2. Add this repository URL:

```
https://raw.githubusercontent.com/pr1megitty/jellyfin-tbd-exclusive-style/main/manifest.json
```

3. Open the Catalog tab, install **TBD Exclusive Style**, then restart Jellyfin.
4. Recommended: also install **File Transformation** from
   `https://www.iamparadox.dev/jellyfin/plugins/manifest.json`

## Release a new version

GitHub > Actions > "Build & Release" > Run workflow (use a new version number each time).
