import React, { useReducer } from 'react';

type Color = 'red' | 'orange' | 'green' | 'yellow';

type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
};

type Action =
    | {
          type: 'SET_COUNT';
          count: number;
      }
    | { type: 'SET_TEXT'; text: string }
    | { type: 'SET_COLOR'; color: Color }
    | { type: 'TOGGLE_GOOD' };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                count: action.count,
            };
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text,
            };
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color,
            };
        case 'TOGGLE_GOOD':
            return {
                ...state,
                isGood: !state.isGood,
            };
        default:
            throw new Error('Unknown action type');
    }
}
