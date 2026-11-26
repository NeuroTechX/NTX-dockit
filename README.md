# NTX-dockit

http://ntx-dockit.readthedocs.org/en/latest/

## French

French translations live in `fr/`: `fr/index.rst` (French section headings, same page list) and one
`fr/<page>.rst` per translated page, with the same file name as the English page. The site
(neurotechx.org) publishes them under /fr; a page without a French file is shown in English with a
notice. When you change an English page, update its French file too, or say in the pull request
that the French needs updating. Sphinx skips `fr/` (see `exclude_patterns` in conf.py).
