export function moveRight() {
    return {
        type: 'MOVE_RIGHT',
        apiCall: '/saveMove'
    };
}

export function moveLeft() {
    return {
        type: 'MOVE_LEFT'
    }
}

export function moveTo(index) {
    return {
        type: 'MOVE_TO',
        index
    }
}

export function addSlide(image) {
    return {
        type: 'ADD_SLIDE',
        image
    }
}

export function changeWindowSize(size) {
    return {
        type: 'CHANGE_WINDOW_SIZE',
        size
    }
}
