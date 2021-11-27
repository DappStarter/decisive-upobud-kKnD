require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remind puppy hunt beauty flip gauge'; 
let testAccounts = [
"0xbcac941897570bd577bddb425ab46f105a752fc55f4e159673e6d486e432ecf1",
"0x2ba51f1c172fab5eebd2525839672bd904ee87803b4923d35c242382b0c5c50f",
"0x8768b58225947d3145592a85f439f55ca4166586372664d8485eea9b85c88d82",
"0x16756d0c6a04039e9e665c1fc28dcdc64dca279d16df19686af4cb5112c25417",
"0x79d67f07b1a6f56f732b8f4e24cf57e8bd756060136f19bfe3715de359163ad1",
"0x9ac822f835efab59604ed7c84c4b1f62e789786c4e3134423abc37e372e85f75",
"0x0d4b87cc9f831ee0abf90b2022ff70acb513fe04cc3a4259549a9704ed656a29",
"0x83e2a0351c3390e9ec1407eec6611c30078fd66dd1b665d6b074eeaa7183a37c",
"0x87f0527dee1bfbdacc8dadae14fd7f113a5025062834528e0424b24f937cd460",
"0x5ca06e903a4cc8c5d776f4454b7cf5701d20ee301f0af42d35419142edb43948"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


