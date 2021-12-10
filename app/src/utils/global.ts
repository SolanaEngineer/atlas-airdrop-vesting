import * as anchor from "@project-serum/anchor";

import { AtlasVesting } from "./vesting-types";
import idl from "./vesting-idl.json";

export const GLOBAL_STATE_TAG = "golbal-state-seed";
export const VESTING_TAG = "vesting-seed";

export const VESTING_PROGRAM_ID = new anchor.web3.PublicKey(
  "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
);
export const TOKEN_PROGRAM_ID = new anchor.web3.PublicKey(
  "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
);
export const RENT_SYSVAR_ID = new anchor.web3.PublicKey(
  "SysvarRent111111111111111111111111111111111"
);
export const CLOCK_SYSVAR_ID = new anchor.web3.PublicKey(
  "SysvarC1ock11111111111111111111111111111111"
);
export const SYSTEM_PROGRAM_ID = new anchor.web3.PublicKey(
  "11111111111111111111111111111111"
);


export const VESTING_TOKEN_MINT = new anchor.web3.PublicKey(
  "3zigDLS2S1hoLt1CGekwVethRLhHmLnWMqyrkofu17Jw"
);

export function getProgram(
  connection: anchor.web3.Connection,
  wallet: anchor.Wallet,
  programId: anchor.web3.PublicKey
) {
  const provider = new anchor.Provider(
    connection,
    wallet,
    anchor.Provider.defaultOptions()
  );
  return new anchor.Program(
    idl as any,
    programId,
    provider
  ) as anchor.Program<AtlasVesting>;
}


export async function checkWalletATA(
  connection: anchor.web3.Connection,
  walletPubkey: anchor.web3.PublicKey,
  mint: string
) {
  let parsedTokenAccounts = await connection.getParsedTokenAccountsByOwner(
    walletPubkey,
    {
      programId: TOKEN_PROGRAM_ID
    },
    'confirmed'
  )
  let result: any = null
  parsedTokenAccounts.value.forEach(async (tokenAccountInfo) => {
    const tokenAccountPubkey = tokenAccountInfo.pubkey
    const parsedInfo = tokenAccountInfo.account.data.parsed.info
    const mintAddress = parsedInfo.mint
    if (mintAddress === mint) {
      result = tokenAccountPubkey
    }
  })
  return result
}
