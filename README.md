# gta6clip-windah-ej

A make.fun GTA 6 clipper entry featuring a Windah Basudara reaction moment. The clip was edited into a 1080x1920 vertical video with webcam footage above gameplay, word captions, and a public YouTube Short upload. `VIDEO.json` points to the published clip.

## Purpose

`main.ts` is a small Node 22 runner for the submission. It copies the repository-root `VIDEO.json` into `./output`, creating that directory when needed. Set `MAKEFUN_OUTPUT_DIR` to use a different destination.

## How to run

```sh
node main.ts
```

With a custom output directory:

```sh
MAKEFUN_OUTPUT_DIR=./submission-output node main.ts
```

## License

This project is available under the MIT License. See [LICENSE](LICENSE).

## Bounty

[make.fun GTA 6 clipper bounty](https://make.fun/bounty/gta6-clipper-01)
