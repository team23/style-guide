### Creating a new version after rule changes

1. Go into the changed package
2. Update its [CHANGELOG.md](CHANGELOG.md).
3. Run `npm version [<newversion> | major | minor | patch]`.
5. Commit changes using the message format `"feat(<package>): <versionmessage>"`
6. Push commits using `git push`.
7. Github actions should execute deployment automatically
