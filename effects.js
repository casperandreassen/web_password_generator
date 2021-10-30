document.getElementById('learn_more').addEventListener('click', () => {
    const self_div = document.getElementById('second_body_elements');
    console.log(self_div.style.display)
    if (self_div.style.visibility === '' || self_div.style.visibility === 'hidden') {
        self_div.style.cssText = 'visibility: visible; opacity: 1; transition: visibility 0.1s, opacity 0.3s linear;';
    } else if (self_div.style.visibility === 'visible') {
        self_div.style.cssText = 'visibility: hidden; opacity: 0; transition: visibility 0.1s, opacity 0.3s linear;';
    }
})


