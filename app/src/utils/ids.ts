import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";

export const PROGRAM_IDS = [
    {
      name: 'mainnet-beta',
    },
    {
      name: 'testnet',
    },
    {
      name: 'devnet',
    },
    {
      name: 'localnet',
    },
  ];
  
  export const setProgramIds = (envName: string) => {
    const instance = PROGRAM_IDS.find((env) => env.name === envName);
    if (!instance) {
      return;
    }
  };
  
  
export const programIds = () => {
  return {
    token: TOKEN_PROGRAM_ID,
  };
};

export const WRAPPED_SOL_MINT = new PublicKey('So11111111111111111111111111111111111111112');
