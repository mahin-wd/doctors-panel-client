import React from 'react';
import footer from '../../../assets/images/footer.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10"
        style={{
            background: `url(${footer})`
        }}
        >
            <div>
                <span className="footer-title text-accent">Services</span>
                <Link to="/" className="link link-hover text-accent">Branding</Link>
                <Link to="/" className="link link-hover text-accent">Design</Link>
                <Link to="/" className="link link-hover text-accent">Marketing</Link>
                <Link to="/" className="link link-hover text-accent">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title text-accent">Company</span>
                <Link to="/" className="link link-hover text-accent">About us</Link>
                <Link to="/" className="link link-hover text-accent">Contact</Link>
                <Link to="/" className="link link-hover text-accent">Jobs</Link>
                <Link to="/" className="link link-hover text-accent">Press kit</Link>
            </div>
            <div>
                <span className="footer-title text-accent">Legal</span>
                <Link to="/" className="link link-hover text-accent">Terms of use</Link>
                <Link to="/" className="link link-hover text-accent">Privacy policy</Link>
                <Link to="/" className="link link-hover text-accent">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;