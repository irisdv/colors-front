import { Abi, Contract } from 'starknet';

import mix_abi from '../abi/mix_abi.json';
import { Provider } from 'starknet';

export function useMixingContract() {
  const Mixing = new Contract(
    mix_abi as Abi,
    process.env.NEXT_PUBLIC_NAMING_CONTRACT as string,
    new Provider({
      sequencer: {
        network: 'goerli-alpha', // "mainnet-alpha"
      },
    }),
  );
  return Mixing;
}
