# ySplitter

A modern Web3 application for splitting Vault tokens, built with React, TypeScript, and Wagmi.

## Usage Overview

- **SDK**: For polling and aggregating data sources
- **APP**: Main React application
- **CONTRACTS**: Contains ABIs and generates wagmi hooks
- See `useSdk` hook for SDK usage example with caching in app directory
- See `CoreDataSource` for data source implementation
- Update `query.graphql` for Kong data and run codegen in SDK directory

## Project Structure

```
app/
├── packages/
│   ├── app/           # Main React application
│   ├── contracts/     # Wagmi contract hooks and configurations
│   └── sdk/           # Business logic and data source SDK
├── package.json       # Root workspace configuration
├── tsconfig.json      # Root TypeScript configuration
└── biome.json         # Code formatting and linting configuration
```

## Getting Started

### Installation

1. Install dependencies:

```bash
bun install
```

2. Generate Wagmi hooks:

```bash
bun run --filter ./packages/contracts codegen
```

3. Build dependencies:

```bash
bun run build:deps
```

4. Start the development server:

```bash
bun run --filter ./packages/app start
```

The app will be available at `http://localhost:3000`.

## Package Details

### `@ysplitter/contracts`

Contains Wagmi configuration and generated hooks for interacting with USDC contracts across multiple chains. Generates wagmi hooks from ABIs for use in the app.

### `@ysplitter/sdk`

Business logic SDK that provides a unified interface for polling and aggregating data sources. Used by the app for data fetching and caching.

Key features:

- **Data Sources**: Kong integration for fetching vault and position data
- **GraphQL Client**: Type-safe GraphQL queries with code generation
- **React Query Integration**: Built-in caching and state management
- **Type Safety**: Full TypeScript support with generated types

Usage:

```typescript
import { Sdk } from "@ysplitter/sdk";

// Initialize SDK with QueryClient and Wagmi config
const sdk = new Sdk(queryClient, wagmiConfig);
await sdk.initialize();

// Access Kong data source
const positions = await sdk.kong.getUserPositions(address);
```

See `packages/app/src/hooks/useSdk.ts` for example usage with caching and `packages/sdk/src/datasources/CoreDataSource.ts` for data source implementation.

Scripts:

- `bun run --filter ./packages/sdk codegen` - Generate GraphQL types
- `bun run --filter ./packages/sdk build` - Build the SDK package
- `bun run --filter ./packages/sdk test` - Run SDK tests

### Scripts

- `bun run build:deps` - Build all dependency packages
- `bun run build:app` - Build the main application
- `bun run lint:types` - Type check all packages

### Adding New Contracts

1. Update `packages/contracts/wagmi.config.ts`
2. Run `bun run --filter ./packages/contracts codegen`
3. Export new hooks from `packages/contracts/src/wagmi.ts`

### Project Configuration

- **TypeScript**: Configured for strict mode with path mapping
- **Biome**: Used for formatting and linting (replaces ESLint + Prettier)
- **Vite**: Fast development server and build tool
- **Workspaces**: Bun workspaces for monorepo management
