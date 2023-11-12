# sync

This syncs files on update from the docs dirs (`docs/en/` and `docs/zh/`)
into the dirs that Docusaurus expects to read from (`docusaurus/docs/` and
`docusaurus/i18n/docusaurus-plugin-content-docs/current/`) so that we can edit the files where they belong in local clones of the GitHub repo and
see the results as files are saved in local runs of Docusaurus.

```shell
npm install
```

```shell
mkdir -p docs/en docs/zh
```

```shell
node sync.mjs --watch
```

