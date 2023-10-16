// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

contract PaintingMarketplace {
    
    struct Painting {
        uint256 id;
        address owner;
        string name;
        string artist;
        uint256 price;
        bool isListed;
    }
    
    mapping(uint256 => Painting) public paintings;
    uint256 public totalPaintings;
    
    function createPainting(string memory _name, string memory _artist, uint256 _price) public {
        totalPaintings++;
        paintings[totalPaintings] = Painting(totalPaintings, msg.sender, _name, _artist, _price, true);
    }
    
    function buyPainting(uint256 _id) public payable {
        Painting storage painting = paintings[_id];
        require(painting.isListed, "Painting is not listed for sale");
        require(msg.value == painting.price, "Incorrect amount sent");
        painting.isListed = false;
        payable(painting.owner).transfer(msg.value);
        painting.owner = msg.sender;
    }
    
    function listPainting(uint256 _id, uint256 _price) public {
        Painting storage painting = paintings[_id];
        require(painting.owner == msg.sender, "You are not the owner of this painting");
        require(!painting.isListed, "Painting is already listed for sale");
        painting.isListed = true;
        painting.price = _price;
    }
    
    function getPaintings() public view returns (Painting[] memory) {
        Painting[] memory _paintings = new Painting[](totalPaintings);
        for (uint256 i = 1; i <= totalPaintings; i++) {
            _paintings[i - 1] = paintings[i];
        }
        return _paintings;
    }
}