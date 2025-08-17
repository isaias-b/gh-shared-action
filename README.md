# gh-shared-action

A minimal, portable GitHub Action built with Bun that prints a greeting.

## Description

This action prints a greeting message and outputs it for use in other workflow steps.

## Inputs

- `name` - **Optional** - The name to greet. Default: "world"

## Outputs

- `greeting` - The greeting message that was printed

## Usage

```yaml
- name: Run greeting action
  uses: isaias-b/gh-shared-action@v1
  id: hello
  with:
    name: 'GitHub'

- name: Use the output
  run: echo "The greeting was: ${{ steps.hello.outputs.greeting }}"
```

## Development

### Local Development

```bash
# Install dependencies
bun install

# Build the action
bun run build

# Check the built files
ls dist/
```

### Release Process

1. Push your changes to the main branch
2. Go to Actions → Run "release" workflow 
3. Provide a version (e.g., "1.0.0")
4. The workflow will build, commit dist/, and create tags

The workflow creates both exact version tags (e.g., `v1.0.0`) and major version tags (e.g., `v1`) for easy consumption.
