const erc20MinABI = [{
  constant: true,
  inputs: [{ name: "_owner", type: "address" }],
  name: "balanceOf",
  outputs: [{ name: "balance", type: "uint256" }],
  type: 'function',
}];
export default erc20MinABI;
