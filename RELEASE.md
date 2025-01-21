### Creating a new version after rule changes

1. Go into the changed pacakge
2. Update [CHANGELOG.md](CHANGELOG.md).
3. Run `npm version [<newversion> | major | minor | patch]`.
4. Commit changes using the message format `"feat(<package>): <versionmessage>"`
5. Push commits (and tags) using `git push --tags && git push`.
6. Run `npm publish --access public` to publish the new version to npm.
