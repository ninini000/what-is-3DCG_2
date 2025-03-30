// ✅ メッセージを送信
sendMessage.addEventListener("click", function() {
    let message = messageInput.value.trim();
    if (message === "") return;

    let storedMessages = JSON.parse(localStorage.getItem("messages_" + currentGoodId)) || [];
    storedMessages.push(message);
    localStorage.setItem("messages_" + currentGoodId, JSON.stringify(storedMessages));

    messagePopup.style.display = "none";
    messageInput.value = "";

    // ✅ 感謝メッセージを表示
    let goodButton = document.querySelector(`.goodmark-image[data-id="${currentGoodId}"]`);
    let thankYouMessage = document.createElement("p");
    thankYouMessage.textContent = "メッセージが届きました！";
    thankYouMessage.classList.add("thank-you-message");
    goodButton.parentNode.appendChild(thankYouMessage);

    // 📍 メッセージ表示位置を調整
    thankYouMessage.style.position = "relative";
    thankYouMessage.style.top = "-20px"; // 表示を上に移動
    thankYouMessage.style.marginTop = "-10px"; // 追加微調整

    setTimeout(() => {
        thankYouMessage.remove();
    }, 3000);
});
