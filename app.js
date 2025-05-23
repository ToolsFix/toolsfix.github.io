const esigns = [
    {
        name: 'Installing DNS Profile',
        url: 'https://tinyurl.com/j65yazwx',
        img: 'img/icon/dns_profile.png',
        descriptions: 'Cài đặt cấu hình DNS profile'
    },
    {
        name: 'Download File Certificate',
        url: 'app/HDFC Bank Limited.esigncert',
        img: 'img/icon/esign_certs.png',
        descriptions: 'Tải file chứng chỉ'
    },
    {
        name: 'Download TrollInstallerX',
        url: 'app/TrollInstallerX.ipa',
        img: 'img/app/trollinstallerx.png',
        descriptions: 'Tải TrollInstallerX file ipa'
    },
];

const apps = [
    {
        name: 'YouTube ++',
        url: 'https://go.linkbulks.com/9AhG',
        img: 'img/icon/youtube.png',
        descriptions: 'Tải YouTube ++ v20.14.2 file ipa'
    },
    {
        name: 'Filza File Manager',
        url: 'https://github.com/ToolsFix/toolsfix.github.io/releases/download/v4.0.0/Filza_4.0.0.ipa',
        img: 'img/app/filza.png',
        descriptions: 'Tải Filza File Manager v4.0.0 file ipa'
    },
    {
        name: 'Mobile Scanner ++',
        url: 'https://github.com/ToolsFix/toolsfix.github.io/releases/download/v2.13.4/MobileScanner.++_2.13.4.ipa',
        img: 'img/app/mobilescanner.png',
        descriptions: 'Tải Mobile Scanner ++ v2.13.4 file ipa'
    },
    {
        name: 'SoundLab ++',
        url: 'https://github.com/ToolsFix/toolsfix.github.io/releases/download/v2.7.12/SoundLab.++_2.7.12.ipa',
        img: 'img/app/soundlab.png',
        descriptions: 'Tải SoundLab ++ v2.7.12 file ipa'
    },
];

const appssigned = [
    {
        name: 'Đang Cập Nhật',
        url: 'https://',
        img: 'img/icon/badge.png',
        descriptions: 'Không khả dụng'
    },
];

const guides = [
    {
        name: 'Installing TrollStore With Sideloadly',
        url: 'https://ios.cfw.guide/installing-trollstore',
        img: 'img/app/trollstore.png',
        descriptions: 'Cài TrollStore bằng Sideloadly'
    },
    {
        name: 'Installing TrollStore For iOS 16.x - iOS 18.x',
        url: 'TrollStore16_18.html',
        img: 'img/app/trollstore.png',
        descriptions: 'Cài TrollStore cho iOS 16.x - iOS 18.x'
    },
    {
        name: 'Installing ESign ++',
        url: 'esign+.html',
        img: 'img/app/esign.png',
        descriptions: 'Cài ESign ++ bằng TrollStore và Filza'
    },
    {
        name: 'Free Tools & Software',
        url: 'free_tools.html',
        img: 'img/icon/software.png',
        descriptions: 'Tools & Phần mềm miễn phí'
    },
];

const cloudIcon = '<svg class="icon" style="width: 30px;height: 30px ;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="739"><path d="M691.3 693.9c-24.7 0-44.8-20-44.8-44.8 0-24.7 20-44.8 44.8-44.8h40c190.6 0 176.8-274.4 0.2-268.1C671.2 37.2 208 145.1 299 445c-93-73.9-204.6 69.2-109.6 139.8 67.2 49.9 188.5-18.4 188.5 64.3 0 56.3-63.9 44.8-125.3 44.8-149.3 0-241.3-159.3-155.8-281.1 40.8-58.2 104.9-72.6 104.9-72.6C231.4 111.3 492.7-9.5 686.2 120c83.1 55.6 114.5 136.9 114.5 136.9 48.8 14.8 90.7 45.6 119.2 86.4 96 137.3 21.5 350.6-228.6 350.6zM514.2 335.8c0.2 0 0.3 0.1 0.5 0.1s0.3-0.1 0.5-0.1h-1z m177.1 421.1c0-17.5-45.8-17.3-63.3 0.1l-32.8 32.9c-14.1 14.1-38.2 4.2-38.2-15.8V380.6c0-24.5-17.9-44.4-42.3-44.7-24.5 0.3-47.2 20.1-47.2 44.7v393.5c0 19.9-24.1 29.9-38.2 15.8l-32.8-42.1c-17.5-17.5-45.3-9.3-62.8-9.3h-0.2c-17.5 44.8-17.6 55.1-0.1 72.6L449 931.5c35 35 91.6 37.3 126.6 2.3l115.7-114.6c17.5-17.5 0-45.2 0-62.7v0.4z" p-id="740"></path></svg>'

const appContainer = document.querySelector('.app-section');
apps.forEach(app => {
appContainer.innerHTML += render(app.name, app.url, app.img, app.descriptions);
});
appContainer.addEventListener('click', (event) => {
    const target = event.target.closest('.app-container');
    if (target) {
        const url = target.querySelector('.download-btn').getAttribute('href');
        window.open(url, '_blank');
    }
});

const appsignedContainer = document.querySelector('.appsigned-section');
appssigned.forEach(appsigned => {
    appsignedContainer.innerHTML += render(appsigned.name, appsigned.url, appsigned.img, appsigned.descriptions);
});
appsignedContainer.addEventListener('click', (event) => {
    const target = event.target.closest('.app-container');
    if (target) {
        const url = target.querySelector('.download-btn').getAttribute('href');
        window.open(url, '_blank');
    }
});

const esignContainer = document.querySelector('.esign-section');
esigns.forEach(esign => {
    esignContainer.innerHTML += render(esign.name, esign.url, esign.img, esign.descriptions);
});
esignContainer.addEventListener('click', (event) => {
    const target = event.target.closest('.app-container');
    if (target) {
        const url = target.querySelector('.download-btn').getAttribute('href');
        window.open(url, '_blank');
    }
});

const guideContainer = document.querySelector('.guide-section');
guides.forEach(guide => {
    guideContainer.innerHTML += render(guide.name, guide.url, guide.img, guide.descriptions);
});
guideContainer.addEventListener('click', (event) => {
    const target = event.target.closest('.app-container');
    if (target) {
        const url = target.querySelector('.download-btn').getAttribute('href');
        window.open(url, '_blank');
    }
});

function render(name, url, img, description) {
    return  `<div class="app-container">
        <div class="app">
            <img src="${img}" class="app-img box-shadow" alt="">
            <h1 style="margin-left: 1em">${name}<br>
                <p>${description}</p>
            </h1>
        </div>
        <i href="${url}" class="download-btn" style="color: #42a9f7;">
            ${cloudIcon}
        </i>
    </div>`
}
