const OpenPopUp = document.getElementById('open_popap');
const ClosePopUp = document.getElementById('popap_close');
const PopUp = document.getElementById('popap');

OpenPopUp.addEventListener('click', function(e){
    e.preventDefault();
    PopUp.classList.add('active');
})

ClosePopUp.addEventListener('click', () => {
    PopUp.classList.remove('active');
})