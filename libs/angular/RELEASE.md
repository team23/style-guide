### Creating a new version after rule changes

1. Update [CHANGELOG.md](CHANGELOG.md).
2. Run `npm version [<newversion> | major | minor | patch] -m "feat(angular): <versionmessage>"`.
3. Push commits and tags using `git push --tags && git push`.
4. Run `npm publish --access public` to publish the new version to npm.
