# gh-shared-action

A collection of simple GitHub Actions built with Bun, demonstrating a monorepo approach with shared business logic.

## Available Actions

### 🎯 Greet Action
```yaml
- uses: isaias-b/gh-shared-action/greet-action@v1
  with:
    name: "Alice"  # optional, default: "world"
```

### 🔄 Repeat Action
```yaml
- uses: isaias-b/gh-shared-action/repeat-action@v1
  with:
    message: "Hello World!"  # required
```

### 📢 Uppercase Action
```yaml
- uses: isaias-b/gh-shared-action/uppercase-action@v1
  with:
    message: "make me loud"  # required
```

## Architecture

This repository demonstrates a scalable monorepo approach:

```
gh-shared-action/
├── shared/           # Core business logic
├── cli/             # Command-line interface (all actions)
├── greet-action/    # Dedicated greet action
├── repeat-action/   # Dedicated repeat action
└── uppercase-action/# Dedicated uppercase action
```

### Benefits
- **🎯 Single Responsibility**: Each action focused on one task  
- **📦 Optimal Performance**: Users download only what they need
- **🔗 Shared Infrastructure**: Common build pipeline and business logic
- **⚡ No Dispatch Overhead**: Direct execution paths
- **🔧 Easy Maintenance**: Shared code in one place

## Development

```bash
# Install dependencies for all workspaces
bun install

# Build all actions
bun run build

# Build specific components
bun run build:shared    # Core business logic
bun run build:cli       # Command-line interface
bun run build:greet     # Greet action
bun run build:repeat    # Repeat action  
bun run build:uppercase # Uppercase action
```

## CLI Usage

The repository also includes a CLI that provides all functionality:

```bash
# Build and test locally
bun run build
./cli/dist/index.js --help

# Available commands
./cli/dist/index.js hello Alice
./cli/dist/index.js repeat "Hello World"
./cli/dist/index.js uppercase "make me loud"
```

## Release

The actions use an automated release workflow:

1. Push your changes to main
2. Create and push a new version tag: `git tag v1.0.0 && git push origin v1.0.0`
3. The GitHub Action workflow will automatically:
   - Build all actions and CLI
   - Commit the `dist/` files
   - Move the major version tag (e.g., `v1` points to latest `v1.x.x`)

## Future: Schema-Driven Generation

This structure is designed to evolve toward schema-driven code generation, where:
- Command definitions live in `shared/commands.ts`
- Actions are generated from the schema at build time
- CLI is generated from the same schema
- Zero redundancy and perfect consistency

## Action References

| Action | Purpose | Inputs | Outputs |
|--------|---------|---------|---------|
| `greet-action` | Personalized greeting | `name` (optional) | `greeting` |
| `repeat-action` | Message repetition | `message` (required) | `repeated` |
| `uppercase-action` | Text conversion | `message` (required) | `uppercase` |