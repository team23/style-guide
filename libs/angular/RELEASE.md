### Creating a new version after rule changes

1. Update [CHANGELOG.md](CHANGELOG.md).
1. Run `npm run build`
1. Run `npm version [<newversion> | major | minor | patch]`.
1. Commit changes using the message format `"feat(angular): <versionmessage>"`
1. Push commits (and tags) using `git push --tags && git push`.
1. Run `npm publish --access public` to publish the new version to npm.
