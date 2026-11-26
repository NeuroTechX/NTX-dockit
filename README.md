# NTX-dockit

The NeuroTechX guide for chapters and student clubs. It is published at
**https://neurotechx.org/guide**: the website converts these pages every night, and the old
Read the Docs address forwards there.

Edit the `.rst` files here; changes reach the website through its nightly sync.

## French

French translations live in `fr/`: `fr/index.rst` (French section headings, same page list) and one
`fr/<page>.rst` per translated page, with the same file name as the English page. The site
(neurotechx.org) publishes them under /fr; a page without a French file is shown in English with a
notice. When you change an English page, update its French file too, or say in the pull request
that the French needs updating. Sphinx skips `fr/` (see `exclude_patterns` in conf.py).
