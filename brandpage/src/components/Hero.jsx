const HeroSection = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    Your feet deserve the best, and we’re here to help you with our shoes.
                    Explore comfort, style, and performance in every step.
                </p>

                <div className="hero-btn">
                    <button className="primary-btn">Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also available on</p>
                    <div className="brand-icon">
                        <img src="/images/amazon.png" alt="Amazon logo" />
                        <img src="/images/flipkart.png" alt="Flipkart logo" />
                    </div>
                </div>
            </div>

            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="Nike red shoe" />
            </div>
        </main>
    );
};

export default HeroSection;
