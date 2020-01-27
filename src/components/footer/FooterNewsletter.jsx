// react
import React from 'react';

// data stubs
import theme from '../../data/theme';


export default function FooterNewsletter() {
    const socialLinks = [
        {
            key: 'facebook',
            url: 'https://www.facebook.com/hashmart2017/',
            iconClass: 'fab fa-facebook-f',
        },
        {
            key: 'twitter',
            url: 'https://twitter.com/hashmart_ke',
            iconClass: 'fab fa-twitter',
        },
        {
            key: 'youtube',
            url: 'https://www.youtube.com/channel/UCYN_filobtUcNYTNUvz1NXw',
            iconClass: 'fab fa-youtube',
        },
        {
            key: 'instagram',
            url: 'https://www.instagram.com/hashmartkenya',
            iconClass: 'fab fa-instagram',
        },
    ];

    const socialLinksList = socialLinks.map((item) => (
        <li key={item.key} className={`footer-newsletter__social-link footer-newsletter__social-link--${item.key}`}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
                <i className={item.iconClass} />
            </a>
        </li>
    ));

    return (
        <div className="site-footer__widget footer-newsletter">
            <h5 className="footer-newsletter__title">Newsletter</h5>
            <div className="footer-newsletter__text">
                Join us! We promise we won't spam
            </div>

            <form action="" className="footer-newsletter__form">
                <label className="sr-only" htmlFor="footer-newsletter-address">Email Address</label>
                {/* TODO: Email subscription implementation*/}
                <input
                    type="text"
                    className="footer-newsletter__form-input form-control"
                    id="footer-newsletter-address"
                    placeholder="Email Address..."
                />
                <button type="submit" className="footer-newsletter__form-button btn btn-primary">Subscribe</button>
            </form>

            <div className="footer-newsletter__text footer-newsletter__text--social">
                Follow us on social networks
            </div>

            <ul className="footer-newsletter__social-links">
                {socialLinksList}
            </ul>
        </div>
    );
}
