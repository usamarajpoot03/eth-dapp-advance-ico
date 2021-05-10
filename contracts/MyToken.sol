pragma solidity ^0.6.2;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {


    uint256 public decimalsValue = 18;

    address payable public owner;
    address public crowdSaleAddress;
    uint256 public ICOEndTime;


    modifier onlyOwner {
        require(msg.sender != owner);
        _;
    }

    modifier onlyCrowdsale {
        require(msg.sender != crowdSaleAddress);
        _;
    }

    modifier afterCrowdsale {
        require(now > ICOEndTime || msg.sender == crowdSaleAddress);
        _;
    }

    constructor(uint256 _ICOEndTime) public ERC20('FreightCoin', 'FR8') {
        _mint(msg.sender,  210e6);
        _setupDecimals(uint8(decimalsValue));
        
        owner = msg.sender;
        ICOEndTime = _ICOEndTime;
    }

    function setCrowsale(address _crowdSaleAddress) public onlyOwner {
        require(_crowdSaleAddress != address(0));
        crowdSaleAddress = _crowdSaleAddress;
    }

    function buyTokens(address _receiver, uint256 _amount) public onlyCrowdsale {
        require(_receiver != address(0) && _amount > 0);
        transfer(_receiver, _amount);
    }

    /// @notice Override the functions to not allow token transfers until the end of the ICO
    function transfer(address _to, uint256 _value) public override afterCrowdsale returns(bool) {
    return super.transfer(_to, _value);
    }

    /// @notice Override the functions to not allow token transfers until the end of the ICO
    function transferFrom(address _from, address _to, uint256 _value) public override afterCrowdsale returns(bool) {
    return super.transferFrom(_from, _to, _value);
    }

    /// @notice Override the functions to not allow token transfers until the end of the ICO
    function approve(address _spender, uint256 _value) public override afterCrowdsale returns(bool) {
    return super.approve(_spender, _value);
    }


    /// @notice Override the functions to not allow token transfers until the end of the ICO
    function allowance(address _owner, address _spender) public view override afterCrowdsale returns(uint256) {
    return super.allowance(_owner, _spender);
    }


    /// @notice Override the functions to not allow token transfers until the end of the ICO
    function increaseAllowance(address _spender, uint256 _addedValue) public override afterCrowdsale returns(bool) {
    return super.increaseAllowance(_spender, _addedValue);
    }


    /// @notice Override the functions to not allow token transfers until the end of the ICO
    function decreaseAllowance(address _spender, uint256 _subtractedValue) public override afterCrowdsale returns(bool) {
    return super.decreaseAllowance(_spender, _subtractedValue);
    }

    
    function emergencyExtract() external onlyOwner {
        owner.transfer(address(this).balance);
    }


}