---
sidebar_position: 5
---

# Storage

Masca utilizes MetaMask's state to store data. Masca modifies the **`MascaState`** object.

In the `MascaState` object, data for every MetaMask account is stored in property, named after the said MetaMask account. Inside this property DIDs, VCs, Snap & Account Configuration are stored.

There is also global configuration object in the MascaState object

Data-store plugins, used by Veramo Client and Manager plugins, modify the state.

- `DIDManager`
- `DataManager`

:::info Private Keys

It is important to note that MetaMask Account private keys are **NEVER** exported from MetaMask! They are only used during RPC calls and are deleted from memory after the RPC method finishes with the execution!

:::

Structure of the state stored in MetaMask:

```typescript
{
  MascaState:
    {
      MascaConfig:
      {
        snap: {
          infuraToken: string;
          acceptedTerms: boolean;
          ...
        };
        dApp: {
          disablePopups: boolean;
          ...
        };
      }
      0xBea807A8...e59D:
        {
          identifiers: Record<string, IIdentifier>,
          vcs: Record<string, VerifiableCredential>
          publicKey: string;
          accountConfig: {
            ssi:
              {
                didMethod: "did:ethr",
                vcStore: {
                  snap: true,
                  ceramic: true
                }
              }
          }
        },
      0x8Db2a08D...caD7:
        {
          identifiers: Record<string, IIdentifier>,
          vcs: Record<string, VerifiableCredential>
          publicKey: string;
          accountConfig: {
            ssi:
              {
                didMethod: "did:key",
                vcStore: vcStore: {
                  snap: true,
                  ceramic: false
                }
              }
          }
        },
      ...,
    },
}
```