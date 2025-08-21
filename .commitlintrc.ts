// .commitlintrc.js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  // Add custom rules if needed, e.g.:
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // New feature
        "fix", // Bug fix
        "docs", // Documentation only changes
        "style", // Changes that do not affect the meaning of the code (white-space, formatting, missing semicolons, etc)
        "refactor", // A code change that neither fixes a bug nor adds a feature
        "perf", // A code change that improves performance
        "test", // Adding missing tests or correcting existing tests
        "build", // Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
        "ci", // Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
        "chore", // Other changes that don't modify src or test files
        "revert", // Reverts a previous commit
      ],
    ],
    "scope-enum": [
      2,
      "always",
      [
        "",
        "app",
        "components",
        "styles",
        "utils",
        "api",
        "db",
        "deps",
        "config",
        "admin",
        "goodie",
        "collection",
        "upload",
        "ui",
      ], // Define your project-specific scopes
    ],
    "subject-full-stop": [2, "never", "."],
    "subject-case": [2, "always", "lower-case"],
    "header-max-length": [2, "always", 72],
  },
};
