// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract BasicSmartContract {
    string public stateVariable = "0xB12ab21C6e26e8305A46DB81C5852F5ed1f8C146";

    uint256 public changeStateVariable;

    constructor() {}

    function changeState(uint256 _changeStateVariable) public payable {
        changeStateVariable = _changeStateVariable;
    }
}
