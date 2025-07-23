# Yearn App Generator

A project generator based on the ysplitter template architecture.

## Features

- 🚀 Modern web3 stack (Wagmi, Viem, RainbowKit)
- 📦 Monorepo structure with Bun workspaces
- 🎨 Beautiful ASCII art welcome screen
- ⚡ Fast project scaffolding
- 🔧 Customizable data sources
- 🌐 Multi-chain support

## Usage

### Simple Generator (Recommended)

```bash
# Generate a new project
node scripts/generate.js "YourProjectName"

# Or use the wrapper
node create-app-simple.js "YourProjectName"

# Generate in a specific directory
node scripts/generate.js "YourProjectName" "/path/to/directory"
```

### Interactive Generator (Legacy - Currently Broken)

```bash
node create-app.js
```

Note: The interactive generator expects a different template structure and is currently not working. Use the simple generator instead.

## Interactive Prompts

The generator will ask for:

- **Project name** (required): kebab-case project name
- **Description** (optional): Project description
- **Favicon** (optional): Path to favicon file
- **Supported networks** (required): Comma-separated chain IDs
- **Wagmi only mode** (optional): Whether to use only Wagmi or include data sources
- **Custom data source** (conditional): Name of your data source (if not using Wagmi only)

## Supported Networks

- 1 (Ethereum Mainnet)
- 137 (Polygon)
- 42161 (Arbitrum One)
- 10 (Optimism)
- 8453 (Base)
- And many more...

## Project Structure

The generated project will have:

```
your-project/
├── packages/
│   ├── app/          # React frontend
│   ├── sdk/          # Business logic
│   └── contracts/    # Smart contract integrations
├── package.json
├── biome.json        # Linting/formatting
├── tsconfig.json     # TypeScript config
└── README.md
```

## Requirements

- Node.js 18+
- Bun (latest version)

## License

MIT