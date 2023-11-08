const Hero = () => {
    return (
        <div className="text-center">
            {
                new Date().getHours() >= 12
                    ? <h2>Good Afternoon! Bangladesh! ❤️</h2>
                    : <h2>Good Morning Bangladesh! ❤️</h2>
            }
        </div>
    );
};

export default Hero;
