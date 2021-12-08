import {
  GLOBAL_STATE_TAG,
  program,
  RENT_SYSVAR_ID,
  SYSTEM_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
  VESTING_DESTINATION_OWNER,
  VESTING_END_TIME,
  VESTING_START_TIME,
  VESTING_TAG,
  VESTING_TOKEN_MINT,
  wallet,
} from "./config";

export async function createVesting() {
  let [globalStateKey, globalStateKeyNonce] =
    await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from(GLOBAL_STATE_TAG)],
      program.programId
    );
  let [vestingKey, vestingKeyNonce] =
    await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from(VESTING_TAG), wallet.publicKey.toBuffer()],
      program.programId
    );
  let [vestingPoolKey, vestingPoolKeyNonce] =
    await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from(VESTING_TAG), vestingKey.toBuffer()],
      program.programId
    );
  const tx = await program.rpc.createVesting(
    globalStateKeyNonce,
    vestingKeyNonce,
    vestingPoolKeyNonce,
    new anchor.BN(VESTING_START_TIME),
    new anchor.BN(VESTING_END_TIME),
    {
      accounts: {
        superOwner: wallet.publicKey,
        vesting: vestingKey,
        globalState: globalStateKey,
        destinationOwner: VESTING_DESTINATION_OWNER,
        mintVestingToken: VESTING_TOKEN_MINT,
        poolVestingToken: vestingPoolKey,
        systemProgram: SYSTEM_PROGRAM_ID,
        tokenProgram: TOKEN_PROGRAM_ID,
        rent: RENT_SYSVAR_ID,
      },
    }
  );
  console.log(tx);
}

async function main() {
  await createVesting();
}

console.log("Running client.");
main()
  .then(() => console.log("Success"))
  .catch((e) => console.error(e));