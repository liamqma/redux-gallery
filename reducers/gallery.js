import Faker from 'faker';
import _ from 'lodash';

const initialState = {
    slides: [
        {
            text: Faker.lorem.paragraphs(),
            image: 'http://c2.staticflickr.com/8/7430/16423225512_a9e7c6b471_h.jpg'
        },
        {
            text: Faker.lorem.paragraphs(),
            image: 'http://c2.staticflickr.com/8/7440/15801652444_e7d316cd32_k.jpg'
        },
        {
            text: Faker.lorem.paragraphs(),
            image: 'http://c2.staticflickr.com/8/7417/16424137915_706c06d0be_k.jpg'
        }
    ],
    index: 0,
    slideWidth: 555,
    slideHeight: 555,
    windowWidth: 1279
};

export default function gallery(state = initialState, action = {}) {
    switch (action.type) {
        case 'MOVE_RIGHT':
            //Object.assign({}, state, {index: state.index})
            return {
                ...state,
                index: state.index + 1
            };
        case 'MOVE_LEFT':
            return {
                ...state,
                index: state.index - 1
            };
        case 'MOVE_TO':
            return {
                ...state,
                index: action.index
            };
        case 'ADD_SLIDE':
            let slides = _.cloneDeep(state.slides);
            slides.push({
                image: action.image,
                text: 'fadsfdsafdsaljf fdasfdsafdasfsdaf'
            });

            return {
                ...state,
                slides
            };
        case 'CHANGE_WINDOW_SIZE':
            return {
                ...state,
                windowWidth: action.size
            };
        default:
            return state;
    }
}
