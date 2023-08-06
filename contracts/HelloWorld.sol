pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

struct Card {
  uint256 id;
  string message;
  mapping(address => bool) signed;
  string data;
}

contract HelloWorld is ERC1155 {

    // CARDS
    Card[] private _cards;
    
    constructor() ERC1155("") {
    }

    // MINT CARD TO ADDRESS
    function mint(address account, string memory message) public {
        string memory data = "This is a test data";
        _cards.push(Card(_cards.length, message, data));
        _mint(account, _cards.length, 1, abi.encodePacked(data));
    }

    // SIGN CARD
    function sign(uint256 id, string memory name) public {
        require(id < _cards.length, "Card does not exist");
        require(!_cards[id][msg.sender], "Card already signed");
        _cards[id].message = string(abi.encodePacked(_cards[id].message, " - ", name));
        _cards[id][msg.sender] = true;
    }

    function uri(uint256 id) public view override returns (string memory) {
        return _cards[id].data;
    }
}
