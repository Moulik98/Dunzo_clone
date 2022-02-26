function navbar(){
    return `
    <div class="first-div">
        <div>
            <img class="dunzo-img" onclick="window.location.href=''" src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-4d2d81aefcf296bc100d9edc114c2ea5.png" alt="">
        </div>
        <div class="location-div">
            <img id="location-icon" src="https://cdn-icons.flaticon.com/png/128/4643/premium/4643473.png?token=exp=1645525965~hmac=fa4c77c03e2a632b4a87adadce613785" alt="">
            <p class="location-tag" onclick="window.location.href=''">Set Location</p>
        </div>
    </div> 
    <div class="second-div">
    <div class="partners-div">
        <p class="Hover-class">Dunzo for partners</p>
    </div>
    <div class="business-div">
        <p class="Hover-class">Business with Dunzo</p>
    </div>
    <div class="search-div">
        <img id="search-icon" src="https://cdn-icons.flaticon.com/png/128/2801/premium/2801881.png?token=exp=1645538287~hmac=5dddd90a879beb87dbd2f1e5dbf4906a" alt="">
        <p class="Hover-class">Search</p>
    </div>
    <div class="cart-div">
        <img id="cart-icon" src="https://cdn-icons-png.flaticon.com/128/419/419910.png" alt="">
        <p class="Hover-class">Cart</p>
    </div>
    <div class="signin-div">
        <button id="signIn-button">Sign in</button>
    </div>
    </div>
    
    `
}
export default navbar