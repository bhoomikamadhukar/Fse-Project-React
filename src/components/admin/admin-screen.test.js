import React from "react";
import {
    fireEvent,
    render,
    screen,
    click,
    act,
    waitFor
} from '@testing-library/react';
import Tuiter from "./index";
import '@testing-library/jest-dom'
import Profile from "../profile";

const links = [
{label: 'View All Users', expect: {textOnScreen: 'Existing Users'}, path: '/profile/allusers'},
{label: 'Add User', expect: {textOnScreen: 'Create User'}, path: '/profile/createUser'},
{label: 'Edit User Details', expect: {textOnScreen: 'User Edit'}, path: '/admin/users/:uid'},

]

describe('testing view all users renders all users', () => {
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            // eslint-disable-next-line testing-library/no-render-in-setup
            render(<Profile/>)
        });
    });
    links.forEach((link, nth) => {
        const testName = `Clicking on ${link.label} navigates to all users`;
        test(testName, async () => {
            // eslint-disable-next-line testing-library/no-unnecessary-act
            await act(() => {
                // get all the links
                // eslint-disable-next-line testing-library/no-node-access
                const a = document.querySelectorAll("a");
                // click on the nth link
                fireEvent.click(a[nth]);
            })
            // const regex = new RegExp(link.expect.textOnScreen, "i");
            // const linkElement = await screen.getByText(regex);
            // expect(linkElement).toBeInTheDocument();

            await waitFor(() => {
                const regex = new RegExp(link.expect.textOnScreen, "i");
                const linkElement = screen.getByText(regex);
                expect(linkElement).toBeInTheDocument();
            });
        });
    });
});

describe('testing update users', () => {
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            // eslint-disable-next-line testing-library/no-render-in-setup
            render(<Profile/>)
        });
    });
    links.forEach((link, nth) => {
        const testName = `Clicking on ${link.label} navigates to edit details of a user`;
        test(testName, async () => {
            // eslint-disable-next-line testing-library/no-unnecessary-act
            await act(() => {
                // get all the links
                // eslint-disable-next-line testing-library/no-node-access
                const a = document.querySelectorAll("a");
                // click on the nth link
                fireEvent.click(a[nth]);
            })
            // const regex = new RegExp(link.expect.textOnScreen, "i");
            // const linkElement = await screen.getByText(regex);
            // expect(linkElement).toBeInTheDocument();

            await waitFor(() => {
                const regex = new RegExp(link.expect.textOnScreen, "i");
                const linkElement = screen.getByText(regex);
                expect(linkElement).toBeInTheDocument();
            });
        });
    });
});

describe('Add user navigates to create user screen', () => {
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            // eslint-disable-next-line testing-library/no-render-in-setup
            render(<Profile/>)
        });
    });
    links.forEach((link, nth) => {
        const testName = `Clicking on ${link.label} navigates to new screen`;
        test(testName, async () => {
            // eslint-disable-next-line testing-library/no-unnecessary-act
            await act(() => {
                // get all the links
                // eslint-disable-next-line testing-library/no-node-access
                const a = document.querySelectorAll("a");
                // click on the nth link
                fireEvent.click(a[nth]);
            })
            // const regex = new RegExp(link.expect.textOnScreen, "i");
            // const linkElement = await screen.getByText(regex);
            // expect(linkElement).toBeInTheDocument();

            await waitFor(() => {
                const regex = new RegExp(link.expect.textOnScreen, "i");
                const linkElement = screen.getByText(regex);
                expect(linkElement).toBeInTheDocument();
            });
        });
    });
});
