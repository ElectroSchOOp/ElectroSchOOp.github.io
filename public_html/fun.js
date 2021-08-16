export {getBoxInnerPos};

function getBoxInnerPos(box) {
    var bounds = box.getBoundingClientRect();
    var borderWidth = (box.offsetWidth - box.clientWidth) / 2;
    var x = Math.round(bounds.left + borderWidth);
    var y = Math.round(bounds.top + borderWidth);
    return {x: x, y:y};
}

