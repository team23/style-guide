### Creating a new version after rule changes

1. Go into the changed package
2. Update its [CHANGELOG.md](CHANGELOG.md).
3. Run `nx build`
4. Run `npm version [<newversion> | major | minor | patch]`.
5. Commit changes using the message format `"feat(<package>): <versionmessage>"`
6. Push commits (and tags) using `git push --tags && git push`.
7. Run `npm publish --access public` to publish the new version to npm.
