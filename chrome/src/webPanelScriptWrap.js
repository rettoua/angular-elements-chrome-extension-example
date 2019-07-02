let s = document.createElement('script');
s.type = 'text/javascript';
s.src = chrome.extension.getURL('web-panel.js');
s.onload = function() {
    const panel = document.createElement('custom-element');
    try {
        document.body.appendChild(panel);
    } catch (e) {
        console.log(e);
    }
};
try {
    (document.head || document.documentElement).appendChild(s);
} catch (e) {
    console.log(e);
}