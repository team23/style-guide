### Creating a new version after rule changes

1. Update [CHANGELOG.md](CHANGELOG.md).
2. Run `npm run build`
3. Run `npm version [<newversion> | major | minor | patch]`.
4. Commit changes using the message format `"feat(angular): <versionmessage>"`
5. Push commits (and tags) using `git push --tags && git push`.
6. Run `npm publish --access public` to publish the new version to npm.
