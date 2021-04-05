import {render, screen} from '@testing-library/react';
import React from "react";
import {Title} from "./Title";

describe('Welcome Component', () => {
    it('should display h1', () => {
        render(<Title person={"Crystallize Admin"}/>);
        const h1 = screen.getByRole('heading');
        expect(h1.innerHTML).toEqual(
            'Hello Crystallize Admin'
        );
    });
});
