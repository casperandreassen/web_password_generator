document.getElementById('learn_more').addEventListener('click', () => {
    const self_div = document.getElementById('second_body_elements');
    console.log(self_div.style.display)
    if (self_div.style.display === '' || self_div.style.display === 'none') {
        self_div.style.cssText = 'display: block;';
    } else if (self_div.style.display === 'block') {
        self_div.style.cssText = 'display: none;';
    }
})


