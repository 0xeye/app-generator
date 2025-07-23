import {
  createUseReadContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
  createUseWriteContract,
} from 'wagmi/codegen'
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const erc20Abi = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// multiClaimer
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 */
export const multiClaimerAbi = [
  {
    type: 'function',
    inputs: [{ name: '_vaults', internalType: 'address[]', type: 'address[]' }],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_token', internalType: 'address', type: 'address' }],
    name: 'rescue',
    outputs: [],
    stateMutability: 'nonpayable',
  },
]
/**
 *
 */
export const multiClaimerAddress = {
  747474: '0x0000000000000000000000000000000000000001',
}
/**
 *
 */
export const multiClaimerConfig = {
  address: multiClaimerAddress,
  abi: multiClaimerAbi,
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// rewardHandler
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 */
export const rewardHandlerAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'claimRewards',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_strategy', internalType: 'address', type: 'address' }],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'strategy',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'want',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
]
/**
 *
 */
export const rewardHandlerAddress = {
  747474: '0x0000000000000000000000000000000000000000',
}
/**
 *
 */
export const rewardHandlerConfig = {
  address: rewardHandlerAddress,
  abi: rewardHandlerAbi,
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// upgradeableErc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const upgradeableErc20Abi = [
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'bridgeAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
      { name: '__decimals', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// usdc
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 */
export const usdcAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
]
/**
 *
 */
export const usdcAddress = {
  747474: '0x203A662b0BD271A6ed5a60EdFbd04bFce608FD36',
}
/**
 *
 */
export const usdcConfig = { address: usdcAddress, abi: usdcAbi }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// usds
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 */
export const usdsAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
]
/**
 *
 */
export const usdsAddress = {
  747474: '0x62D6A123E8D19d06d68cf0d2294F9A3A0362c6b3',
}
/**
 *
 */
export const usdsConfig = { address: usdsAddress, abi: usdsAbi }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// usdt
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 */
export const usdtAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
]
/**
 *
 */
export const usdtAddress = {
  747474: '0x2DCa96907fde857dd3D816880A0df407eeB2D2F2',
}
/**
 *
 */
export const usdtConfig = { address: usdtAddress, abi: usdtAbi }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// wbtc
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 */
export const wbtcAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
]
/**
 *
 */
export const wbtcAddress = {
  747474: '0x0913DA6Da4b42f538B445599b46Bb4622342Cf52',
}
/**
 *
 */
export const wbtcConfig = { address: wbtcAddress, abi: wbtcAbi }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// weth
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 */
export const wethAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
]
/**
 *
 */
export const wethAddress = {
  747474: '0xEE7D8BCFb72bC1880D0Cf19822eB0A2e6577aB62',
}
/**
 *
 */
