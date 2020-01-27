// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// application
import StroykaSlick from '../shared/StroykaSlick';

// data stubs
import theme from '../../data/theme';


const slickSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 379,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

function SitePageAboutUs() {
    return (
        <div className="block about-us">
            <Helmet>
                <title>{`About Us — ${theme.name}`}</title>
            </Helmet>

            <div className="about-us__image" style={{ backgroundImage: 'url("images/aboutus.jpg")' }} />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-10">
                        <div className="about-us__body">
                            <h1 className="about-us__title">About Us</h1>
                            <div className="about-us__text typography">
                                <p>
                                    Hashmart is an online store in Kenya geared toward supplying top brands of electronics & accessories, lifestyle collections to satisfy consumer and corporate needs.
                                </p>
                                <p>
                                    Our wide variety of products brings together the best smartphones, computer& accessories, networking products (IT), home appliances, home entertainment, and wearables such as watches, sunglasses and other lifestyle products.
                                    Hashmart continues to maintain the highest standards for our products and services. Hashmart’s exceptional work force remains committed to carefully upholding the principles of quality and integrity that define the company.
                                </p>
                                <p>
                                    We attribute the prominence of the Hashmart’s brand to the unique combination of our superior product quality, durability and our commitment to customer service.
                                    Beyond our unbeatable catalog, we offer our customers fast delivery services within Kenya with weekly and monthly promotional offers of up to 50% discount.
                                </p>
                                <p>
                                    <b>Our objectives are to:-</b>
                                    <ul>
                                        <li>Increase marketing efforts</li>
                                        <li>Expand market area</li>
                                        <li>Expand marketing reach</li>
                                        <li>Achieve Brand recognition</li>
                                        <li>Increase telemarketing efforts.</li>
                                    </ul>
                                </p>
                                <p>
                                    In order to achieve our goal, Hashmart’s critical success factors are to identify emerging trends and integrate them into the company operations, respond quickly to technology changes, provide high-quality services, invest time and money in marketing and advertising, expand into specialty markets, and stay ahead of the “technology curve.”
                                </p>
                                <p>
                                    The strategy of Hashmart is simple. The key to customer satisfaction is having the product and services that meet the customer’s needs. A crucial part of that is to also have knowledgeable employees to help customers quickly find what they want.
                                    We give you more for less. Shop online, place an order and relax. We will do the rest for you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SitePageAboutUs;
