require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure thought chaos rate magic attitude coral light army gentle'; 
let testAccounts = [
"0x86349adeb0b7de46917e79ff01beee0df6c94ce606eeb27d84944cbfaa60e711",
"0x4dab17e7a1b17827c5653131d15413c143b9f3f65e9d76bb25fd9c0e002c6411",
"0xa5a868b9a009fb8e950a3b826e9d4cd708127bb55e60cf2d088a3ec180ac96f6",
"0x87d09cecbe7de056a7ae05283364e109a57540bf15fdb2c1b9c13b5b94a17e1a",
"0x4d163f5c0c1799205b6cc0621740f037c4b770d83c8cb35f3efcf320a8617e76",
"0x013f6f633b65bcbb6fc9b60a3513379dfe5291632803fde82b81b46c5ed4f9b2",
"0xc362937a106fcb964c604447aaddffe1747b9d218d4a381ce9a54635268b5c71",
"0x771433471d135cf9e95c9b0f06e332c820d85fab58b969b9e0bb435d60245cf0",
"0x4028c99d4ce1df05369ff3530380bf2ee7b603ab8d00a958fc44ce6f9e30f16c",
"0x6dec3d8b8cffd7481bf001ea8f91b6f0b65779126e3a2c41a038a6387e4a6d2f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

