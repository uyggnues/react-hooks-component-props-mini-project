function Header(props){ // this component is suppose to recieve a data
    // console.log(props)
    return (
        <header>
            <h1>Placeholder</h1>
            <p>{props.myInfo}</p>
        </header>
    )
}

export default Header;