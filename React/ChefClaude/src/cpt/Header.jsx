import chefClaude from "../assets/chef-claude-icon.png"

export default function Header(){
    return (
        <header className="header">
                <img className= "claude" src={chefClaude} alt="chef claude icon" />
                <h1 className="claude-title">Chef Claude</h1>
        </header>
    )
}