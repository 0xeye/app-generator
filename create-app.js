#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';
import readline from 'readline';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

// Dynamic imports for ESM
let chalk, ora;
try {
  const chalkModule = await import('chalk');
  const oraModule = await import('ora');
  chalk = chalkModule.default;
  ora = oraModule.default;
} catch {
  console.log('Installing required dependencies...');
  execSync('npm install chalk ora', { stdio: 'inherit' });
  const chalkModule = await import('chalk');
  const oraModule = await import('ora');
  chalk = chalkModule.default;
  ora = oraModule.default;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import chain utilities
import { CHAIN_NAMES, getWagmiChainName } from './utils/chains.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

function showWelcomeScreen() {
  console.clear();
  console.log(chalk.cyan(`
  ${chalk.yellow('██╗   ██╗███████╗ █████╗ ██████╗ ███╗   ██╗')}
  ${chalk.yellow('╚██╗ ██╔╝██╔════╝██╔══██╗██╔══██╗████╗  ██║')}
  ${chalk.yellow(' ╚████╔╝ █████╗  ███████║██████╔╝██╔██╗ ██║')}
  ${chalk.yellow('  ╚██╔╝  ██╔══╝  ██╔══██║██╔══██╗██║╚██╗██║')}
  ${chalk.yellow('   ██║   ███████╗██║  ██║██║  ██║██║ ╚████║')}
  ${chalk.yellow('   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝')}

              ${chalk.magenta('██████╗ ███████╗███╗   ██╗')}
              ${chalk.magenta('██╔════╝ ██╔════╝████╗  ██║')}
              ${chalk.magenta('██║  ███╗█████╗  ██╔██╗ ██║')}
              ${chalk.magenta('██║   ██║██╔══╝  ██║╚██╗██║')}
              ${chalk.magenta('╚██████╔╝███████╗██║ ╚████║')}
              ${chalk.magenta(' ╚═════╝ ╚══════╝╚═╝  ╚═══╝')}

         🚀 ${chalk.bold('Project Generator v2.0.0')} 🚀
`));
  console.log(chalk.dim('\nBased on the ysplitter template architecture\n'));
}

function showCompletionScreen(projectName, projectPath) {
  console.log(chalk.green(`
                    🎉 ${chalk.bold('SUCCESS!')} 🎉

   Your project "${chalk.cyan(projectName)}" has been created!

   ${chalk.bold('Next steps:')}
   ${chalk.yellow('$')} ${chalk.white(`cd ${projectPath}`)}
   ${chalk.yellow('$')} ${chalk.white('bun install')}
   ${chalk.yellow('$')} ${chalk.white('bun run dev')}

   ${chalk.dim('Happy building!')} 🛠️
`));
}

async function promptWithDefault(message, defaultValue) {
  const input = await question(
    defaultValue 
      ? `${message} ${chalk.dim(`(default: ${defaultValue})`)}: `
      : `${message}: `
  );
  return input.trim() || defaultValue;
}

function toKebabCase(str) {
  return str.toLowerCase().replace(/\s+/g, '-');
}

function toLowerCase(str) {
  return str.toLowerCase().replace(/\s+/g, '');
}

function generateChainImports(chains) {
  const validChains = chains.filter(c => c.wagmiName);
  if (validChains.length === 0) return 'mainnet';
  return validChains.map(c => c.wagmiName).join(', ');
}

function generateSupportedChainsArray(chains) {
  const validChains = chains.filter(c => c.wagmiName);
  if (validChains.length === 0) return 'mainnet';
  return validChains.map(c => c.wagmiName).join(', ');
}

async function configureNavigation(targetPath, includeNavigation) {
  const indexPath = path.join(targetPath, 'packages/app/src/index.tsx');
  let indexContent = await fs.readFile(indexPath, 'utf8');
  
  if (!includeNavigation) {
    // Remove the Navigation import and component
    indexContent = indexContent.replace(
      "import { Navigation } from './components/shared/Navigation'\n",
      ''
    );
    indexContent = indexContent.replace(
      '      <Navigation />\n',
      ''
    );
  }
  
  await fs.writeFile(indexPath, indexContent);
}

async function configureChains(targetPath, chains) {
  // Configure supportedChains.ts
  const supportedChainsPath = path.join(targetPath, 'packages/app/src/config/supportedChains.ts');
  let supportedChainsContent = await fs.readFile(supportedChainsPath, 'utf8');
  
  const chainImports = generateChainImports(chains);
  const chainsArray = generateSupportedChainsArray(chains);
  
  supportedChainsContent = supportedChainsContent.replace(
    'import { mainnet } from \'viem/chains\'',
    `import { ${chainImports} } from 'viem/chains'`
  );
  
  supportedChainsContent = supportedChainsContent.replace(
    'export const supportedChains = [mainnet] as const',
    `export const supportedChains = [${chainsArray}] as const`
  );
  
  await fs.writeFile(supportedChainsPath, supportedChainsContent);
  
  // Configure ChainsProvider.tsx
  const chainsProviderPath = path.join(targetPath, 'packages/app/src/context/ChainsProvider.tsx');
  let chainsProviderContent = await fs.readFile(chainsProviderPath, 'utf8');
  
  const defaultChain = chains[0]?.id || 1;
  
  chainsProviderContent = chainsProviderContent.replace(
    'const [defaultChainId] = useState<SupportedChain>(1);',
    `const [defaultChainId] = useState<SupportedChain>(${defaultChain});`
  );
  
  await fs.writeFile(chainsProviderPath, chainsProviderContent);
}

async function copyTemplate(templatePath, targetPath) {
  await fs.copy(templatePath, targetPath, {
    filter: (src) => {
      const relativePath = path.relative(templatePath, src);
      if (relativePath.includes('node_modules')) return false;
      if (relativePath.includes('.next')) return false;
      if (relativePath.includes('.turbo')) return false;
      if (relativePath.includes('dist')) return false;
      if (relativePath.includes('.env.local')) return false;
      return true;
    }
  });
}

async function replaceInFile(filePath, replacements) {
  let content = await fs.readFile(filePath, 'utf8');
  let modified = false;
  
  for (const [search, replace] of Object.entries(replacements)) {
    if (content.includes(search)) {
      content = content.replaceAll(search, replace);
      modified = true;
    }
  }
  
  if (modified) {
    await fs.writeFile(filePath, content);
  }
}

async function replaceInFiles(targetPath, replacements) {
  const files = await glob('**/*.{js,jsx,ts,tsx,json,md,html,css,yml,yaml}', {
    cwd: targetPath,
    absolute: true,
    ignore: ['**/node_modules/**', '**/.next/**', '**/.turbo/**', '**/dist/**']
  });
  
  let updatedCount = 0;
  for (const file of files) {
    const before = await fs.readFile(file, 'utf8');
    await replaceInFile(file, replacements);
    const after = await fs.readFile(file, 'utf8');
    if (before !== after) updatedCount++;
  }
  
  return updatedCount;
}

async function promptProjectInfo() {
  showWelcomeScreen();
  
  console.log(chalk.bold('\n📋 Project Configuration\n'));
  
  // Required fields
  const projectName = await question(chalk.cyan('Project name: '));
  if (!projectName.trim()) {
    console.log(chalk.red('\n❌ Project name is required!'));
    process.exit(1);
  }
  
  // Optional fields with defaults
  const description = await promptWithDefault(
    chalk.cyan('Description'),
    `${projectName} application`
  );
  
  // Supported chains
  console.log(chalk.dim('\nSupported chains:'));
  console.log(chalk.dim('1 (Ethereum), 42161 (Arbitrum), 10 (Optimism), 8453 (Base), and more...'));
  
  const supportedChainsInput = await promptWithDefault(
    chalk.cyan('Supported chain IDs (comma-separated)'),
    '1'
  );
  
  // Parse and validate chains
  const supportedChains = supportedChainsInput.split(',').map(id => {
    const chainId = parseInt(id.trim());
    const chainName = CHAIN_NAMES[chainId];
    const wagmiName = getWagmiChainName(chainId);
    
    if (wagmiName) {
      console.log(chalk.green(`  ✓ ${chainId} (${chainName})`));
    } else if (chainName) {
      console.log(chalk.yellow(`  ⚠ ${chainId} (${chainName}) - custom configuration needed`));
    } else {
      console.log(chalk.yellow(`  ⚠ ${chainId} - unknown chain`));
    }
    
    return { id: chainId, name: chainName, wagmiName };
  });
  
  // Navigation option
  console.log(chalk.dim('\nNavigation bar:'));
  const includeNavResponse = await promptWithDefault(
    chalk.cyan('Include navigation bar? (y/n)'),
    'y'
  );
  const includeNavigation = includeNavResponse.toLowerCase() === 'y';
  
  // Target directory
  const targetDir = await promptWithDefault(
    chalk.cyan('Target directory'),
    'apps'
  );
  
  rl.close();
  
  return {
    projectName: projectName.trim(),
    description,
    targetDir,
    supportedChains,
    includeNavigation,
  };
}

async function createProject(info) {
  const templatePath = path.join(__dirname, 'template');
  const targetPath = path.join(info.targetDir, info.projectName);
  
  // Check if directory exists
  if (await fs.pathExists(targetPath)) {
    console.error(chalk.red(`\n❌ Directory ${targetPath} already exists!`));
    process.exit(1);
  }
  
  console.log(chalk.bold('\n🚀 Creating your project...\n'));
  
  // Copy template
  const copySpinner = ora('Copying template files...').start();
  try {
    await copyTemplate(templatePath, targetPath);
    copySpinner.succeed('Template files copied');
  } catch (error) {
    copySpinner.fail('Failed to copy template');
    throw error;
  }
  
  // Define replacements
  const replacements = {
    'ySplitter': info.projectName,
    'app-ysplitter': toKebabCase(info.projectName),
    'ysplitter': toLowerCase(info.projectName),
    'A web3 application': info.description,
  };
  
  // Apply replacements
  const replaceSpinner = ora('Customizing project files...').start();
  try {
    const updatedCount = await replaceInFiles(targetPath, replacements);
    replaceSpinner.succeed(`Customized ${updatedCount} files`);
  } catch (error) {
    replaceSpinner.fail('Failed to customize files');
    throw error;
  }
  
  // Apply chain-specific configurations
  const chainSpinner = ora('Configuring blockchain support...').start();
  try {
    await configureChains(targetPath, info.supportedChains);
    chainSpinner.succeed(`Configured ${info.supportedChains.length} blockchain(s)`);
  } catch (error) {
    chainSpinner.fail('Failed to configure chains');
    throw error;
  }
  
  // Configure navigation
  const navSpinner = ora('Configuring navigation...').start();
  try {
    await configureNavigation(targetPath, info.includeNavigation);
    navSpinner.succeed(info.includeNavigation ? 'Navigation included' : 'Navigation removed');
  } catch (error) {
    navSpinner.fail('Failed to configure navigation');
    throw error;
  }
  
  const relativePath = path.relative(process.cwd(), targetPath);
  showCompletionScreen(info.projectName, relativePath);
}

async function main() {
  try {
    const info = await promptProjectInfo();
    await createProject(info);
  } catch (error) {
    console.error(chalk.red('\n❌ Error creating project:'), error.message);
    process.exit(1);
  }
}

main().catch(console.error);