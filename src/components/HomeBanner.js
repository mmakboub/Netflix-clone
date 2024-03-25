const HomeBanner = () => {
    return (
        <div className="home-banner">
            <div className="our-story">
                <h1 className="our-story-card-title" data-uia="hero-title">Unlimited movies, TV shows and more.</h1>
                <h2 className="our-story-card-subtitle" data-uia="our-story-card-subtitle">Watch anywhere. Cancel anytime.</h2>
                <p className="email-form-title">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Email Address" />
                    <button className="input-group-button btn-danger text-white">Get Started</button>
                </div>
            </div>
            <div className="shadow"></div>
            <img class="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/29f6ee58-8944-4b11-b9d9-001c0a1c7c22/MA-fr-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/29f6ee58-8944-4b11-b9d9-001c0a1c7c22/MA-fr-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/29f6ee58-8944-4b11-b9d9-001c0a1c7c22/MA-fr-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/29f6ee58-8944-4b11-b9d9-001c0a1c7c22/MA-fr-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt="" />   </div>
    )
}

export default HomeBanner;