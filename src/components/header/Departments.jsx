// react
import React, { Component } from 'react';

// application
import departmentsArea from '../../services/departmentsArea';
import DepartmentsLinks from './DepartmentsLinks';
import { Menu18x14Svg, ArrowRoundedDown9x6Svg } from '../../svg';
import {Services} from "../../Services";
import Functions from "../../Functions";


class Departments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            fixed: false,
            area: null,
            menu: [
                {
                    title: 'Phones & Tablets',
                    url: '',
                    submenu: {
                        type: 'megamenu',
                        menu: {
                            size: 'nl',
                            image: {
                                ltr: 'images/megamenu/megamenu-3-ltr.jpg',
                                rtl: 'images/megamenu/megamenu-3-rtl.jpg',
                            },
                            columns: [
                                {
                                    size: 6,
                                    links: [
                                        {
                                            title: 'MOBILE PHONES',
                                            url: '',
                                            links: [
                                                { title: 'Smart Phones', url: '' },
                                                { title: 'Blu Phones', url: '' },
                                                { title: 'Feature Phones', url: '' },
                                                { title: 'IPhones', url: '' },
                                            ],
                                        },
                                        {
                                            title: 'ACCESSORIES',
                                            url: '',
                                            links: [
                                                { title: 'Batteries', url: '' },
                                                { title: 'Cables', url: '' },
                                                { title: 'Chargers', url: '' },
                                                { title: 'Covers', url: '' },
                                                { title: 'Power Banks', url: '' },
                                                { title: 'Storage Devices', url: '' },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    size: 6,
                                    links: [
                                        {
                                            title: 'TABLETS',
                                            url: '',
                                            links: [
                                                { title: 'Ipads', url: '' },
                                                { title: 'Kids & Tablet', url: '' },
                                                { title: 'Tablet Accessories', url: '' },
                                                { title: 'Featured Tablets', url: '' },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    },
                },
            ]
        };
        this.services = new Services(this);
        this.funcs = new Functions(this)
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleOutsideClick);

        this.unsubscribeAria = departmentsArea.subscribe((area) => {
            this.setState({
                fixed: !!area,
                area,
            });
        });

        this.setState({
            fixed: !!departmentsArea.area,
            area: departmentsArea.area,
        });
        this.getMenu();
    }

    getMenu = e => {
        this.services.getProductsMainMenu().then(resp=>{
            if (resp.status === 200) {
                let megamenu = [];
                resp.data.map((item, index)=>{
                    let productCategory = item.productCategory;
                    let products = item.products;
                    let categories  = item.products;
                    let submenu = null
                    let menu = {
                        title: productCategory.productCategoryDescription,
                        url: "/cat/" + productCategory.categoryCode,
                        submenu: submenu
                    };
                    if (categories.length > 0) {
                        submenu = [];
                    }
                    let columns = [];
                    categories.map((category, i)=>{

                    });
                    megamenu.push(menu)
                });
                this.setState({
                    menud: [
                        {
                            title: 'Phones & Tablets',
                            url: '',
                            submenu: {
                                type: 'megamenu',
                                menu: {
                                    size: 'nl',
                                    image: {
                                        ltr: 'images/megamenu/megamenu-3-ltr.jpg',
                                        rtl: 'images/megamenu/megamenu-3-rtl.jpg',
                                    },
                                    columns: [
                                        {
                                            size: 6,
                                            links: [
                                                {
                                                    title: 'MOBILE PHONES',
                                                    url: '',
                                                    links: [
                                                        { title: 'Smart Phones', url: '' },
                                                        { title: 'Blu Phones', url: '' },
                                                        { title: 'Feature Phones', url: '' },
                                                        { title: 'IPhones', url: '' },
                                                    ],
                                                },
                                                {
                                                    title: 'ACCESSORIES',
                                                    url: '',
                                                    links: [
                                                        { title: 'Batteries', url: '' },
                                                        { title: 'Cables', url: '' },
                                                        { title: 'Chargers', url: '' },
                                                        { title: 'Covers', url: '' },
                                                        { title: 'Power Banks', url: '' },
                                                        { title: 'Storage Devices', url: '' },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            size: 6,
                                            links: [
                                                {
                                                    title: 'TABLETS',
                                                    url: '',
                                                    links: [
                                                        { title: 'Ipads', url: '' },
                                                        { title: 'Kids & Tablet', url: '' },
                                                        { title: 'Tablet Accessories', url: '' },
                                                        { title: 'Featured Tablets', url: '' },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            title: 'Electronics',
                            url: '',
                            submenu: {
                                type: 'megamenu',
                                menu: {
                                    size: 'lg',
                                    image: {
                                        ltr: 'images/megamenu/megamenu-2-ltr.jpg',
                                        rtl: 'images/megamenu/megamenu-2-rtl.jpg',
                                    },
                                    columns: [
                                        {
                                            size: 4,
                                            links: [
                                                {
                                                    title: 'TELEVISIONS',
                                                    url: '',
                                                    links: [
                                                        { title: 'Smart TVs', url: '' },
                                                        { title: 'Curved TVs', url: '' },
                                                        { title: 'Television Accessories', url: '' },
                                                        { title: 'Digital TV', url: '' },
                                                    ],
                                                },
                                                {
                                                    title: 'Audios and Speakers',
                                                    url: '',
                                                    links: [
                                                        { title: 'Bluetooth Speakers', url: '' },
                                                        { title: 'DVD Players', url: '' },
                                                        { title: 'Sound Bars', url: '' },
                                                        { title: 'Subwoofers', url: '' },
                                                        { title: 'Home Theaters', url: '' },
                                                        { title: 'Receivers and Amplifiers', url: '' },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            size: 4,
                                            links: [
                                                {
                                                    title: 'Best Brands',
                                                    url: '',
                                                    links: [
                                                        { title: 'Star X', url: '' },
                                                        { title: 'LG', url: '' },
                                                        { title: 'Samsung', url: '' },
                                                        { title: 'Sonny', url: '' },
                                                        { title: 'Hisense', url: '' },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            size: 4,
                                            links: [
                                                {
                                                    title: 'Audio Devices',
                                                    url: '',
                                                    links: [
                                                        { title: 'Earphones', url: '' },
                                                        { title: 'Headphones', url: '' },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                        },
                        { title: 'Electronics', url: '', submenu: null },
                        { title: 'Home & Living', url: '', submenu: null },
                        { title: 'Computers', url: '', submenu: null },
                        { title: 'Automobile', url: '', submenu: null },
                        { title: 'Video Games', url: '', submenu: null },
                        { title: 'Toys & Kids', url: '', submenu: null },
                        { title: 'Camera and Watches', url: '', submenu: null },
                        { title: 'Health & Beauty', url: '', submenu: null },
                        { title: 'Afrocrafts', url: '', submenu: null },
                        { title: 'More Categories', url: '', submenu: null },
                    ],
                    menu: megamenu
                })
            }
        })
    };

    componentDidUpdate(prevProps, prevState) {
        const { fixed, area, open } = this.state;

        if (prevState.fixed !== fixed) {
            const root = this.wrapperRef;
            const content = root.querySelector('.departments__links-wrapper');

            if (fixed) {
                const areaRect = area.getBoundingClientRect();
                const areaBottom = areaRect.top + areaRect.height + window.scrollY;

                root.classList.remove('departments--transition');
                root.classList.add('departments--fixed', 'departments--opened');

                const height = areaBottom - (content.getBoundingClientRect().top + window.scrollY);

                content.style.height = `${height}px`;
                content.getBoundingClientRect(); // force reflow
            } else {
                root.classList.remove('departments--opened', 'departments--fixed');
                content.style.height = '';
            }
        } else if (!fixed) {
            if (open) {
                const root = this.wrapperRef;

                const content = root.querySelector('.departments__links-wrapper');
                content.getBoundingClientRect(); // force reflow
                const startHeight = content.getBoundingClientRect().height;

                root.classList.add('departments--transition', 'departments--opened');

                const endHeight = content.getBoundingClientRect().height;

                content.style.height = `${startHeight}px`;
                content.getBoundingClientRect(); // force reflow
                content.style.height = `${endHeight}px`;
            } else {
                const root = this.wrapperRef;
                const content = root.querySelector('.departments__links-wrapper');
                const startHeight = content.getBoundingClientRect().height;

                content.style.height = `${startHeight}px`;

                root.classList.add('departments--transition');
                root.classList.remove('departments--opened');

                content.getBoundingClientRect(); // force reflow
                content.style.height = '';
            }
        }
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleOutsideClick);

        this.unsubscribeAria();
    }

    unsubscribeAria = () => {};

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    };

    handleOutsideClick = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState(() => ({
                open: false,
            }));
        }
    };

    handleButtonClick = () => {
        this.setState((state) => ({
            open: !state.open,
        }));
    };

    handleTransitionEnd = (event) => {
        if (this.wrapperRef && event.propertyName === 'height') {
            this.wrapperRef.querySelector('.departments__links-wrapper').style.height = '';
            this.wrapperRef.classList.remove('departments--transition');
        }
    };

    render() {
        return (
            <div className="departments" ref={this.setWrapperRef}>
                <div className="departments__body">
                    <div className="departments__links-wrapper" onTransitionEnd={this.handleTransitionEnd}>
                        <ul className="departments__links">
                            {/*{linksList}*/}
                            {DepartmentsLinks(this.state.menu)}
                        </ul>
                    </div>
                </div>

                <button type="button" className="departments__button" onClick={this.handleButtonClick}>
                    <Menu18x14Svg className="departments__button-icon" />
                    Shop By Category
                    <ArrowRoundedDown9x6Svg className="departments__button-arrow" />
                </button>
            </div>
        );
    }
}

export default Departments;
