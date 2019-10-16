# semantic-release-lonny-config

[**semantic-release**](https://github.com/semantic-release/semantic-release) shareable config to publish npm packages with [GitHub](https://github.com).

## Plugins

This shareable configuration uses the following plugins:

- [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer)
- [`@semantic-release/release-notes-generator`](https://github.com/semantic-release/release-notes-generator)
- [`@semantic-release/npm`](https://github.com/semantic-release/npm)
- [`@semantic-release/github`](https://github.com/semantic-release/github)
- [`@semantic-release/git`](https://github.com/semantic-release/git)

## Summary

- Provides an informative [git](https://github.com/semantic-release/git) commit message for the release commit that does not trigger continuous integration and conforms to the [conventional commits specification](https://www.conventionalcommits.org/) (e.g., "chore(release): 1.2.3 [skip ci]\n\nnotes").
- Creates a tarball that gets uploaded with each [GitHub release](https://github.com/semantic-release/github).
- Publishes the same tarball to [npm](https://github.com/semantic-release/npm).
- Commits the version change in `package.json`.
- Creates or updates a [changelog](https://github.com/semantic-release/changelog) file.

## Install

```bash
$ npm install --save-dev semantic-release semantic-release-lonny-config
```

## Usage

The shareable config can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "extends": "semantic-release-lonny-config",
  "branch": "master"
}
```

## Configuration

Ensure that your CI configuration has the following **_secret_** environment variables set:
- [`GH_TOKEN`](https://github.com/settings/tokens) with [`public_repo`](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) access.
- [`NPM_TOKEN`](https://docs.npmjs.com/cli/token)
- [`NODE_AUTH_TOKEN`](https://docs.npmjs.com/cli/token)

> Derived from @jedmao/semantic-release-npm-github-config
