// SPDX-License-Identifier: UNLICENSED
 
pragma solidity ^0.8.17; //version of solidity we want our compiler to use 
 
import "hardhat/console.sol";
 
contract MyNFT {
    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}
