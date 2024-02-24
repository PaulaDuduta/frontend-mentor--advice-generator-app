const adviceNum = $('#advice-num');
const adviceText = $('#advice-text');
const changeAdviceBtn = $('#change-advice-btn');

changeAdviceBtn.on('click', function () {
  requestAdvice();
});

function requestAdvice() {
  $.ajax({
    url: 'https://api.adviceslip.com/advice',
    type: 'GET',
    cache: false,
    success: function (data) {
      let jsonData = JSON.parse(data);
      adviceNum.text(`Advice #${jsonData['slip'].id}`);
      adviceText.text(jsonData['slip'].advice);
    },
    error: function (error) {
      console.log('Error:', error);
    },
  });
}

requestAdvice();
