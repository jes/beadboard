function beadboard(id, w, h) {
    let el = document.getElementById(id);
    el.className = el.className + ' beadboard';
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            let inner = document.createElement('div');
            let scrollpos = 0;
            inner.className = 'bead-inner';

            let cell = document.createElement('div');
            cell.className = 'bead';

            let redraw = function() {
                while (scrollpos > 63) scrollpos -= 64;
                while (scrollpos < 0) scrollpos += 64;

                if (scrollpos < 32) {
                    let innerwidth = scrollpos;
                    inner.style.width = innerwidth + "px";
                    inner.style.left = "0px";
                } else {
                    let innerwidth = 64-scrollpos;
                    inner.style.width = innerwidth + "px";
                    inner.style.left = (scrollpos-32) + "px";
                }
            };
            redraw();

            cell.addEventListener('click', function() {
                scrollpos += 32;
                redraw();
            });
            cell.addEventListener('wheel', function(evt) {
                if (evt.deltaY > 0) scrollpos += 4;
                else scrollpos -= 4;
                redraw();
            });

            cell.appendChild(inner);
            el.appendChild(cell);
        }
        let br = document.createElement('br');
        el.appendChild(br);
    }
}