export const wethConfig = { address: wethAddress, abi: wethAbi }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// yieldSplitter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const yieldSplitterAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_rewardToken', internalType: 'address', type: 'address' },
      { name: '_rewardsDistributor', internalType: 'address', type: 'address' },
      { name: '_rewardsDuration', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addReward',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'auction',
    outputs: [{ name: '', internalType: 'contract Auction', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'availableDepositLimit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'availableWithdrawLimit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'balanceOfAsset',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'balanceOfVault',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'claimForRecipient',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'claimRewards',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'deployFunds',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'assets', internalType: 'uint256', type: 'uint256' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'deposit',
    outputs: [{ name: 'shares', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'doHealthCheck',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_account', internalType: 'address', type: 'address' },
      { name: '_rewardToken', internalType: 'address', type: 'address' },
    ],
    name: 'earned',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'earnedMulti',
    outputs: [{ name: 'pending', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'exit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'freeFunds',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_rewardToken', internalType: 'address', type: 'address' }],
    name: 'getOneReward',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_rewardToken', internalType: 'address', type: 'address' },
      { name: '_staker', internalType: 'address', type: 'address' },
    ],
    name: 'getOneRewardFor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getReward',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_staker', internalType: 'address', type: 'address' }],
    name: 'getRewardFor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_rewardToken', internalType: 'address', type: 'address' }],
    name: 'getRewardForDuration',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRewardTokens',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'harvestAndReport',
    outputs: [{ name: '_totalAssets', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_rewardToken', internalType: 'address', type: 'address' }],
    name: 'lastTimeRewardApplicable',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lossLimitRatio',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'shares', internalType: 'uint256', type: 'uint256' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'mint',
    outputs: [{ name: 'assets', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_rewardToken', internalType: 'address', type: 'address' },
      { name: '_rewardAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'notifyRewardAmount',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'profitLimitRatio',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenAddress', internalType: 'address', type: 'address' },
      { name: '_tokenAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'recoverERC20',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'shares', internalType: 'uint256', type: 'uint256' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'maxLoss', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'redeem',
    outputs: [{ name: 'assets', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'shares', internalType: 'uint256', type: 'uint256' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'redeem',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'report',
    outputs: [
      { name: 'profit', internalType: 'uint256', type: 'uint256' },
      { name: 'loss', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'rewardData',
    outputs: [
      { name: 'rewardsDistributor', internalType: 'address', type: 'address' },
      { name: 'rewardsDuration', internalType: 'uint96', type: 'uint96' },
      { name: 'periodFinish', internalType: 'uint96', type: 'uint96' },
      { name: 'lastUpdateTime', internalType: 'uint96', type: 'uint96' },
      { name: 'rewardRate', internalType: 'uint128', type: 'uint128' },
      {
        name: 'rewardPerTokenStored',
        internalType: 'uint128',
        type: 'uint128',
      },
      { name: 'lastNotifyTime', internalType: 'uint96', type: 'uint96' },
      { name: 'lastRewardRate', internalType: 'uint128', type: 'uint128' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rewardHandler',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_rewardToken', internalType: 'address', type: 'address' }],
    name: 'rewardPerToken',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'rewardTokens',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'rewards',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_auction', internalType: 'address', type: 'address' }],
    name: 'setAuction',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_staker', internalType: 'address', type: 'address' },
      { name: '_recipient', internalType: 'address', type: 'address' },
    ],
    name: 'setClaimFor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_recipient', internalType: 'address', type: 'address' }],
    name: 'setClaimForSelf',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_doHealthCheck', internalType: 'bool', type: 'bool' }],
    name: 'setDoHealthCheck',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_newLossLimitRatio', internalType: 'uint256', type: 'uint256' }],
    name: 'setLossLimitRatio',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_newProfitLimitRatio',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'setProfitLimitRatio',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_rewardToken', internalType: 'address', type: 'address' },
      { name: '_rewardsDistributor', internalType: 'address', type: 'address' },
    ],
    name: 'setRewardsDistributor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_rewardToken', internalType: 'address', type: 'address' },
      { name: '_rewardsDuration', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setRewardsDuration',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'shutdownWithdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_totalIdle', internalType: 'uint256', type: 'uint256' }],
    name: 'tendThis',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tendTrigger',
    outputs: [
      { name: '', internalType: 'bool', type: 'bool' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenizedStrategyAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'userRewardPerTokenPaid',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'valueOfVault',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'vault',
    outputs: [{ name: '', internalType: 'contract IERC4626', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'vaultsMaxWithdraw',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'want',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'assets', internalType: 'uint256', type: 'uint256' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'maxLoss', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'withdraw',
    outputs: [{ name: 'shares', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'assets', internalType: 'uint256', type: 'uint256' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'withdraw',
    outputs: [{ name: 'shares', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// yieldSplitterFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *
 */
export const yieldSplitterFactoryAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'AUCTION_FACTORY',
    outputs: [{ name: '', internalType: 'contract AuctionFactory', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'deployments',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'emergencyAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_strategy', internalType: 'address', type: 'address' }],
    name: 'isDeployedStrategy',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'keeper',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'management',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_vault', internalType: 'address', type: 'address' },
      { name: '_want', internalType: 'address', type: 'address' },
    ],
    name: 'newYieldSplitter',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'performanceFeeRecipient',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rewardHandlerOriginal',
    outputs: [{ name: '', internalType: 'contract RewardHandler', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_management', internalType: 'address', type: 'address' },
      {
        name: '_performanceFeeRecipient',
        internalType: 'address',
        type: 'address',
      },
      { name: '_keeper', internalType: 'address', type: 'address' },
    ],
    name: 'setAddresses',
    outputs: [],
    stateMutability: 'nonpayable',
  },
]
/**
 *
 */
export const yieldSplitterFactoryAddress = {
  747474: '0x72bd640a903DAE71E1eaA315f31F4dA33C82872d',
}
/**
 *
 */
export const yieldSplitterFactoryConfig = {
  address: yieldSplitterFactoryAddress,
  abi: yieldSplitterFactoryAbi,
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useErc20 = /*#__PURE__*/ createUseReadContract({ abi: erc20Abi })
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const usePrepareErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const usePrepareErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const usePrepareErc20Transfer = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'transfer',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const usePrepareErc20TransferFrom = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})
/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})
/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
  eventName: 'Approval',
})
/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
  eventName: 'Transfer',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multiClaimerAbi}__
 *
 *
 */
export const useMultiClaimer = /*#__PURE__*/ createUseReadContract({
  abi: multiClaimerAbi,
  address: multiClaimerAddress,
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multiClaimerAbi}__ and `functionName` set to `"owner"`
 *
 *
 */
export const useMultiClaimerOwner = /*#__PURE__*/ createUseReadContract({
  abi: multiClaimerAbi,
  address: multiClaimerAddress,
  functionName: 'owner',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multiClaimerAbi}__
 *
 *
 */
export const useWriteMultiClaimer = /*#__PURE__*/ createUseWriteContract({
  abi: multiClaimerAbi,
  address: multiClaimerAddress,
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multiClaimerAbi}__ and `functionName` set to `"claim"`
 *
 *
 */
export const useWriteMultiClaimerClaim = /*#__PURE__*/ createUseWriteContract({
  abi: multiClaimerAbi,
  address: multiClaimerAddress,
  functionName: 'claim',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multiClaimerAbi}__ and `functionName` set to `"rescue"`
 *
 *
 */
export const useWriteMultiClaimerRescue = /*#__PURE__*/ createUseWriteContract({
  abi: multiClaimerAbi,
  address: multiClaimerAddress,
  functionName: 'rescue',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multiClaimerAbi}__
 *
 *
 */
export const usePrepareMultiClaimer = /*#__PURE__*/ createUseSimulateContract({
  abi: multiClaimerAbi,
  address: multiClaimerAddress,
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multiClaimerAbi}__ and `functionName` set to `"claim"`
 *
 *
 */
export const usePrepareMultiClaimerClaim = /*#__PURE__*/ createUseSimulateContract({
  abi: multiClaimerAbi,
  address: multiClaimerAddress,
  functionName: 'claim',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multiClaimerAbi}__ and `functionName` set to `"rescue"`
 *
 *
 */
export const usePrepareMultiClaimerRescue = /*#__PURE__*/ createUseSimulateContract({
  abi: multiClaimerAbi,
  address: multiClaimerAddress,
  functionName: 'rescue',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardHandlerAbi}__
 *
 *
 */
export const useRewardHandler = /*#__PURE__*/ createUseReadContract({
  abi: rewardHandlerAbi,
  address: rewardHandlerAddress,
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardHandlerAbi}__ and `functionName` set to `"strategy"`
 *
 *
 */
export const useRewardHandlerStrategy = /*#__PURE__*/ createUseReadContract({
  abi: rewardHandlerAbi,
  address: rewardHandlerAddress,
  functionName: 'strategy',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardHandlerAbi}__ and `functionName` set to `"want"`
 *
 *
 */
export const useRewardHandlerWant = /*#__PURE__*/ createUseReadContract({
  abi: rewardHandlerAbi,
  address: rewardHandlerAddress,
  functionName: 'want',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardHandlerAbi}__
 *
 *
 */
export const useWriteRewardHandler = /*#__PURE__*/ createUseWriteContract({
  abi: rewardHandlerAbi,
  address: rewardHandlerAddress,
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardHandlerAbi}__ and `functionName` set to `"claimRewards"`
 *
 *
 */
export const useWriteRewardHandlerClaimRewards = /*#__PURE__*/ createUseWriteContract({
  abi: rewardHandlerAbi,
  address: rewardHandlerAddress,
  functionName: 'claimRewards',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardHandlerAbi}__ and `functionName` set to `"initialize"`
 *
 *
 */
export const useWriteRewardHandlerInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: rewardHandlerAbi,
  address: rewardHandlerAddress,
  functionName: 'initialize',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardHandlerAbi}__
 *
 *
 */
export const usePrepareRewardHandler = /*#__PURE__*/ createUseSimulateContract({
  abi: rewardHandlerAbi,
  address: rewardHandlerAddress,
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardHandlerAbi}__ and `functionName` set to `"claimRewards"`
 *
 *
 */
export const usePrepareRewardHandlerClaimRewards = /*#__PURE__*/ createUseSimulateContract({
  abi: rewardHandlerAbi,
  address: rewardHandlerAddress,
  functionName: 'claimRewards',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardHandlerAbi}__ and `functionName` set to `"initialize"`
 *
 *
 */
export const usePrepareRewardHandlerInitialize = /*#__PURE__*/ createUseSimulateContract({
  abi: rewardHandlerAbi,
  address: rewardHandlerAddress,
  functionName: 'initialize',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link upgradeableErc20Abi}__
 */
export const useUpgradeableErc20 = /*#__PURE__*/ createUseReadContract({
  abi: upgradeableErc20Abi,
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useUpgradeableErc20DomainSeparator = /*#__PURE__*/ createUseReadContract({
  abi: upgradeableErc20Abi,
  functionName: 'DOMAIN_SEPARATOR',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useUpgradeableErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: upgradeableErc20Abi,
  functionName: 'allowance',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useUpgradeableErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: upgradeableErc20Abi,
  functionName: 'balanceOf',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"bridgeAddress"`
 */
export const useUpgradeableErc20BridgeAddress = /*#__PURE__*/ createUseReadContract({
  abi: upgradeableErc20Abi,
  functionName: 'bridgeAddress',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useUpgradeableErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: upgradeableErc20Abi,
  functionName: 'decimals',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"eip712Domain"`
 */
export const useUpgradeableErc20Eip712Domain = /*#__PURE__*/ createUseReadContract({
  abi: upgradeableErc20Abi,
  functionName: 'eip712Domain',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"name"`
 */
export const useUpgradeableErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: upgradeableErc20Abi,
  functionName: 'name',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"nonces"`
 */
export const useUpgradeableErc20Nonces = /*#__PURE__*/ createUseReadContract({
  abi: upgradeableErc20Abi,
  functionName: 'nonces',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useUpgradeableErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: upgradeableErc20Abi,
  functionName: 'symbol',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useUpgradeableErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: upgradeableErc20Abi,
  functionName: 'totalSupply',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradeableErc20Abi}__
 */
export const useWriteUpgradeableErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: upgradeableErc20Abi,
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteUpgradeableErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: upgradeableErc20Abi,
  functionName: 'approve',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"burn"`
 */
export const useWriteUpgradeableErc20Burn = /*#__PURE__*/ createUseWriteContract({
  abi: upgradeableErc20Abi,
  functionName: 'burn',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"initialize"`
 */
export const useWriteUpgradeableErc20Initialize = /*#__PURE__*/ createUseWriteContract({
  abi: upgradeableErc20Abi,
  functionName: 'initialize',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"mint"`
 */
export const useWriteUpgradeableErc20Mint = /*#__PURE__*/ createUseWriteContract({
  abi: upgradeableErc20Abi,
  functionName: 'mint',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"permit"`
 */
export const useWriteUpgradeableErc20Permit = /*#__PURE__*/ createUseWriteContract({
  abi: upgradeableErc20Abi,
  functionName: 'permit',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteUpgradeableErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: upgradeableErc20Abi,
  functionName: 'transfer',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteUpgradeableErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: upgradeableErc20Abi,
  functionName: 'transferFrom',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradeableErc20Abi}__
 */
export const usePrepareUpgradeableErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: upgradeableErc20Abi,
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"approve"`
 */
export const usePrepareUpgradeableErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: upgradeableErc20Abi,
  functionName: 'approve',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"burn"`
 */
export const usePrepareUpgradeableErc20Burn = /*#__PURE__*/ createUseSimulateContract({
  abi: upgradeableErc20Abi,
  functionName: 'burn',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"initialize"`
 */
export const usePrepareUpgradeableErc20Initialize = /*#__PURE__*/ createUseSimulateContract({
  abi: upgradeableErc20Abi,
  functionName: 'initialize',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"mint"`
 */
export const usePrepareUpgradeableErc20Mint = /*#__PURE__*/ createUseSimulateContract({
  abi: upgradeableErc20Abi,
  functionName: 'mint',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"permit"`
 */
export const usePrepareUpgradeableErc20Permit = /*#__PURE__*/ createUseSimulateContract({
  abi: upgradeableErc20Abi,
  functionName: 'permit',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"transfer"`
 */
export const usePrepareUpgradeableErc20Transfer = /*#__PURE__*/ createUseSimulateContract({
  abi: upgradeableErc20Abi,
  functionName: 'transfer',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradeableErc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const usePrepareUpgradeableErc20TransferFrom = /*#__PURE__*/ createUseSimulateContract({
  abi: upgradeableErc20Abi,
  functionName: 'transferFrom',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__
 *
 *
 */
export const useUsdc = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"allowance"`
 *
 *
 */
export const useUsdcAllowance = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'allowance',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"balanceOf"`
 *
 *
 */
export const useUsdcBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'balanceOf',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"decimals"`
 *
 *
 */
export const useUsdcDecimals = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'decimals',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"name"`
 *
 *
 */
export const useUsdcName = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'name',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"symbol"`
 *
 *
 */
export const useUsdcSymbol = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'symbol',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"totalSupply"`
 *
 *
 */
export const useUsdcTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'totalSupply',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__
 *
 *
 */
export const useWriteUsdc = /*#__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"approve"`
 *
 *
 */
export const useWriteUsdcApprove = /*#__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'approve',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"transfer"`
 *
 *
 */
export const useWriteUsdcTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'transfer',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"transferFrom"`
 *
 *
 */
export const useWriteUsdcTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'transferFrom',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__
 *
 *
 */
export const usePrepareUsdc = /*#__PURE__*/ createUseSimulateContract({
  abi: usdcAbi,
  address: usdcAddress,
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"approve"`
 *
 *
 */
export const usePrepareUsdcApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'approve',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"transfer"`
 *
 *
 */
export const usePrepareUsdcTransfer = /*#__PURE__*/ createUseSimulateContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'transfer',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"transferFrom"`
 *
 *
 */
export const usePrepareUsdcTransferFrom = /*#__PURE__*/ createUseSimulateContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'transferFrom',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdsAbi}__
 *
 *
 */
export const useUsds = /*#__PURE__*/ createUseReadContract({
  abi: usdsAbi,
  address: usdsAddress,
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdsAbi}__ and `functionName` set to `"allowance"`
 *
 *
 */
export const useUsdsAllowance = /*#__PURE__*/ createUseReadContract({
  abi: usdsAbi,
  address: usdsAddress,
  functionName: 'allowance',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdsAbi}__ and `functionName` set to `"balanceOf"`
 *
 *
 */
export const useUsdsBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: usdsAbi,
  address: usdsAddress,
  functionName: 'balanceOf',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdsAbi}__ and `functionName` set to `"decimals"`
 *
 *
 */
export const useUsdsDecimals = /*#__PURE__*/ createUseReadContract({
  abi: usdsAbi,
  address: usdsAddress,
  functionName: 'decimals',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdsAbi}__ and `functionName` set to `"name"`
 *
 *
 */
export const useUsdsName = /*#__PURE__*/ createUseReadContract({
  abi: usdsAbi,
  address: usdsAddress,
  functionName: 'name',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdsAbi}__ and `functionName` set to `"symbol"`
 *
 *
 */
export const useUsdsSymbol = /*#__PURE__*/ createUseReadContract({
  abi: usdsAbi,
  address: usdsAddress,
  functionName: 'symbol',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdsAbi}__ and `functionName` set to `"totalSupply"`
 *
 *
 */
export const useUsdsTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: usdsAbi,
  address: usdsAddress,
  functionName: 'totalSupply',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdsAbi}__
 *
 *
 */
export const useWriteUsds = /*#__PURE__*/ createUseWriteContract({
  abi: usdsAbi,
  address: usdsAddress,
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdsAbi}__ and `functionName` set to `"approve"`
 *
 *
 */
export const useWriteUsdsApprove = /*#__PURE__*/ createUseWriteContract({
  abi: usdsAbi,
  address: usdsAddress,
  functionName: 'approve',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdsAbi}__ and `functionName` set to `"transfer"`
 *
 *
 */
export const useWriteUsdsTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: usdsAbi,
  address: usdsAddress,
  functionName: 'transfer',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdsAbi}__ and `functionName` set to `"transferFrom"`
 *
 *
 */
export const useWriteUsdsTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: usdsAbi,
  address: usdsAddress,
  functionName: 'transferFrom',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdsAbi}__
 *
 *
 */
export const usePrepareUsds = /*#__PURE__*/ createUseSimulateContract({
  abi: usdsAbi,
  address: usdsAddress,
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdsAbi}__ and `functionName` set to `"approve"`
 *
 *
 */
export const usePrepareUsdsApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: usdsAbi,
  address: usdsAddress,
  functionName: 'approve',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdsAbi}__ and `functionName` set to `"transfer"`
 *
 *
 */
export const usePrepareUsdsTransfer = /*#__PURE__*/ createUseSimulateContract({
  abi: usdsAbi,
  address: usdsAddress,
  functionName: 'transfer',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdsAbi}__ and `functionName` set to `"transferFrom"`
 *
 *
 */
export const usePrepareUsdsTransferFrom = /*#__PURE__*/ createUseSimulateContract({
  abi: usdsAbi,
  address: usdsAddress,
  functionName: 'transferFrom',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdtAbi}__
 *
 *
 */
export const useUsdt = /*#__PURE__*/ createUseReadContract({
  abi: usdtAbi,
  address: usdtAddress,
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"allowance"`
 *
 *
 */
export const useUsdtAllowance = /*#__PURE__*/ createUseReadContract({
  abi: usdtAbi,
  address: usdtAddress,
  functionName: 'allowance',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"balanceOf"`
 *
 *
 */
export const useUsdtBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: usdtAbi,
  address: usdtAddress,
  functionName: 'balanceOf',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"decimals"`
 *
 *
 */
export const useUsdtDecimals = /*#__PURE__*/ createUseReadContract({
  abi: usdtAbi,
  address: usdtAddress,
  functionName: 'decimals',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"name"`
 *
 *
 */
export const useUsdtName = /*#__PURE__*/ createUseReadContract({
  abi: usdtAbi,
  address: usdtAddress,
  functionName: 'name',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"symbol"`
 *
 *
 */
export const useUsdtSymbol = /*#__PURE__*/ createUseReadContract({
  abi: usdtAbi,
  address: usdtAddress,
  functionName: 'symbol',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"totalSupply"`
 *
 *
 */
export const useUsdtTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: usdtAbi,
  address: usdtAddress,
  functionName: 'totalSupply',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdtAbi}__
 *
 *
 */
export const useWriteUsdt = /*#__PURE__*/ createUseWriteContract({
  abi: usdtAbi,
  address: usdtAddress,
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"approve"`
 *
 *
 */
export const useWriteUsdtApprove = /*#__PURE__*/ createUseWriteContract({
  abi: usdtAbi,
  address: usdtAddress,
  functionName: 'approve',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"transfer"`
 *
 *
 */
export const useWriteUsdtTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: usdtAbi,
  address: usdtAddress,
  functionName: 'transfer',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"transferFrom"`
 *
 *
 */
export const useWriteUsdtTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: usdtAbi,
  address: usdtAddress,
  functionName: 'transferFrom',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdtAbi}__
 *
 *
 */
export const usePrepareUsdt = /*#__PURE__*/ createUseSimulateContract({
  abi: usdtAbi,
  address: usdtAddress,
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"approve"`
 *
 *
 */
export const usePrepareUsdtApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: usdtAbi,
  address: usdtAddress,
  functionName: 'approve',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"transfer"`
 *
 *
 */
export const usePrepareUsdtTransfer = /*#__PURE__*/ createUseSimulateContract({
  abi: usdtAbi,
  address: usdtAddress,
  functionName: 'transfer',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdtAbi}__ and `functionName` set to `"transferFrom"`
 *
 *
 */
export const usePrepareUsdtTransferFrom = /*#__PURE__*/ createUseSimulateContract({
  abi: usdtAbi,
  address: usdtAddress,
  functionName: 'transferFrom',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wbtcAbi}__
 *
 *
 */
export const useWbtc = /*#__PURE__*/ createUseReadContract({
  abi: wbtcAbi,
  address: wbtcAddress,
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wbtcAbi}__ and `functionName` set to `"allowance"`
 *
 *
 */
export const useWbtcAllowance = /*#__PURE__*/ createUseReadContract({
  abi: wbtcAbi,
  address: wbtcAddress,
  functionName: 'allowance',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wbtcAbi}__ and `functionName` set to `"balanceOf"`
 *
 *
 */
export const useWbtcBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: wbtcAbi,
  address: wbtcAddress,
  functionName: 'balanceOf',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wbtcAbi}__ and `functionName` set to `"decimals"`
 *
 *
 */
export const useWbtcDecimals = /*#__PURE__*/ createUseReadContract({
  abi: wbtcAbi,
  address: wbtcAddress,
  functionName: 'decimals',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wbtcAbi}__ and `functionName` set to `"name"`
 *
 *
 */
export const useWbtcName = /*#__PURE__*/ createUseReadContract({
  abi: wbtcAbi,
  address: wbtcAddress,
  functionName: 'name',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wbtcAbi}__ and `functionName` set to `"symbol"`
 *
 *
 */
export const useWbtcSymbol = /*#__PURE__*/ createUseReadContract({
  abi: wbtcAbi,
  address: wbtcAddress,
  functionName: 'symbol',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wbtcAbi}__ and `functionName` set to `"totalSupply"`
 *
 *
 */
export const useWbtcTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: wbtcAbi,
  address: wbtcAddress,
  functionName: 'totalSupply',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wbtcAbi}__
 *
 *
 */
export const useWriteWbtc = /*#__PURE__*/ createUseWriteContract({
  abi: wbtcAbi,
  address: wbtcAddress,
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wbtcAbi}__ and `functionName` set to `"approve"`
 *
 *
 */
export const useWriteWbtcApprove = /*#__PURE__*/ createUseWriteContract({
  abi: wbtcAbi,
  address: wbtcAddress,
  functionName: 'approve',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wbtcAbi}__ and `functionName` set to `"transfer"`
 *
 *
 */
export const useWriteWbtcTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: wbtcAbi,
  address: wbtcAddress,
  functionName: 'transfer',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wbtcAbi}__ and `functionName` set to `"transferFrom"`
 *
 *
 */
export const useWriteWbtcTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: wbtcAbi,
  address: wbtcAddress,
  functionName: 'transferFrom',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wbtcAbi}__
 *
 *
 */
export const usePrepareWbtc = /*#__PURE__*/ createUseSimulateContract({
  abi: wbtcAbi,
  address: wbtcAddress,
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wbtcAbi}__ and `functionName` set to `"approve"`
 *
 *
 */
export const usePrepareWbtcApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: wbtcAbi,
  address: wbtcAddress,
  functionName: 'approve',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wbtcAbi}__ and `functionName` set to `"transfer"`
 *
 *
 */
export const usePrepareWbtcTransfer = /*#__PURE__*/ createUseSimulateContract({
  abi: wbtcAbi,
  address: wbtcAddress,
  functionName: 'transfer',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wbtcAbi}__ and `functionName` set to `"transferFrom"`
 *
 *
 */
export const usePrepareWbtcTransferFrom = /*#__PURE__*/ createUseSimulateContract({
  abi: wbtcAbi,
  address: wbtcAddress,
  functionName: 'transferFrom',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wethAbi}__
 *
 *
 */
export const useWeth = /*#__PURE__*/ createUseReadContract({
  abi: wethAbi,
  address: wethAddress,
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wethAbi}__ and `functionName` set to `"allowance"`
 *
 *
 */
export const useWethAllowance = /*#__PURE__*/ createUseReadContract({
  abi: wethAbi,
  address: wethAddress,
  functionName: 'allowance',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wethAbi}__ and `functionName` set to `"balanceOf"`
 *
 *
 */
export const useWethBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: wethAbi,
  address: wethAddress,
  functionName: 'balanceOf',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wethAbi}__ and `functionName` set to `"decimals"`
 *
 *
 */
export const useWethDecimals = /*#__PURE__*/ createUseReadContract({
  abi: wethAbi,
  address: wethAddress,
  functionName: 'decimals',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wethAbi}__ and `functionName` set to `"name"`
 *
 *
 */
export const useWethName = /*#__PURE__*/ createUseReadContract({
  abi: wethAbi,
  address: wethAddress,
  functionName: 'name',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wethAbi}__ and `functionName` set to `"symbol"`
 *
 *
 */
export const useWethSymbol = /*#__PURE__*/ createUseReadContract({
  abi: wethAbi,
  address: wethAddress,
  functionName: 'symbol',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wethAbi}__ and `functionName` set to `"totalSupply"`
 *
 *
 */
export const useWethTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: wethAbi,
  address: wethAddress,
  functionName: 'totalSupply',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wethAbi}__
 *
 *
 */
export const useWriteWeth = /*#__PURE__*/ createUseWriteContract({
  abi: wethAbi,
  address: wethAddress,
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wethAbi}__ and `functionName` set to `"approve"`
 *
 *
 */
export const useWriteWethApprove = /*#__PURE__*/ createUseWriteContract({
  abi: wethAbi,
  address: wethAddress,
  functionName: 'approve',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wethAbi}__ and `functionName` set to `"transfer"`
 *
 *
 */
export const useWriteWethTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: wethAbi,
  address: wethAddress,
  functionName: 'transfer',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wethAbi}__ and `functionName` set to `"transferFrom"`
 *
 *
 */
export const useWriteWethTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: wethAbi,
  address: wethAddress,
  functionName: 'transferFrom',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wethAbi}__
 *
 *
 */
export const usePrepareWeth = /*#__PURE__*/ createUseSimulateContract({
  abi: wethAbi,
  address: wethAddress,
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wethAbi}__ and `functionName` set to `"approve"`
 *
 *
 */
export const usePrepareWethApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: wethAbi,
  address: wethAddress,
  functionName: 'approve',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wethAbi}__ and `functionName` set to `"transfer"`
 *
 *
 */
export const usePrepareWethTransfer = /*#__PURE__*/ createUseSimulateContract({
  abi: wethAbi,
  address: wethAddress,
  functionName: 'transfer',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wethAbi}__ and `functionName` set to `"transferFrom"`
 *
 *
 */
export const usePrepareWethTransferFrom = /*#__PURE__*/ createUseSimulateContract({
  abi: wethAbi,
  address: wethAddress,
  functionName: 'transferFrom',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__
 */
export const useYieldSplitter = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"auction"`
 */
export const useYieldSplitterAuction = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'auction',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"availableDepositLimit"`
 */
export const useYieldSplitterAvailableDepositLimit = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'availableDepositLimit',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"availableWithdrawLimit"`
 */
export const useYieldSplitterAvailableWithdrawLimit = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'availableWithdrawLimit',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"balanceOfAsset"`
 */
export const useYieldSplitterBalanceOfAsset = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'balanceOfAsset',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"balanceOfVault"`
 */
export const useYieldSplitterBalanceOfVault = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'balanceOfVault',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"claimForRecipient"`
 */
export const useYieldSplitterClaimForRecipient = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'claimForRecipient',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"doHealthCheck"`
 */
export const useYieldSplitterDoHealthCheck = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'doHealthCheck',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"earned"`
 */
export const useYieldSplitterEarned = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'earned',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"earnedMulti"`
 */
export const useYieldSplitterEarnedMulti = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'earnedMulti',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"getRewardForDuration"`
 */
export const useYieldSplitterGetRewardForDuration = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'getRewardForDuration',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"getRewardTokens"`
 */
export const useYieldSplitterGetRewardTokens = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'getRewardTokens',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"lastTimeRewardApplicable"`
 */
export const useYieldSplitterLastTimeRewardApplicable = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'lastTimeRewardApplicable',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"lossLimitRatio"`
 */
export const useYieldSplitterLossLimitRatio = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'lossLimitRatio',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"profitLimitRatio"`
 */
export const useYieldSplitterProfitLimitRatio = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'profitLimitRatio',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"rewardData"`
 */
export const useYieldSplitterRewardData = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'rewardData',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"rewardHandler"`
 */
export const useYieldSplitterRewardHandler = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'rewardHandler',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"rewardPerToken"`
 */
export const useYieldSplitterRewardPerToken = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'rewardPerToken',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"rewardTokens"`
 */
export const useYieldSplitterRewardTokens = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'rewardTokens',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"rewards"`
 */
export const useYieldSplitterRewards = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'rewards',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"tendTrigger"`
 */
export const useYieldSplitterTendTrigger = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'tendTrigger',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"tokenizedStrategyAddress"`
 */
export const useYieldSplitterTokenizedStrategyAddress = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'tokenizedStrategyAddress',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"userRewardPerTokenPaid"`
 */
export const useYieldSplitterUserRewardPerTokenPaid = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'userRewardPerTokenPaid',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"valueOfVault"`
 */
export const useYieldSplitterValueOfVault = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'valueOfVault',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"vault"`
 */
export const useYieldSplitterVault = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'vault',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"vaultsMaxWithdraw"`
 */
export const useYieldSplitterVaultsMaxWithdraw = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'vaultsMaxWithdraw',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"want"`
 */
export const useYieldSplitterWant = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterAbi,
  functionName: 'want',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__
 */
export const useWriteYieldSplitter = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"addReward"`
 */
export const useWriteYieldSplitterAddReward = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'addReward',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"claimRewards"`
 */
export const useWriteYieldSplitterClaimRewards = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'claimRewards',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"deployFunds"`
 */
export const useWriteYieldSplitterDeployFunds = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'deployFunds',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"deposit"`
 */
export const useWriteYieldSplitterDeposit = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'deposit',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"exit"`
 */
export const useWriteYieldSplitterExit = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'exit',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"freeFunds"`
 */
export const useWriteYieldSplitterFreeFunds = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'freeFunds',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"getOneReward"`
 */
export const useWriteYieldSplitterGetOneReward = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'getOneReward',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"getOneRewardFor"`
 */
export const useWriteYieldSplitterGetOneRewardFor = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'getOneRewardFor',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"getReward"`
 */
export const useWriteYieldSplitterGetReward = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'getReward',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"getRewardFor"`
 */
export const useWriteYieldSplitterGetRewardFor = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'getRewardFor',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"harvestAndReport"`
 */
export const useWriteYieldSplitterHarvestAndReport = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'harvestAndReport',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteYieldSplitterMint = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'mint',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"notifyRewardAmount"`
 */
export const useWriteYieldSplitterNotifyRewardAmount = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'notifyRewardAmount',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"recoverERC20"`
 */
export const useWriteYieldSplitterRecoverErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'recoverERC20',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"redeem"`
 */
export const useWriteYieldSplitterRedeem = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'redeem',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"report"`
 */
export const useWriteYieldSplitterReport = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'report',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"setAuction"`
 */
export const useWriteYieldSplitterSetAuction = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'setAuction',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"setClaimFor"`
 */
export const useWriteYieldSplitterSetClaimFor = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'setClaimFor',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"setClaimForSelf"`
 */
export const useWriteYieldSplitterSetClaimForSelf = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'setClaimForSelf',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"setDoHealthCheck"`
 */
export const useWriteYieldSplitterSetDoHealthCheck = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'setDoHealthCheck',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"setLossLimitRatio"`
 */
export const useWriteYieldSplitterSetLossLimitRatio = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'setLossLimitRatio',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"setProfitLimitRatio"`
 */
export const useWriteYieldSplitterSetProfitLimitRatio = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'setProfitLimitRatio',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"setRewardsDistributor"`
 */
export const useWriteYieldSplitterSetRewardsDistributor = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'setRewardsDistributor',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"setRewardsDuration"`
 */
export const useWriteYieldSplitterSetRewardsDuration = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'setRewardsDuration',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"shutdownWithdraw"`
 */
export const useWriteYieldSplitterShutdownWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'shutdownWithdraw',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"tendThis"`
 */
export const useWriteYieldSplitterTendThis = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'tendThis',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteYieldSplitterTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'transfer',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteYieldSplitterTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'transferFrom',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteYieldSplitterWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterAbi,
  functionName: 'withdraw',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__
 */
export const usePrepareYieldSplitter = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"addReward"`
 */
export const usePrepareYieldSplitterAddReward = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'addReward',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"claimRewards"`
 */
export const usePrepareYieldSplitterClaimRewards = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'claimRewards',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"deployFunds"`
 */
export const usePrepareYieldSplitterDeployFunds = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'deployFunds',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"deposit"`
 */
export const usePrepareYieldSplitterDeposit = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'deposit',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"exit"`
 */
export const usePrepareYieldSplitterExit = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'exit',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"freeFunds"`
 */
export const usePrepareYieldSplitterFreeFunds = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'freeFunds',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"getOneReward"`
 */
export const usePrepareYieldSplitterGetOneReward = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'getOneReward',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"getOneRewardFor"`
 */
export const usePrepareYieldSplitterGetOneRewardFor = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'getOneRewardFor',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"getReward"`
 */
export const usePrepareYieldSplitterGetReward = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'getReward',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"getRewardFor"`
 */
export const usePrepareYieldSplitterGetRewardFor = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'getRewardFor',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"harvestAndReport"`
 */
export const usePrepareYieldSplitterHarvestAndReport = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'harvestAndReport',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"mint"`
 */
export const usePrepareYieldSplitterMint = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'mint',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"notifyRewardAmount"`
 */
export const usePrepareYieldSplitterNotifyRewardAmount = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'notifyRewardAmount',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"recoverERC20"`
 */
export const usePrepareYieldSplitterRecoverErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'recoverERC20',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"redeem"`
 */
export const usePrepareYieldSplitterRedeem = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'redeem',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"report"`
 */
export const usePrepareYieldSplitterReport = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'report',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"setAuction"`
 */
export const usePrepareYieldSplitterSetAuction = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'setAuction',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"setClaimFor"`
 */
export const usePrepareYieldSplitterSetClaimFor = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'setClaimFor',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"setClaimForSelf"`
 */
export const usePrepareYieldSplitterSetClaimForSelf = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'setClaimForSelf',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"setDoHealthCheck"`
 */
export const usePrepareYieldSplitterSetDoHealthCheck = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'setDoHealthCheck',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"setLossLimitRatio"`
 */
export const usePrepareYieldSplitterSetLossLimitRatio = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'setLossLimitRatio',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"setProfitLimitRatio"`
 */
export const usePrepareYieldSplitterSetProfitLimitRatio = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'setProfitLimitRatio',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"setRewardsDistributor"`
 */
export const usePrepareYieldSplitterSetRewardsDistributor = /*#__PURE__*/ createUseSimulateContract(
  {
    abi: yieldSplitterAbi,
    functionName: 'setRewardsDistributor',
  },
)
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"setRewardsDuration"`
 */
export const usePrepareYieldSplitterSetRewardsDuration = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'setRewardsDuration',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"shutdownWithdraw"`
 */
export const usePrepareYieldSplitterShutdownWithdraw = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'shutdownWithdraw',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"tendThis"`
 */
export const usePrepareYieldSplitterTendThis = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'tendThis',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"transfer"`
 */
export const usePrepareYieldSplitterTransfer = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'transfer',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"transferFrom"`
 */
export const usePrepareYieldSplitterTransferFrom = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'transferFrom',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterAbi}__ and `functionName` set to `"withdraw"`
 */
export const usePrepareYieldSplitterWithdraw = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterAbi,
  functionName: 'withdraw',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterFactoryAbi}__
 *
 *
 */
export const useYieldSplitterFactory = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterFactoryAbi,
  address: yieldSplitterFactoryAddress,
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterFactoryAbi}__ and `functionName` set to `"AUCTION_FACTORY"`
 *
 *
 */
export const useYieldSplitterFactoryAuctionFactory = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterFactoryAbi,
  address: yieldSplitterFactoryAddress,
  functionName: 'AUCTION_FACTORY',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterFactoryAbi}__ and `functionName` set to `"deployments"`
 *
 *
 */
export const useYieldSplitterFactoryDeployments = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterFactoryAbi,
  address: yieldSplitterFactoryAddress,
  functionName: 'deployments',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterFactoryAbi}__ and `functionName` set to `"emergencyAdmin"`
 *
 *
 */
export const useYieldSplitterFactoryEmergencyAdmin = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterFactoryAbi,
  address: yieldSplitterFactoryAddress,
  functionName: 'emergencyAdmin',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterFactoryAbi}__ and `functionName` set to `"isDeployedStrategy"`
 *
 *
 */
export const useYieldSplitterFactoryIsDeployedStrategy = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterFactoryAbi,
  address: yieldSplitterFactoryAddress,
  functionName: 'isDeployedStrategy',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterFactoryAbi}__ and `functionName` set to `"keeper"`
 *
 *
 */
export const useYieldSplitterFactoryKeeper = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterFactoryAbi,
  address: yieldSplitterFactoryAddress,
  functionName: 'keeper',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterFactoryAbi}__ and `functionName` set to `"management"`
 *
 *
 */
export const useYieldSplitterFactoryManagement = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterFactoryAbi,
  address: yieldSplitterFactoryAddress,
  functionName: 'management',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterFactoryAbi}__ and `functionName` set to `"performanceFeeRecipient"`
 *
 *
 */
export const useYieldSplitterFactoryPerformanceFeeRecipient = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterFactoryAbi,
  address: yieldSplitterFactoryAddress,
  functionName: 'performanceFeeRecipient',
})
/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yieldSplitterFactoryAbi}__ and `functionName` set to `"rewardHandlerOriginal"`
 *
 *
 */
export const useYieldSplitterFactoryRewardHandlerOriginal = /*#__PURE__*/ createUseReadContract({
  abi: yieldSplitterFactoryAbi,
  address: yieldSplitterFactoryAddress,
  functionName: 'rewardHandlerOriginal',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterFactoryAbi}__
 *
 *
 */
export const useWriteYieldSplitterFactory = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterFactoryAbi,
  address: yieldSplitterFactoryAddress,
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterFactoryAbi}__ and `functionName` set to `"newYieldSplitter"`
 *
 *
 */
export const useWriteYieldSplitterFactoryNewYieldSplitter = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterFactoryAbi,
  address: yieldSplitterFactoryAddress,
  functionName: 'newYieldSplitter',
})
/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yieldSplitterFactoryAbi}__ and `functionName` set to `"setAddresses"`
 *
 *
 */
export const useWriteYieldSplitterFactorySetAddresses = /*#__PURE__*/ createUseWriteContract({
  abi: yieldSplitterFactoryAbi,
  address: yieldSplitterFactoryAddress,
  functionName: 'setAddresses',
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterFactoryAbi}__
 *
 *
 */
export const usePrepareYieldSplitterFactory = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterFactoryAbi,
  address: yieldSplitterFactoryAddress,
})
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterFactoryAbi}__ and `functionName` set to `"newYieldSplitter"`
 *
 *
 */
export const usePrepareYieldSplitterFactoryNewYieldSplitter =
  /*#__PURE__*/ createUseSimulateContract({
    abi: yieldSplitterFactoryAbi,
    address: yieldSplitterFactoryAddress,
    functionName: 'newYieldSplitter',
  })
/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yieldSplitterFactoryAbi}__ and `functionName` set to `"setAddresses"`
 *
 *
 */
export const usePrepareYieldSplitterFactorySetAddresses = /*#__PURE__*/ createUseSimulateContract({
  abi: yieldSplitterFactoryAbi,
  address: yieldSplitterFactoryAddress,
  functionName: 'setAddresses',
})
