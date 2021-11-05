let products = [
    {
        type: 'keyboard',
        img: './img/keyboard-1.jpg',
        name: 'Dareu EK868 Bluetooth Mechanical Gaming Keyboard',
        company: 'Dareu',
        oldPrice: 55.99,
        saleOff: '-25%',
        saleOffValue: 0.25,
        special: 'Cheapest',
        id: 'GMP001'
    }
    ,
    {
        type: 'keyboard',
        img: './img/keyboard-2.jpg',
        name: 'IKBC Gundam TKL (C200)',
        company: 'IKBC',
        oldPrice: 144.99,
        saleOff: '-20%',
        saleOffValue: 0.2,
        id: 'GMP002'
    }
    ,
    {
        type: 'keyboard',
        img: './img/keyboard-3.jpg',
        name: 'Keychron K12 Wireless Mechanical Keyboard',
        company: 'Keychron',
        oldPrice: 99.99,
        saleOff: '-10%',
        saleOffValue: 0.1,
        id: 'GMP003'
    }
    ,
    {
        type: 'keyboard',
        img: './img/keyboard-4.jpg',
        name: 'IKBC S200 GODIVA',
        company: 'IKBC',
        oldPrice: 154.99,
        saleOff: '-25%',
        saleOffValue: 0.25,
        special: 'Best Selling',
        id: 'GMP004'
    }
    ,
    {
        type: 'keyboard',
        img: './img/keyboard-5.jpg',
        name: 'IKBC Gundam RX-78-2 Version 2.0',
        company: 'IKBC',
        oldPrice: 156.99,
        saleOff: '-20%',
        saleOffValue: 0.2,
        id: 'GMP005'
    }
    ,
    {
        type: 'headphone',
        img: './img/headphone-1.jpg',
        name: 'Razer Blackshark V2 Pro – Rainbow Six Siege Edition',
        company: 'Razer',
        oldPrice: 224.99,
        saleOff: '-40%',
        saleOffValue: 0.4,
        id: 'GMP006'
    }
    ,
    {
        type: 'headphone',
        img: './img/headphone-2.jpg',
        name: 'Epos H3 – Closed Acoustic Gaming Headset',
        company: 'Epos Audio',
        oldPrice: 136.99,
        saleOff: '-15%',
        saleOffValue: 0.15,
        special: 'Best Selling',
        id: 'GMP007'
    }
    ,
    {
        type: 'headphone',
        img: './img/headphone-3.jpg',
        name: 'Sades Wings 100 Pro',
        company: 'Sades',
        oldPrice: 34.99,
        saleOff: '-10%',
        saleOffValue: 0.1,
        id: 'GMP008'
    }
    ,
    {
        type: 'headphone',
        img: './img/headphone-4.jpg',
        name: 'Digital Alliance Delta Art X',
        company: 'Digital Alliancer',
        oldPrice: 24.99,
        saleOff: '-10%',
        saleOffValue: 0.1,
        special: 'Cheapest',
        id: 'GMP009'
    }
    ,
    {
        type: 'headphone',
        img: './img/headphone-5.jpg',
        name: 'Razer Hammerhead True Wireless (2021 Edition)',
        company: 'Razer',
        oldPrice: 154.99,
        saleOff: '-20%',
        saleOffValue: 0.2,
        id: 'GMP010'
    }
    ,
    {
        type: 'chair',
        img: './img/chair-1.jpg',
        name: 'MSI MAG CH130 X',
        company: 'MSI',
        oldPrice: 299.99,
        saleOff: '-25%',
        saleOffValue: 0.25,
        id: 'GMP011'
    }
    ,
    {
        type: 'chair',
        img: './img/chair-2.jpg',
        name: 'MSI MAG CH120 I',
        company: 'MSI',
        oldPrice: 244.99,
        saleOff: '-15%',
        saleOffValue: 0.15,
        special: 'Best Selling',
        id: 'GMP012'
    }
    ,
    {
        type: 'chair',
        img: './img/chair-3.jpg',
        name: 'MSI MAG CH120 X',
        company: 'MSI',
        oldPrice: 244.99,
        saleOff: '-20%',
        saleOffValue: 0.2,
        id: 'GMP013'
    }
    ,
    {
        type: 'chair',
        img: './img/chair-4.jpg',
        name: 'MSI MAG CH130 I Repeltek Fabric',
        company: 'MSI',
        oldPrice: 369.99,
        saleOff: '-30%',
        saleOffValue: 0.3,
        id: 'GMP014'
    }
    ,
    {
        type: 'chair',
        img: './img/chair-5.jpg',
        name: 'Fantech Office Chair A258',
        company: 'MSI',
        oldPrice: 69.99,
        saleOff: '-20%',
        saleOffValue: 0.2,
        special: 'Cheapest',
        id: 'GMP015'
    }
    ,
    {
        type: 'mouse',
        img: './img/mouse-1.jpg',
        name: 'HyperX Pulsefire Raid',
        company: 'HyperX',
        oldPrice: 53.99,
        saleOff: '-15%',
        saleOffValue: 0.15,
        id: 'GMP016'
    }
    ,
    {
        type: 'mouse',
        img: './img/mouse-2.jpg',
        name: 'Sades Hunter',
        company: 'Sades',
        oldPrice: 7.99,
        saleOff: '-5%',
        saleOffValue: 0.05,
        special: 'Cheapest',
        id: 'GMP017'
    }
    ,
    {
        type: 'mouse',
        img: './img/mouse-3.jpg',
        name: 'Tecware Exo Lite',
        company: 'Tecware',
        oldPrice: 14.99,
        saleOff: '-15%',
        saleOffValue: 0.15,
        id: 'GMP018'
    }
    ,
    {
        type: 'mouse',
        img: './img/mouse-4.jpg',
        name: 'Logitech G502 Hero K/DA',
        company: 'Logitech',
        oldPrice: 59.99,
        saleOff: '-10%',
        saleOffValue: 0.1,
        special: 'Best Selling',
        id: 'GMP019'
    }
    ,
    {
        type: 'mouse',
        img: './img/mouse-5.jpg',
        name: 'Razer Basilisk V3',
        company: 'Razer',
        oldPrice: 79.99,
        saleOff: '-25%',
        saleOffValue: 0.25,
        id: 'GMP020'
    }
    ,
    {
        type: 'hardware',
        img: './img/hardware-1.jpg',
        name: 'EVGA Geforce GTX 1050 SC – 2GB',
        company: 'EVGA',
        oldPrice: 121.99,
        saleOff: '-15%',
        saleOffValue: 0.15,
        id: 'GMP021'
    }
    ,
    {
        type: 'hardware',
        img: './img/hardware-2.jpg',
        name: 'Colorful GeForce GTX1050 LP 2G',
        company: 'Colorful',
        oldPrice: 214.99,
        saleOff: '-20%',
        saleOffValue: 0.2,
        special: 'Best Selling',
        id: 'GMP022'
    }
    ,
    {
        type: 'hardware',
        img: './img/hardware-3.jpg',
        name: 'Colorful iGame GeForce GTX1060 U-TOP 6G',
        company: 'Colorful',
        oldPrice: 379.99,
        saleOff: '-20%',
        saleOffValue: 0.2,
        id: 'GMP023'
    }
    ,
    {
        type: 'hardware',
        img: './img/hardware-4.jpg',
        name: 'Colorful GeForce GTX1050Ti NB 4G',
        company: 'Colorful',
        oldPrice: 219.99,
        saleOff: '-25%',
        saleOffValue: 0.25,
        id: 'GMP024'
    }
    ,
    {
        type: 'hardware',
        img: './img/hardware-5.jpg',
        name: 'Colorful GeForce GT1030 2G V2',
        company: 'Colorful',
        oldPrice: 89.99,
        saleOff: '-15%',
        saleOffValue: 0.15,
        special: 'Cheapest',
        id: 'GMP025'
    }
]
export {products}