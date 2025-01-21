### Creating a new version after rule changes

1. Go into the changed pacakge
2. Update [CHANGELOG.md](CHANGELOG.md).
3. Run `npm version [<newversion> | major | minor | patch] -m "feat(<package>): <versionmessage>"`.
4. Push commits and tags using `git push --tags && git push`.
5. Run `npm publish --access public` to publish the new version to npm.
