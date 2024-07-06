import { NetworkProvider } from '@ton/blueprint';
import { Address, toNano } from '@ton/core';
import { buildOnchainMetadata } from '../utils/jetton-helpers';
import { SampleJetton } from '../wrappers/SampleJetton';

export async function run(provider: NetworkProvider) {
    const jettonParams = {
        name: 'LEXI coin',
        description: 'Official token of LexiTon project',
        symbol: 'LEXI',
        image: 'https://magenta-useful-catshark-496.mypinata.cloud/ipfs/QmWUD2g48SDqkjSoowQn4e4LFnrhoak6kuMgmPvzK8ZMKh',
    };

    // Create content Cell
    let content = buildOnchainMetadata(jettonParams);

    const sampleJetton = provider.open(
        await SampleJetton.fromInit(provider.sender().address as Address, content, 1000000000000000n),
    );

    await sampleJetton.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'MintPublic',
            amount: 100000000000000n,
        },
    );

    await provider.waitForDeploy(sampleJetton.address);

    // run methods on `sampleJetton`
}
