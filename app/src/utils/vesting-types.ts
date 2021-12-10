export type AtlasVesting = {
    "version": "0.0.0",
    "name": "atlas_vesting",
    "instructions": [
      {
        "name": "createGlobalState",
        "accounts": [
          {
            "name": "superOwner",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "globalState",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "globalStateNonce",
            "type": "u8"
          }
        ]
      },
      {
        "name": "createVesting",
        "accounts": [
          {
            "name": "superOwner",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "vesting",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "globalState",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "destinationOwner",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "mintVestingToken",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "poolVestingToken",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "globalStateNonce",
            "type": "u8"
          },
          {
            "name": "vestingNonce",
            "type": "u8"
          },
          {
            "name": "vestingPoolNonce",
            "type": "u8"
          },
          {
            "name": "startTime",
            "type": "u64"
          },
          {
            "name": "endTime",
            "type": "u64"
          }
        ]
      },
      {
        "name": "updateVesting",
        "accounts": [
          {
            "name": "superOwner",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "vesting",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "globalState",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "destinationOwner",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "mintVestingToken",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "globalStateNonce",
            "type": "u8"
          },
          {
            "name": "vestingNonce",
            "type": "u8"
          },
          {
            "name": "startTime",
            "type": "u64"
          },
          {
            "name": "endTime",
            "type": "u64"
          }
        ]
      },
      {
        "name": "depositVesting",
        "accounts": [
          {
            "name": "superOwner",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "vesting",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "globalState",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "poolVestingToken",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userVestingToken",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "destinationOwner",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "mintVestingToken",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "globalStateNonce",
            "type": "u8"
          },
          {
            "name": "vestingNonce",
            "type": "u8"
          },
          {
            "name": "vestingPoolNonce",
            "type": "u8"
          }
        ]
      },
      {
        "name": "withdrawVesting",
        "accounts": [
          {
            "name": "superOwner",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "vesting",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "globalState",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "poolVestingToken",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userVestingToken",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "destinationOwner",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "mintVestingToken",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "globalStateNonce",
            "type": "u8"
          },
          {
            "name": "vestingNonce",
            "type": "u8"
          },
          {
            "name": "vestingPoolNonce",
            "type": "u8"
          }
        ]
      },
      {
        "name": "claim",
        "accounts": [
          {
            "name": "owner",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "vesting",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "globalState",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "poolVestingToken",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userVestingToken",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "destinationOwner",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "mintVestingToken",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "clock",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "globalStateNonce",
            "type": "u8"
          },
          {
            "name": "vestingNonce",
            "type": "u8"
          },
          {
            "name": "vestingPoolNonce",
            "type": "u8"
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "globalState",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "superOwner",
              "type": "publicKey"
            }
          ]
        }
      },
      {
        "name": "vesting",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "nonce",
              "type": "u8"
            },
            {
              "name": "destinationOwner",
              "type": "publicKey"
            },
            {
              "name": "mintVestingToken",
              "type": "publicKey"
            },
            {
              "name": "poolVestingToken",
              "type": "publicKey"
            },
            {
              "name": "startTime",
              "type": "u64"
            },
            {
              "name": "endTime",
              "type": "u64"
            },
            {
              "name": "lastTime",
              "type": "u64"
            }
          ]
        }
      }
    ],
    "errors": [
      {
        "code": 300,
        "name": "Unauthorized",
        "msg": "You are not authorized to perform this action."
      },
      {
        "code": 301,
        "name": "AlreadyInUse",
        "msg": "AlreadyInUse"
      },
      {
        "code": 302,
        "name": "InvalidProgramAddress",
        "msg": "InvalidProgramAddress"
      },
      {
        "code": 303,
        "name": "InvalidState",
        "msg": "InvalidState"
      },
      {
        "code": 304,
        "name": "InvalidOwner",
        "msg": "InvalidOwner"
      },
      {
        "code": 305,
        "name": "NotAllowed",
        "msg": "NotAllowed"
      },
      {
        "code": 306,
        "name": "PreciseError",
        "msg": "Precise Error"
      }
    ]
  };
  
  export const IDL: AtlasVesting = {
    "version": "0.0.0",
    "name": "atlas_vesting",
    "instructions": [
      {
        "name": "createGlobalState",
        "accounts": [
          {
            "name": "superOwner",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "globalState",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "globalStateNonce",
            "type": "u8"
          }
        ]
      },
      {
        "name": "createVesting",
        "accounts": [
          {
            "name": "superOwner",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "vesting",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "globalState",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "destinationOwner",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "mintVestingToken",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "poolVestingToken",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "globalStateNonce",
            "type": "u8"
          },
          {
            "name": "vestingNonce",
            "type": "u8"
          },
          {
            "name": "vestingPoolNonce",
            "type": "u8"
          },
          {
            "name": "startTime",
            "type": "u64"
          },
          {
            "name": "endTime",
            "type": "u64"
          }
        ]
      },
      {
        "name": "updateVesting",
        "accounts": [
          {
            "name": "superOwner",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "vesting",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "globalState",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "destinationOwner",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "mintVestingToken",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "globalStateNonce",
            "type": "u8"
          },
          {
            "name": "vestingNonce",
            "type": "u8"
          },
          {
            "name": "startTime",
            "type": "u64"
          },
          {
            "name": "endTime",
            "type": "u64"
          }
        ]
      },
      {
        "name": "depositVesting",
        "accounts": [
          {
            "name": "superOwner",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "vesting",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "globalState",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "poolVestingToken",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userVestingToken",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "destinationOwner",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "mintVestingToken",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "globalStateNonce",
            "type": "u8"
          },
          {
            "name": "vestingNonce",
            "type": "u8"
          },
          {
            "name": "vestingPoolNonce",
            "type": "u8"
          }
        ]
      },
      {
        "name": "withdrawVesting",
        "accounts": [
          {
            "name": "superOwner",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "vesting",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "globalState",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "poolVestingToken",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userVestingToken",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "destinationOwner",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "mintVestingToken",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "globalStateNonce",
            "type": "u8"
          },
          {
            "name": "vestingNonce",
            "type": "u8"
          },
          {
            "name": "vestingPoolNonce",
            "type": "u8"
          }
        ]
      },
      {
        "name": "claim",
        "accounts": [
          {
            "name": "owner",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "vesting",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "globalState",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "poolVestingToken",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userVestingToken",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "destinationOwner",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "mintVestingToken",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "clock",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "globalStateNonce",
            "type": "u8"
          },
          {
            "name": "vestingNonce",
            "type": "u8"
          },
          {
            "name": "vestingPoolNonce",
            "type": "u8"
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "globalState",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "superOwner",
              "type": "publicKey"
            }
          ]
        }
      },
      {
        "name": "vesting",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "nonce",
              "type": "u8"
            },
            {
              "name": "destinationOwner",
              "type": "publicKey"
            },
            {
              "name": "mintVestingToken",
              "type": "publicKey"
            },
            {
              "name": "poolVestingToken",
              "type": "publicKey"
            },
            {
              "name": "startTime",
              "type": "u64"
            },
            {
              "name": "endTime",
              "type": "u64"
            },
            {
              "name": "lastTime",
              "type": "u64"
            }
          ]
        }
      }
    ],
    "errors": [
      {
        "code": 300,
        "name": "Unauthorized",
        "msg": "You are not authorized to perform this action."
      },
      {
        "code": 301,
        "name": "AlreadyInUse",
        "msg": "AlreadyInUse"
      },
      {
        "code": 302,
        "name": "InvalidProgramAddress",
        "msg": "InvalidProgramAddress"
      },
      {
        "code": 303,
        "name": "InvalidState",
        "msg": "InvalidState"
      },
      {
        "code": 304,
        "name": "InvalidOwner",
        "msg": "InvalidOwner"
      },
      {
        "code": 305,
        "name": "NotAllowed",
        "msg": "NotAllowed"
      },
      {
        "code": 306,
        "name": "PreciseError",
        "msg": "Precise Error"
      }
    ]
  };
  