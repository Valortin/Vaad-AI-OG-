import { useWriteContract } from 'wagmi';

export const useStorePrediction = () => {
  const { writeContract, error, isPending } = useWriteContract();

  const write = ({ args }: { args: [string, bigint, string] }) => {
    writeContract({
      address: '0xYourContractAddress', // Replace with deployed contract address
      abi: [
        {
          name: 'storePrediction',
          type: 'function',
          stateMutability: 'nonpayable',
          inputs: [
            { name: 'coinAddress', type: 'string' },
            { name: 'predictedValue', type: 'uint256' },
            { name: 'postTime', type: 'string' },
          ],
          outputs: [],
        },
      ],
      functionName: 'storePrediction',
      args,
    });
  };

  return { write, error, isPending };
};