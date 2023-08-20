// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "./WriteSVG.sol";

struct Card {
    string message;
    uint256 timestamp;
    string stamp;
    address account;
    string[] signatures;
}

contract PostOffice is ERC1155, WriteSVG {
    // CARDS
    Card[] private _cards;
    string private _currentStamp;
    mapping(uint256 => mapping(address => bool)) private _signedStatus;

    constructor() ERC1155("") {}

    // MINT CARD TO ADDRESS
    function mint(address account, string memory message, string memory signature) public returns (bool) {
        // check regex of sign should be a svg data uri
        require(bytes(signature).length > 0, "Sign is empty");
        string memory data = string(abi.encodePacked("Hello ", message));
        string[] memory signatures = new string[](1);
        signatures[0] = signature;
        _cards.push(Card(message, block.timestamp, _currentStamp, account, signatures));
        _mint(account, _cards.length, 1, abi.encodePacked(data));
        return true;
    }

    // SIGN CARD
    function sign(uint256 id, string memory signature) public returns (bool) {
        bytes memory byteName = bytes(signature);
        require(id < _cards.length, "Card does not exist");
        require(!_signedStatus[id][msg.sender], "Card already signed");
        require(!(byteName.length <= 0), "No signature");

        Card storage card = _cards[id];
        require(card.timestamp + 1 days > block.timestamp, "Card expired");

        _cards[id].signatures.push(signature);
        _signedStatus[id][msg.sender] = true;
        return true;
    }

    function uri(uint256 id) public view override returns (string memory) {
        require(id < _cards.length, "Card does not exist");
        return constructCard(id);
    }

    function setCurrentStamp(string memory link) public returns(bool) {
      // TODO: OWNER ONLY
      _currentStamp = link;
      return true;
    }
    function getCurrentStamp() public view returns (string memory) {
      return _currentStamp;
    }

    function writedebug (uint256 id) public view returns (string memory) {
      return _cards[id].message;
    }

    function constructCard(uint256 id) internal view returns (string memory) {
      string memory postcard = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800">';
      
      // SETUP THE BG
      postcard = string(abi.encodePacked(postcard, '<rect xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="100%" height="100%" fill="#000" style="stroke:#222;stroke-width:3" />'));

      // SETUP THE DIVIDER
      postcard = string(abi.encodePacked(postcard, '<g stroke="#222" stroke-width="2"><line x1="400" y1="20" x2="400" y2="480" /></g>'));

      // SETUP THE STAMP
      // TODO: add stamp to card
      postcard = string(abi.encodePacked(postcard, '<g style="stroke:#222;stroke-width:2;fill:#000"> <rect x="720" y="20" width="50" height="50" />','<image x="720" y="20" width="50" href="',_currentStamp,'" />','</g>'));


      // SETUP THE MESSAGE
      postcard = string(abi.encodePacked(postcard, '<g transform="translate(20, 20)">'));
      postcard = string(abi.encodePacked(postcard, write(_cards[id].message, '#fff',3)));
      postcard = string(abi.encodePacked(postcard, '</g>'));

      // ADD THE ADDRESS
      postcard = string(abi.encodePacked(postcard, '<g transform="translate(420, 120)">'));
      postcard = string(abi.encodePacked(postcard, write(string(abi.encodePacked('TO: ', Strings.toHexString(uint160(_cards[id].account), 20))), '#666',2)));
      postcard = string(abi.encodePacked(postcard, '</g>'));


      // ADD THE SIGNATURES
      postcard = string(abi.encodePacked(postcard, '<g transform="translate(420, 200)">'));
      postcard = string(abi.encodePacked(postcard, write('SIGNATURES:', '#666',2)));
      postcard = string(abi.encodePacked(postcard, '</g>'));

      postcard = string(abi.encodePacked(postcard, '<g transform="translate(420, 220) scale(0.5)" fill-rule="evenodd" clip-rule="evenodd" fill="#666" style="display:flex;flex-wrap:wrap;gap:2px;">'));
      for (uint256 i = 0; i < _cards[id].signatures.length; i++) {
        postcard = string(abi.encodePacked(postcard,'<image href="', _cards[id].signatures[i],'"/>'));
      }
      postcard = string(abi.encodePacked(postcard, '</g>'));


      // END THE SVG
      postcard = string(abi.encodePacked(postcard, '</svg>'));

      postcard = string(abi.encodePacked(
        'data:image/svg+xml;base64,',
        Base64.encode(bytes(postcard))
      ));

      // SETUP THE MESSAGE
      return postcard;

      bytes memory dataURI = abi.encodePacked(
            '{',
                '"name":', _cards[id].message, '"',
                '"description":', _cards[id].message, '"',
                '"image": "', postcard, '"'
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
