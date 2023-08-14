pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

struct Card {
    uint256 id;
    string message;
    string[] signatures;
}

contract PostOffice is ERC1155 {
    // CARDS
    Card[] private _cards;
    mapping(uint256 => mapping(address => bool)) private _signedStatus;

    constructor() ERC1155("") {}

    // MINT CARD TO ADDRESS
    function mint(address account, string memory message, string memory sign) public {
        // check regex of sign should be a svg data uri
        require(bytes(sign).length > 0, "Sign is empty");
        string memory data = string(abi.encodePacked("Hello ", message));
        _cards.push(Card(_cards.length, message, 102, data));
        _mint(account, _cards.length, 1, abi.encodePacked(data));
    }

    // SIGN CARD
    function sign(uint256 id, string memory name) public returns (bool) {
        bytes memory byteName = bytes(name);
        require(id < _cards.length, "Card does not exist");
        require(!_signedStatus[id][msg.sender], "Card already signed");
        require(!(byteName.length <= 0), "No signature");
        require(
            !(byteName.length >= 10),
            "Signature must be 10 or less characters"
        );
        require(block.timestamp <= 1660453200, "Jacks birthday is over");
        require(!hasSpace(name), "Signatures must be without spaces");

        _cards[id].data = string(
            abi.encodePacked(_cards[id].data, " - ", name)
        );
        _signedStatus[id][msg.sender] = true;
        return true;
    }

    function uri(uint256 id) public view override returns (string memory) {
        require(id < _cards.length, "Card does not exist");
        return constructCard(id);
    }

    function constructCard(uint256 id) internal view returns (string memory) {
      string memory present = '';

      // SETUP THE BG


      // SETUP THE MESSAGE

      

      bytes memory dataURI = abi.encodePacked(
            '{',
                '"name":', _cards[id].message, '"',
                '"description":', _cards[id].message, '"',
                '"image": "', present, '"'
            '}'
        );

        return string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64.encode(dataURI)
            )
        );
    }

    function hasSpace(string memory name) internal pure returns (bool) {
        for (uint256 i = 0; i < bytes(name).length; i++) {
            bytes memory firstCharByte = new bytes(1);
            firstCharByte[0] = bytes(name)[i];
            uint8 decimal = uint8(firstCharByte[0]);
            if (decimal == 32) {
                return true;
            }
        }
        return false;
    }
}
