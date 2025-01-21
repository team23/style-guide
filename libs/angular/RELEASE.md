### Creating a new version after rule changes

1. Update [CHANGELOG.md](CHANGELOG.md).
2. Run `npm version [<newversion> | major | minor | patch]`.
3. Commit changes using the message format `"feat(angular): <versionmessage>"`
4. Push commits (and tags) using `git push --tags && git push`.
5. Run `npm publish --access public` to publish the new version to npm.
