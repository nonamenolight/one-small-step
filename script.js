const startTime = new Date("2026-09-11T16:00:00+08:00");

let language = "zh";

function updateUptime() {
    const now = new Date();
    let seconds = Math.floor((now - startTime) / 1000);

    const years = Math.floor(seconds / (365.25 * 24 * 60 * 60));
    seconds -= years * 365.25 * 24 * 60 * 60;

    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds -= days * 24 * 60 * 60;

    const hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * 60 * 60;

    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    if (language === "zh") {
        document.getElementById("uptime-days").textContent =
            `${Math.floor(years)} 年 ${days} 日`;

        document.getElementById("uptime-time").textContent =
            `${hours} 时 ${minutes} 分 ${seconds} 秒`;
    } else {
        document.getElementById("uptime-days").textContent =
            `${Math.floor(years)} years ${days} days`;

        document.getElementById("uptime-time").textContent =
            `${hours} hours ${minutes} minutes ${seconds} seconds`;
    }
}

document
    .getElementById("language-switch")
    .addEventListener("click", () => {
        language = language === "zh" ? "en" : "zh";

        document.documentElement.lang =
            language === "zh" ? "zh-CN" : "en";

        document.getElementById("title").textContent =
            language === "zh"
                ? "这是全人类的一小步，却是我个人的一大步。"
                : "One small step for humanity, one giant leap for me.";

        document.getElementById("quote-en").textContent =
            language === "zh"
                ? "One small step for humanity, one giant leap for me."
                : "这是全人类的一小步，却是我个人的一大步。";

        document.getElementById("language-switch").textContent =
            language === "zh" ? "EN" : "中";

        updateUptime();
    });

updateUptime();
setInterval(updateUptime, 1000);
