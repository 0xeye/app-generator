# Create Yearn App

A modern web3 application generator based on the ySplitter template architecture. Create fully-featured decentralized applications with a single command.

## Features

- 🚀 **Modern Web3 Stack**: Built with Wagmi, Viem, and RainbowKit
- 🧭 **Optional Navigation**: Include or exclude navigation bar based on your needs
- ⛓️ **Multi-chain Support**: Configure multiple blockchain networks
- 📦 **Monorepo Structure**: Organized with Bun workspaces
- ⚡ **Fast Development**: Hot reload with Vite

## Installation

```bash
# Clone the repository
git clone https://github.com/0xeye/app-generator.git
cd app-generator

# Install dependencies
bun install

# Run the generator
bun create-app.js
```

## Usage

### Interactive Mode (Recommended)

```bash
bun create-app.js
```

The generator will prompt you for:

1. **Project name** (required) - Your application's name
2. **Description** - Brief description of your project
3. **Supported chains** - Comma-separated chain IDs (e.g., 1,10,137,42161)
4. **Navigation bar** - Whether to include a navigation component (y/n)
5. **Target directory** - Where to create your project (default: "apps")

### Quick Start

After generation:

```bash
cd apps/your-project-name
bun install
bun run dev
```

## Customization Options

## License

This project is licensed under the MIT License with an attribution requirement - see the [LICENSE](LICENSE) file for details.

### Attribution Requirement

When using this app-generator, you must:

- Include the copyright notice in your project
- Give appropriate credit to the original author
